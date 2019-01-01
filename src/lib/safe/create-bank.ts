import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import uuid from 'uuid/v4'
import { DEFAULT_WRITE_FILE_OPTIONS } from '../../defaults'
import { ensureAbsolute } from '../../helpers/ensure'
import { IBank, IBankData, IBankOptions } from '../interfaces/Bank'

const writeFile = promisify(fs.writeFile)

/**
 * Creates a new bank and return its data.
 *
 * @throws {Error} If the `safePath` param is not an absolute path.
 */
export async function createBank(
  safePath: string,
  options: IBankOptions
): Promise<IBankData> {
  // Ensures that the path is absolute:
  ensureAbsolute(safePath)

  const resolvedPath = path.resolve(safePath)
  const bankId = uuid()
  const fullPath = path.join(resolvedPath, `${bankId}.json`)

  const contents: IBank = {
    id: bankId,
    name: options.name,
    password: options.password,
    store: []
  }

  await writeFile(
    fullPath,
    JSON.stringify(contents),
    DEFAULT_WRITE_FILE_OPTIONS
  )

  return {
    id: bankId,
    name: options.name,
    path: fullPath
  }
}
