import * as fs from 'fs'

export async function loadSpecificProcessor(
  pathToRead: string,
  customProcessors: (string | Buffer)[],
): Promise<(string | Buffer)[]> {
  await new Promise(async (resolve) => {
    try {
      const data = fs.readFileSync(pathToRead, 'utf8')
      customProcessors.push(data)
      resolve(true)
    } catch (err) {
      console.error(err)
    }
  })
  return customProcessors
}
