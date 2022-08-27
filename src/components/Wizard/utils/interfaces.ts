export interface IWizardData {
  step1: IStep1;
  step2: IStep2;
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

export interface IWizardContextValues {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  wizardData: IWizardData;
  setWizardData: React.Dispatch<React.SetStateAction<IWizardData>>;
  step1Done: boolean;
  setStep1Done: React.Dispatch<React.SetStateAction<boolean>>;
  step2Done: boolean;
  setStep2Done: React.Dispatch<React.SetStateAction<boolean>>;
  finished: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IValidators {
  username: RegExp;
  password: RegExp;
  repeatPassword: RegExp;
  hint: RegExp;
}
