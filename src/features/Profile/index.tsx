import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Grid from "../../components/composite/Grid";
import Avatar from "../../components/composite/Avatar";
import Heading2 from "../../components/composite/Heading/Heading2";
import Heading5 from "../../components/composite/Heading/Heading5";
import Button from "../../components/base/Button";
import BrowserItems from "../Home/Components/BrowserItems";

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <div className={cx('wrapper')}>
            <Grid>
                <div className={cx('profile')}>
                    <Avatar size={'l'}/>
                    <Heading2>Quách Hoài Nam</Heading2>
                    <Heading5>San francisco, ca</Heading5>

                    <Button type={"btn-dark"} content={"Follow me"} />
                    <Button type={"btn-dark-outline"} content={"Message"} />
                </div>
            </Grid>
            <Grid>
                <BrowserItems />
                <Button type={"btn-dark-outline"} content={"See more"} />
            </Grid>
        </div>
    )
}

export default Profile;
