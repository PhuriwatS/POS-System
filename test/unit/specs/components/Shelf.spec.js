import Vue from 'vue'
import Shelf from '@/components/Shelf'

describe('Shelf.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Shelf)
    console.log('Constructor', Constructor);
    const vm = new Constructor().$mount()
    console.log('vm.$el', vm.$el);
    console.log('====');
    expect(vm.$el.querySelector('.shelf-container h1').length).toEqual(1)
  })
})
