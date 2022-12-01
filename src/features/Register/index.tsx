import React from "react";
import styles from "./index.module.css";
import classNames from 'classnames/bind';
import Grid from "../../components/composite/Grid";
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";
import Heading2 from "../../components/composite/Heading/Heading2";
import { TiArrowBackOutline } from "react-icons/ti";
const cx = classNames.bind(styles);

const Register = () => {
    return (
        <>
            <div className={cx('back')}>
                <TiArrowBackOutline size={24} />
            </div>
            <div className={cx('form')}>
                <Grid>
                    <Heading2>Register</Heading2>
                </Grid>
                <Grid>
                    <Input />
                    <Input type={'password'} />
                </Grid>
                <Grid>
                    <Button content={"Register"} type={'btn-dark'} />
                </Grid>
            </div>
        </>
    )
}

export default Register;
