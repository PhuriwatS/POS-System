import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Cart from '@/components/Cart'
import store from '@/store/store'

describe('Cart.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('should render correct contents', () => {
    const wrapper = shallowMount(Cart, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
