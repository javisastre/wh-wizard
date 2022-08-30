import React from "react";
import { render, screen } from "@testing-library/react";

import TextInput from "./../components/Wizard/steps/Step2/TextInput";
import { IInput } from "../components/Wizard/utils/interfaces";

const props: IInput = {
  name: "name",
  label: "Your name",
  placeholder: "Insert your name here",
  required: true,
  min: 3,
  value: "",
  error: "",
  handleInput: jest.fn(),
  handleError: jest.fn(),
};

describe("TextInput component test suite", () => {
  test("should render the component with props", () => {
    render(<TextInput {...props} />);
    screen.logTestingPlaygroundURL();
  });
});
