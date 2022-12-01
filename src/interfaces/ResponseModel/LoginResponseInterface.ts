import {BaseResponseInterface} from "./BaseResponseInterface";

export interface UserLoginResponseInterface {
    user: {
        id: number,
        name: string,
        email: string,
        status: string,
    },
    token: string,
    refreshToken: number,
}

export interface LoginResponseInterface extends BaseResponseInterface{
    data: UserLoginResponseInterface
}
