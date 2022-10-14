import { fireEvent, getAllByAltText, getAllByTestId, getByTestId } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import Dropdown from '../components/Dropdown';



describe("Dropdown", () => {

    let container = null;

    let mockSelection = "";

    const mockLabel = "Select an option";
    const mockValue = mockSelection;
    const mockOptions = [
        { value: "0", label: "Option 0"},
        { value: "1", label: "Option 1"},
        { value: "2", label: "Option 2"},
        { value: "3", label: "Option 3"},
        { value: "4", label: "Option 4"}
    ];
    const mockOnChange = (event) => {
        mockSelection = event.target.value;
    };
  
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
      mockSelection = "";
    });
  
  
    it("renders correctly", () => {
      render(<Dropdown label={mockLabel} value={mockValue} options={mockOptions} onChange={mockOnChange} />, container);
    });


    it("updates selection when clicked", () => {
        render(<Dropdown label={mockLabel} value={mockValue} options={mockOptions} onChange={mockOnChange} />, container);

        act(() => {
            fireEvent.click(getByTestId(container, "select"), { target: { value: "2"} });
        });

        let options = getAllByTestId(container, "select-option");
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeTruthy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeFalsy();
    });


    it("calls callback function on change", () => {
        render(<Dropdown label={mockLabel} value={mockValue} options={mockOptions} onChange={mockOnChange} />, container);

        expect(mockSelection).toBe("");

        act(() => {
            fireEvent.change(getByTestId(container, "select"), { target: { value: "0"} });
        });
        expect(mockSelection).toBe("0");

        act(() => {
            fireEvent.change(getByTestId(container, "select"), { target: { value: "1"} });
        });
        expect(mockSelection).toBe("1");

        act(() => {
            fireEvent.change(getByTestId(container, "select"), { target: { value: "2"} });
        });
        expect(mockSelection).toBe("2");

        act(() => {
            fireEvent.change(getByTestId(container, "select"), { target: { value: "3"} });
        });
        expect(mockSelection).toBe("3");

        act(() => {
            fireEvent.change(getByTestId(container, "select"), { target: { value: "4"} });
        });
        expect(mockSelection).toBe("4");
    });
  });