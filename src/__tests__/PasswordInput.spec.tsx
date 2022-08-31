import React from "react";
import { render, screen } from "@testing-library/react";

import PasswordInput from "../components/Wizard/steps/Step2/PasswordInput";
import { IInput } from "../components/Wizard/utils/interfaces";
import userEvent from "@testing-library/user-event";

const mockHandleInput = jest.fn();

const props: IInput = {
  name: "password",
  label: "your password",
  placeholder: "insert your password",
  value: "",
  required: true,
  min: 8,
  max: 24,
  handleInput: mockHandleInput,
};

describe("password input testing suite", () => {
  test("should render the component with props", () => {
    render(<PasswordInput {...props} />);
    const passInput = screen.getByLabelText(/your password/i);
    expect(passInput).toBeInTheDocument();
  });
  test("should be able to type in an call mockHandleInput", () => {
    render(<PasswordInput {...props} />);
    const passInput = screen.getByLabelText(/your password/i);
    userEvent.type(passInput, "abcABC123");
    expect(mockHandleInput).toHaveBeenCalled();
  });
  test("should render the eye icon and the password strength component", () => {
    const { container } = render(<PasswordInput {...props} />);
    const eyes = container.getElementsByClassName("fa-eye");
    const strength = container.getElementsByClassName("password-strength");
    expect(eyes).toHaveLength(1);
    expect(strength).toHaveLength(1);
  });
  test("should change strength color based on inserted password", () => {
    const { container, rerender } = render(
      <PasswordInput {...props} value='abc' />
    );
    const weak = container.getElementsByClassName("weak");
    expect(weak).toHaveLength(1);
    rerender(<PasswordInput {...props} value='abcABC123' />);
    const good = container.getElementsByClassName("good");
    expect(good).toHaveLength(1);
    rerender(<PasswordInput {...props} value='abcABC123!' />);
    const strong = container.getElementsByClassName("strong");
    expect(strong).toHaveLength(1);
  });
});
