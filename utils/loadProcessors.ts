import dir from 'node-dir'

export async function loadProcessors(
  pathToRead: string,
  customProcessors: (string | Buffer)[],
): Promise<(string | Buffer)[]> {
  await new Promise((resolve) => {
    dir.readFiles(
      pathToRead,
      {
        match: /.js$/,
      },
      function (err, content, next) {
        err ? console.error('Unable to read file', err) : customProcessors.push(content)

        next()
      },
      function (err, files) {
        err ? console.error('Unable to read file', err) : console.log('finished reading files:', files)

        resolve(true)
      },
    )
  })
  return customProcessors
}
