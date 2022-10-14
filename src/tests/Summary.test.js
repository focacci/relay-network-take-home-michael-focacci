import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Summary from "../components/Summary";



describe("Summary", () => {

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
      render(<Summary />, container);
    })
  
  
    it("displays correct top segment data", () => {
      const fakeTotals = { black: 400, white: 400, male: 400, female: 400, dem: 400, rep: 400, other_party: 404, total: 2804 };
  
      act(() => {
        render(<Summary totals={fakeTotals}/>, container);
      });
      expect(container.querySelector('#topSeg').textContent).toBe("Top Segment of All Voters: Other Party - 404 - 14.41%");
    });
  
    it("displays correct selected segment data", () => {
      const fakeTotals = { black: 400, white: 400, male: 400, female: 400, dem: 400, rep: 400, other_party: 404, total: 2804 };
      const selSeg = "male";
  
      act(() => {
        render(<Summary totals={fakeTotals} segment={selSeg}/>, container);
      });
      expect(container.querySelector('#selSeg').textContent).toBe("Percentage of All Voters that are Male - 400 - 14.27%");
    });
});
  