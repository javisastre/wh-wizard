import { ChangeEvent } from "react";

// CONTEXT
export interface IWizardData {
  step1: IStep1;
  step2: IStep2;
  step3: IStep3;
}
export interface IStep1 {
  confirmPrivacy: boolean;
}
export interface IStep2 {
  username: string;
  password: string;
  repeatPassword: string;
  hint: string;
}
export interface IStep3 {
  success: boolean;
  error: boolean;
}
export interface IWizardContextValues {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  wizardData: IWizardData;
  setWizardData: React.Dispatch<React.SetStateAction<IWizardData>>;
  step1Done: boolean;
  setStep1Done: React.Dispatch<React.SetStateAction<boolean>>;
  step2Done: boolean;
  setStep2Done: React.Dispatch<React.SetStateAction<boolean>>;
  finished: IStep3;
  setFinished: React.Dispatch<React.SetStateAction<IStep3>>;
}

// NAVIGATION
export interface IHeaderStep {
  isThisStep: boolean;
  stepDone: boolean;
  label: string;
}
export interface IHeaderBars {
  isStep1: boolean;
  step2Done: boolean;
  isStep3: boolean;
}
export interface IHeaderTriangle {
  isStep1: boolean;
  isStep2: boolean;
}
export type ILanguages = {
  es: string;
  ca: string;
};

// STEP2
export interface IValidators {
  username: RegExp;
  password: RegExp;
  repeatPassword: RegExp;
}
export interface IErrorMessages {
  username: string;
  password: string;
  repeatPassword: string;
}
export interface IErrorMessagesDB {
  username: {
    empty: string;
    invalid: string;
  };
  password: {
    empty: string;
    invalid: string;
  };
  repeatPassword: {
    empty: string;
    invalid: string;
  };
}
export type TInputsEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export interface IInput {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  min: number;
  max?: number;
  value: string;
  error?: string;
  handleInput: (e: TInputsEvent) => void;
  handleError?: (e: TInputsEvent) => void;
}
export type TStep2Fields = "username" | "password" | "repeatPassword";
export interface IPasswordEye {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IPasswordStrength {
  password: string;
}

// STEP3
export interface IMessage {
  content: {
    title: string;
    body: string;
  };
}
