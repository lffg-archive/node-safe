import { join } from 'path'
import { ensureAbsolute } from '../src/helpers/ensure'

describe('ensureAbsolute ensurer', () => {
  it('should return true when the given path is absolute', () => {
    expect(ensureAbsolute(join(__dirname, '..'))).toBe(true)
  })

  it('should throw an error when the given path is not absolute', () => {
    expect(() => ensureAbsolute('../src')).toThrow(Error)
  })
})
