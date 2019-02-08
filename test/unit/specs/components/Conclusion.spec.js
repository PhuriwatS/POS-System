import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Conclusion from '@/components/Conclusion'
import store from '@/store/store'

describe('Conclusion.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('should render correct contents', () => {
    const wrapper = shallowMount(Conclusion, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
