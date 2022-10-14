import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';

import App from '../App';



describe("App", () => {

  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


  it("renders correctly", () => {
    render(<App />, container);
  });
});