import { getByTestId } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import Table from "../components/Table";



describe("Table", () => {

    let container = null;

    const fakeRows = [
        { ward: "WD01", rep: 100, dem: 100, other_party: 100, male: 100, female: 100, unknown_sex: 100, black: 100, hispanic: 100, white: 100, other_race: 0, total: 300 },
        { ward: "WD02", rep: 100, dem: 100, other_party: 100, male: 100, female: 100, unknown_sex: 100, black: 100, hispanic: 100, white: 100, other_race: 0, total: 300 },
        { ward: "WD03", rep: 100, dem: 100, other_party: 100, male: 100, female: 100, unknown_sex: 100, black: 100, hispanic: 100, white: 100, other_race: 0, total: 300 },
        { ward: "WD04", rep: 100, dem: 100, other_party: 100, male: 100, female: 100, unknown_sex: 100, black: 100, hispanic: 100, white: 100, other_race: 0, total: 300 },
        { ward: "WD05", rep: 100, dem: 100, other_party: 100, male: 100, female: 100, unknown_sex: 100, black: 100, hispanic: 100, white: 100, other_race: 0, total: 300 }
      ];
  
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
      render(<Table />, container);
    });


    it("contains a row for each row in `rows` prop", () => {
        act(() => {
            render(<Table rows={fakeRows} />, container);
        });
        expect(getByTestId(container, "tableBody").children.length).toBe(fakeRows.length);
    });


    it("displays `%` in the final column of each row when no segment is selected", () => {
        act(() => {
            render(<Table rows={fakeRows} segment=""/>, container);
        });
        expect(getByTestId(container, "WD01percent").innerHTML).toBe("%");
        expect(getByTestId(container, "WD02percent").innerHTML).toBe("%");
        expect(getByTestId(container, "WD03percent").innerHTML).toBe("%");
        expect(getByTestId(container, "WD04percent").innerHTML).toBe("%");
        expect(getByTestId(container, "WD05percent").innerHTML).toBe("%");
    });


    it("displays the correct selected segment percentage for each ward", () => {
        act(() => {
            render(<Table rows={fakeRows} segment="male" />, container);
        });
        expect(getByTestId(container, "WD01percent").innerHTML).toBe("33.33%");
        expect(getByTestId(container, "WD02percent").innerHTML).toBe("33.33%");
        expect(getByTestId(container, "WD03percent").innerHTML).toBe("33.33%");
        expect(getByTestId(container, "WD04percent").innerHTML).toBe("33.33%");
        expect(getByTestId(container, "WD05percent").innerHTML).toBe("33.33%");

        act(() => {
            render(<Table rows={fakeRows} segment="other_race" />, container);
        });
        expect(getByTestId(container, "WD01percent").innerHTML).toBe("0.00%");
        expect(getByTestId(container, "WD02percent").innerHTML).toBe("0.00%");
        expect(getByTestId(container, "WD03percent").innerHTML).toBe("0.00%");
        expect(getByTestId(container, "WD04percent").innerHTML).toBe("0.00%");
        expect(getByTestId(container, "WD05percent").innerHTML).toBe("0.00%");
    });
});
  