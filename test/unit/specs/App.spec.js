import Vue from 'vue'
import App from '@/components/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.App-container h1').textContent).toEqual('Page Not Found')
  })
})
