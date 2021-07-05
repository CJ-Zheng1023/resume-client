import { SET_IS_MD } from '@/store/mutation-types'
import { IStore } from '@/store/types'
import { IState } from './state'
import { ActionContext } from 'vuex'
export const actions = {
  setIsMd: ({ commit }: ActionContext<IState, IStore>, flag: boolean) => {
    commit(SET_IS_MD, flag)
  }
}
