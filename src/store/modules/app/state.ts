export interface IApp {
  // 当前屏幕宽度是否大于992px
  isMd: boolean
  drawerOpened: boolean
}
export interface IState {
  app: IApp
}
export const state: IState = {
  app: {
    isMd: false,
    drawerOpened: false
  }
}
