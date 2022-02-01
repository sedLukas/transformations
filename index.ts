import commandLineArgs from 'command-line-args'
import {commandLineDefinition} from './config/commandLineDefinition'

import {copyAndTransform} from './utils/copyAndTransform'
import {loadProcessors} from './utils/loadProcessors'
import {loadSpecificProcessor} from './utils/loadSpecificProcessor'

const main = async () => {
  const {input, output, processors} = commandLineArgs(commandLineDefinition)
  let customProcessors: (string | Buffer)[] = []

  // load all processors in inputFolder
  const pathToRead = `${__dirname}/${input}`
  customProcessors = await loadProcessors(pathToRead, customProcessors)

  //load all processors defined in CLI
  if (processors && processors.length > 0) {
    processors.forEach(async (processorItemPath: string) => {
      const pathToRead = `${__dirname}/${processorItemPath}`
      customProcessors = await loadSpecificProcessor(pathToRead, customProcessors)
    })
  }

  const inputPath = `${__dirname}/${input}`
  const outputPath = `${__dirname}/${output}`
  copyAndTransform(inputPath, outputPath, customProcessors)
}

main()
