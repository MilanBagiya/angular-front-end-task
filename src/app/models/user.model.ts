export interface ILoginModel {
  email: string;
  password: string;
}

export interface IUserLoginResponseModal {
  email: string;
  fullName: string;
  userId: string;
  userName: string;
  userRole: Array<string>;
}

export interface ISignInResponseModel {
  accessToken: string;
  loginResponse: IUserLoginResponseModal;
}

export interface IRegisterUserResponseModel {
  data: SignUpResponseModel[];
  message?: string;
  status?: boolean;
  statusCode?: number;
}

export interface SignUpResponseModel {
  email: string;
  id: string;
  userName: string;
}

export interface IRegisterUserModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: number;
}

export interface IResetPasswordModel {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  password: string;
}

export interface IChangeEmailModel {
  email: string;
  currentPassword: string;
}

export interface IChangeuserModel {
  firstName: string;
  lastName: string;
  userName: string;
}
