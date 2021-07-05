import { SET_IS_MD } from '@/store/mutation-types'
import { IState } from './state'
export const mutations = {
  [SET_IS_MD]: (state: IState, flag: boolean) => {
    state.app.isMd = flag
  }
}
