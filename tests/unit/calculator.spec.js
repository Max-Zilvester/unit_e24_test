import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('120');
    expect(wrapper.vm.runningTotal).to.equal(124);
  })
})

describe('App.vue', () => {
  it('Should be able to subtract numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('2');
    expect(wrapper.vm.runningTotal).to.equal(5);
  })
})


describe('App.vue', () => {
  it('Should be able to multiply numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 10
    wrapper.vm.multiply('3');
    expect(wrapper.vm.runningTotal).to.equal(30);
  })
})

describe('App.vue', () => {
  it('Should be able to divide numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 49
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(7);
  })
})

describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => { 
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(4)
    wrapper.vm.numberClick(6)
    wrapper.vm.numberClick(8)
  expect(wrapper.vm.runningTotal).to.equal(2468)
  })
})

describe('operatorClick', () => {
  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(10)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(3)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(10)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(2)
  }) 
})

describe('clearClick', () => {
  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick()
  expect(wrapper.vm.runningTotal).to.equal(0)
  expect(wrapper.vm.previousTotal).to.equal(18)
  })
})