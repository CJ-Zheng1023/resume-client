import { CACHE_PREFIX } from '@/config'
const EXPIRE_TIME = 60 * 60 * 24 * 7
const createStorage = ({ prefix = '', storage = localStorage } = {}) => {
  class Storage {
    private storage = storage
    private prefix = prefix
    genKey(key: string): string {
      return `${this.prefix}-${key}`
    }
    set(key: string, value: any, expire: number | null = EXPIRE_TIME) {
      const timestamp = expire ? +new Date() + expire * 1000 : null
      this.storage.setItem(
        this.genKey(key),
        JSON.stringify({
          value,
          timestamp
        })
      )
    }
    get(key: string) {
      const dataStr = this.storage.getItem(this.genKey(key))
      if (!dataStr) {
        return ''
      }
      const { value, timestamp } = JSON.parse(dataStr)
      if (timestamp === null || timestamp > +new Date()) {
        return value
      } else {
        this.remove(key)
        return ''
      }
    }
    remove(key: string) {
      this.storage.removeItem(this.genKey(key))
    }
  }
  return new Storage()
}
export const storage = createStorage({ prefix: CACHE_PREFIX })
