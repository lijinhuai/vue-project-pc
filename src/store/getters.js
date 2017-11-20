const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,

  routers: state => state.app.routers,
  menuList: state => state.app.menuList,
  tagsList: state => state.app.tagsList,
  pageOpenedList: state => state.app.pageOpenedList,
  currentPageName: state => state.app.currentPageName,
  currentPath: state => state.app.currentPath,
  openedSubmenuArr: state => state.app.openedSubmenuArr,
  menuTheme: state => state.app.menuTheme,
  theme: state => state.app.theme,
  cachePage: state => state.app.cachePage,
  lang: state => state.app.lang,
  isFullScreen: state => state.app.isFullScreen,
  dontCache: state => state.app.dontCache
}

export default getters
