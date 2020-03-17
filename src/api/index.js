import backendApi from './backend'

function install (Vue, option) {
  let api = backendApi(option)
  Vue.api = api
  Vue.prototype.$api = api
}

export default {
  install
}