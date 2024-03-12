export interface IRegister {
    user_name: string,
    user_last_name: string,
    user_email: string,
    user_telephone: string,
    user_password: string
}

export interface IView {
    wrongMail: boolean,
    insufPassword: boolean,
    insufName: boolean,
    insufLatsName: boolean,
    wrongPhone: boolean,
    diferentPassword: boolean
}