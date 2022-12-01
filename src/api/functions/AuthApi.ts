import {APIClient} from "../base";

export const AuthApi = {
    signIn: async (model: { email: string, password: string }) => await APIClient.post('/login', model)
}
