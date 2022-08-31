import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextInput from "./../components/Wizard/steps/Step2/TextInput";
import { IInput } from "../components/Wizard/utils/interfaces";

const mockHandleInput = jest.fn();

const props: IInput = {
  name: "name",
  label: "Your name",
  placeholder: "Insert your name here",
  required: true,
  min: 3,
  value: "",
  error: "",
  handleInput: mockHandleInput,
  handleError: jest.fn(),
};

describe("TextInput component test suite", () => {
  test("should render the component with props", () => {
    render(<TextInput {...props} />);
    const input = screen.getByRole("textbox", { name: /your name/i });
    expect(input).toBeInTheDocument();
  });
  test("should render the component and call mockHandleInput", () => {
    render(<TextInput {...props} />);
    const input = screen.getByRole("textbox", { name: /your name/i });
    userEvent.clear(input);
    userEvent.type(input, "judith butler");
    expect(mockHandleInput).toHaveBeenCalled();
  });
});
