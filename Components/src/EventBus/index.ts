import type { Emitter } from 'mitt'
import mitt from 'mitt'

interface Events {
  'on-card': string
  [key: string]: unknown
  [key: symbol]: unknown
}

const emitter: Emitter<Events> = mitt<Events>()

export default emitter
