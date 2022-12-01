import React, {useState} from "react";
import styles from "./index.module.css";
import classNames from 'classnames/bind';
import Button from "../../components/base/Button";
import Grid from "../../components/composite/Grid";
import Input from "../../components/base/Input";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import {AuthApi} from "../../api/functions/AuthApi";
import {Helpers} from "../../helpers";
import {Constants} from "../../constants";
import {UserLoginResponseInterface} from "../../interfaces/ResponseModel/LoginResponseInterface";
import {useDispatch} from "react-redux";
import {setAuth} from "../../app/AppStore";
import {useHistory} from "react-router-dom";
import {setAuthorization} from "../../api/base";

const cx = classNames.bind(styles);

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const formik: FormikProps<any> = useFormik({
        initialValues: {
            email: "namqh4@gmail.com",
            password: "123456",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required(),
        }),

        onSubmit: async (values: any) => {
            await setLoading(true);

            try {
                const res : any = await AuthApi.signIn(values);
                if(res.status === 200){
                    const data: UserLoginResponseInterface = res?.data?.data;
                    Helpers.setStorage(Constants.store.user, JSON.stringify(data?.user))
                    Helpers.setStorage(Constants.store.accessToken, data?.token);
                    Helpers.setStorage(Constants.store.refreshToken, data?.refreshToken);

                    setAuthorization(data?.token);
                    await dispatch(setAuth({
                        user: data.user,
                        token: data.token,
                        refreshToken: data.refreshToken,
                    }))

                    history.push(Constants.Route.home);
                }
            }catch (err: any){
                formik.setErrors(err?.data?.error);
            }

            Helpers.delayLoading(setLoading);
        }
    })

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Grid>
                    <Input
                        name={'email'}
                        placeholder={'Enter email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && formik.errors?.email}
                    />
                    <Input
                        name={'password'}
                        type={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && formik.errors?.password}
                        placeholder={'Enter password'}
                    />
                </Grid>
                <div className={cx('social')}>
                    <FaGoogle size={32} />
                    <FaFacebookSquare size={32} />
                </div>
                <Grid col={2}>
                    <Button
                        content={"Login"}
                        onClick={formik.handleSubmit}
                        loading={loading}
                    />
                    <Button
                        loading={loading}
                        content={"Register"}
                        type={'btn-dark-outline'}
                    />
                </Grid>

            </div>
        </div>
    )
}

export default Login;
