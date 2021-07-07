import { IState } from './state'
export const getters = {
  isMd: (state: IState) => state.app.isMd,
  drawerOpened: (state: IState) => state.app.drawerOpened
}
