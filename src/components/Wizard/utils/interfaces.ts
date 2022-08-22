export interface IWizardContext {
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
