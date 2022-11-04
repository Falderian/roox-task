export interface IState {
  status: string;
  formData: {
    city: string;
    password: string;
    passwordRepeat: string;
    email: string;
    checkbox: boolean;
  };
}
