import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';
/*global expect*/

Enzyme.configure({ adapter: new Adapter() });

describe("Testing for App component", () => {
  it("should renders without error", () => {
    const wrapper = shallow(<App/>);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
  });
  it("should render counter button", () => {

  });
  it("should render a display of counter", () => {

  });
  it("the counter should starts at 0", () => {

  });
  it("should increment the counter when clicking on button on display", () => {

  });
});
