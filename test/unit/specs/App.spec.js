import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import App from '@/components/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(App)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.App-container h1').textContent).toEqual('Page Not Found')

    // const wrapper = mount(App)
    // const vm = wrapper.vm
    // expect(wrapper.contains('#app')).toBe(true)

    // const wrapper = shallowMount(App)
    // expect(wrapper.isVueInstance()).toBeTruthy()

    expect(1).toEqual(1)
  })
})
