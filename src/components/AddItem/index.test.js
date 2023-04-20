// PLAN

import React from "react";
// Check if the user input appear in the input box on the browser
// Import stuff from jest.
import { test, expect } from "@jest/globals";
// Import stuff from React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // we need this to use the custom jest-dom matchers
// import userEvent from "@testing-library/user-event";

// Import component that we're testing
//      AddItem
import AddItem from "./index.js";

//- Write a test that verifies that the `AddItem` component shows the user:
//- an input with an "Add item:" label
//- a button containing the value of the `buttonText` prop

test("Input should have 'Add item' label and button should have 'Add To List' text", () => {
  // Define the props before rendering the component
  const addToList = jest.fn(); // This is a mock function that we use to check if the function is called when the button is clicked
  const buttonText = "Add To List"; // This is the text that we want to check if it appears on the button

  // 3 As:
  // Arrange
  //  render the component
  render(<AddItem addToList={addToList} buttonText={buttonText} />); // This is the component that we want to test and the props that we want to pass to it

  // screen.logTestingPlaygroundURL();
  // screen.debug();

  // Act
  //  Make a variable to assign the input that we want to check
  const actualLabel = screen.getByLabelText(/Add item:/i);
  const expectedLabel = "Add item:";
  const actualButton = screen.getByText(buttonText);
  const expectedButton = "Add To List"; 

  // Assert
  //  Compare actual and expected to check if the label of the input has value of 'AddItem:'
  expect(actualLabel).toHaveTextContent(expectedLabel);
  expect(actualButton).toHaveTextContent(expectedButton);
});
