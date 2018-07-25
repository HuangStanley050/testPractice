import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';
/*global expect*/

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factor function to write shallow wrapper for App component
 * @function setup
 * @param {object}props Component specific to this setup
 * @param {object} state
 * @return {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props}/>);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;

};

/**
 * Return ShallowWrapper containing node(s) with given data-test attribute
 * @param {ShallowWrapper} Enzyme shallow wrapper
 * @param {string}
 * @reunt {ShallowWrapper}
 */
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);



describe("Testing for App component", () => {

  it("should renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  it("should render counter button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);

  });

  it("should render a counter decrment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  it("should render a display of counter", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);

  });

  it("the counter should starts at 0", () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);

  });

  it("should decrement the counter when clicking on the button", () => {
    const counter = 10;
    const wrapper = setup(null, { counter: counter });

    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();

    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter - 1);


  });

  it("should increment the counter when clicking on button on display", () => {
    const counter = 7;
    const wrapper = setup(null, { counter: counter });

    //find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate('click');
    wrapper.update();

    //find display and test
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter + 1);

  });

  //not sure how to test if the display counter is < 0
  /*it("should not display the counter below zero", () => {
    const counter = 0;
    const wrapper = setup(null, { counter: counter });
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();
    const counterState = wrapper.state().counter;
    expect(counterState).not.toBeLessThan(0);
  });*/

  it("should not decrement the counter if counter is at 0", () => {
    const counter = 0;
    const wrapper = setup(null, { counter: counter });
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();
    const counterState = wrapper.state().counter;
    expect(counterState).not.toBeLessThan(0);

  });

  it("should display an error message when clicking on decrement with counter below zero", () => {
    const counter = 0;
    const wrapper = setup(null, { counter: counter });
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();
    const counterDisplay = findByTestAttr(wrapper, "error-display");
    expect(counterDisplay.text()).toContain("error");
  });


});
