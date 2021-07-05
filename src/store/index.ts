import modules from './modules'
import { createStore, createLogger } from 'vuex'
const debug = process.env.NODE_ENV === 'development'
const plugins = debug ? [createLogger()] : []
export default createStore({
  modules,
  plugins
})
