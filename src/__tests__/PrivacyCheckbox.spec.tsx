import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PrivacyCheckbox from "./../components/Wizard/steps/Step1/PrivacyCheckbox";
import { IPrivacyCheckbox } from "../components/Wizard/utils/interfaces";

const mockHandleData = jest.fn();

const props: IPrivacyCheckbox = {
  name: "privacy",
  label: "I agree with terms & conditions.",
  confirmPrivacy: false,
  handleData: mockHandleData,
};

describe("PrivacyCheckbox component testing suite", () => {
  test("it should render the component properly", () => {
    render(<PrivacyCheckbox {...props} />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree with terms & conditions\./i,
    });
    const label = screen.getByText(/i agree with terms & conditions\./i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(label).toBeInTheDocument();
  });
  test("it should call the mockHandleData function on click", () => {
    mockHandleData.mockReturnValue(true);
    render(<PrivacyCheckbox {...props} />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree with terms & conditions\./i,
    });
    userEvent.click(checkbox);
    expect(mockHandleData).toHaveBeenCalled();
  });
});
