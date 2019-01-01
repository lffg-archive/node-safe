import { isAbsolute } from 'path'

/**
 * Checks if a path is absolute.
 *
 * @throws {Error} If the given path is not absolute.
 */
export function ensureAbsolute(path: string) {
  if (!isAbsolute(path)) {
    throw new Error(`The path ${path} must be absolute.`)
  }

  return true
}
