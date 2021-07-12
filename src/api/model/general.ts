interface General {
  jobs: string[]
  description: string
  info: Info
}
interface Info {
  name: string
  address: string
  email: string
  phone: string
}
export type generalResult = General
