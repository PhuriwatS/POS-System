import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Calculation from '@/components/Calculation'
import store from '@/store/store'

describe('Calculation.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('should render correct contents', () => {
    const wrapper = shallowMount(Calculation, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
