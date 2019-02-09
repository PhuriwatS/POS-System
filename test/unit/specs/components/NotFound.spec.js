import Vue from 'vue'
import NotFound from '@/components/NotFound'

describe('NotFound.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NotFound)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.notFound-container h1').textContent).toEqual('Page Not Found')
  })
})
