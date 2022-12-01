import {UserLoginResponseInterface} from "../ResponseModel/LoginResponseInterface";

export interface AppStoreInterface {
    auth: UserLoginResponseInterface|any
    isAuthenticated: boolean,
}
