import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Shelf from '@/components/Shelf'
import store from '@/store/store'

describe('Shelf.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('should render correct contents', () => {
    const wrapper = shallowMount(Shelf, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
