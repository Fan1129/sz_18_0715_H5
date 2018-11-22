const MyPlugin={};
MyPlugin.install = function (Vue, options) {
  // 2. 添加全局资源
  Vue.directive('black', {
    bind (el) {
      el.style.background="black"
    }
  })
}


export default MyPlugin
