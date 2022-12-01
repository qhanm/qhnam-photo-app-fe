import axios from "axios";
import {Constants} from "../constants";
import {History} from "../History";
// import {ROUTE} from "../../routes";

// default
axios.defaults.baseURL = Constants.API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

// intercepting to capture errors
axios.interceptors.response.use(
    function (response: any) {
        return response;
    },
    function (error: any) {
        let message;

        switch (error?.response?.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                if(window.location.pathname === Constants.Route.login){
                    return Promise.reject(error?.response)
                }

                localStorage.clear();
                return History.push(Constants.Route.login)
            case 403:
                return History.push(Constants.Route.login)
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }

        if(error?.response?.status === 403){
            return error.request;
        }

        if(error?.response?.status === 400){
            return Promise.reject(error?.response);
        }

        else
            return Promise.reject(message);
    }
);

const setAuthorization = (token: string) => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

const APIClient = {
    get: (url: string, params: object|any = {}, isAuth = true) => {
        let response;

        let paramKeys: Array<any> = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    },

    post: (url: string, data : any, isAuth = true) => {
        return axios.post(url, data);
    },
    /**
     * Updates data
     */
    put: (url: string, data: any, isAuth = true) => {
        return axios.put(url, data);
    },

    delete: (url: string, config : any, isAut = true) => {
        return axios.delete(url, { ...config });
    },
}

export { APIClient, setAuthorization };
