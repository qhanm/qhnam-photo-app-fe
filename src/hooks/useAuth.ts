import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreSelector, setAuth} from "../app/AppStore";
import {Helpers} from "../helpers";
import {Constants} from "../constants";
import {useHistory} from "react-router-dom";
import {setAuthorization} from "../api/base";

const useAuth = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const AppStore = useSelector(AppStoreSelector);

    const checkAuth = useCallback(() => {
        if(!AppStore.isAuthenticated){
            const token = Helpers.getStorage(Constants.store.accessToken);
            const user = Helpers.getStorage(Constants.store.user, true);
            const refreshToken = Helpers.getStorage(Constants.store.refreshToken);

            if(token && user && refreshToken){
                setAuthorization(token);

                dispatch(setAuth({
                    user: user,
                    token: token,
                    refreshToken: refreshToken,
                }))
            }else {
                history.push(Constants.Route.login);
            }
        }

    }, [AppStore.isAuthenticated])

    return useEffect(() => {
        checkAuth();
    }, [AppStore.isAuthenticated])
}

export default useAuth;
