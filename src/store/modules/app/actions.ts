import { SET_IS_MD, SET_DRAWER_OPENED } from '@/store/mutation-types'
import { IStore } from '@/store/types'
import { IState } from './state'
import { ActionContext } from 'vuex'
export const actions = {
  setIsMd: ({ commit }: ActionContext<IState, IStore>, flag: boolean) => {
    commit(SET_IS_MD, flag)
  },
  setDrawerOpened: ({ commit }: ActionContext<IState, IStore>, flag: boolean) => {
    commit(SET_DRAWER_OPENED, flag)
  }
}
