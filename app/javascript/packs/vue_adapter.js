import Vue from 'vue/dist/vue.esm.js'
import HelloTurbolinks from './hello_turbolinks'

/**
 * Register components
 */
Vue.component('hello-turbolinks', HelloTurbolinks)

function VueConstructor () {
  let outlets = document.querySelectorAll('[data-vue-components-outlet]')
  outlets.forEach(function (outlet, index) {
    let id = outlet.getAttribute('data-vue-components-outlet')
    new Vue({
      el: '[data-vue-components-outlet=' + id + ']'
    })
  })
}

document.addEventListener('turbolinks:load', function () {
  VueConstructor()
})
