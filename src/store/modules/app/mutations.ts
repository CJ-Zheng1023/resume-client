import { SET_IS_MD, SET_DRAWER_OPENED } from '@/store/mutation-types'
import { IState } from './state'
export const mutations = {
  [SET_IS_MD]: (state: IState, flag: boolean) => {
    state.app.isMd = flag
  },
  [SET_DRAWER_OPENED]: (state: IState, flag: boolean) => {
    state.app.drawerOpened = flag
  }
}
