interface General {
  jobs: string[]
  description: string
  info: Record<string, string>
}
interface Info {
  name: string
  address: string
  email: string
  phone: string
}
export type generalResult = General
