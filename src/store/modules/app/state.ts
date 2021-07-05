export interface IApp {
  // 当前屏幕宽度是否大于992px
  isMd: boolean
}
export interface IState {
  app: IApp
}
export const state: IState = {
  app: {
    isMd: false
  }
}
