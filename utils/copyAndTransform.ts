import copy from 'recursive-copy'
import path from 'path'
import through from 'through2'

export function copyAndTransform(inputPath: string, outputPath: string, customProcessors: (string | Buffer)[]): void {
  const copyOptions = {
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
    filter: ['**/*'],
    transform: function (src: any) {
      if (path.extname(src) !== '.md') {
        return through(function (chunk, enc, done) {
          done(null, chunk)
        })
      }
      return through(function (chunk, enc, done) {
        let input = chunk.toString()
        customProcessors.forEach((processorFunction) => {
          input = eval(processorFunction.toString())
        })
        done(null, input)
      })
    },
  }

  copy(inputPath, outputPath, copyOptions)
    .on(copy.events.COPY_FILE_START, function (copyOperation) {
      console.info('Copying file ' + copyOperation.src + '...')
    })
    .on(copy.events.COPY_FILE_COMPLETE, function (copyOperation) {
      console.info('Copied to ' + copyOperation.dest)
    })
    .on(copy.events.ERROR, function (error, copyOperation) {
      console.error('Unable to copy ' + copyOperation.dest)
    })
    .then(function (results) {
      console.info(results.length + ' file(s) copied')
    })
    .catch(function (error) {
      return console.error('Copy failed: ' + error)
    })
}
