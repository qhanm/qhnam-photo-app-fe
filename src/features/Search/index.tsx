import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Heading2 from "../../components/composite/Heading/Heading2";
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";
import Grid from "../../components/composite/Grid";
import Heading5 from "../../components/composite/Heading/Heading5";

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className={cx('wrapper')}>
            <Grid>
                <Heading2>Search</Heading2>
            </Grid>
            <Grid>
                <Input placeholder={"Search all photo"} />
            </Grid>

            <div className={cx('spacing-x2')}>
                <Heading5>All results</Heading5>
            </div>

            <Grid col={3}>
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
                <img src={require("../../assets/images/search01.png")} />
            </Grid>

            <Grid>
                <Button type={'btn-dark-outline'} content={'See more'}/>
            </Grid>
        </div>
    )
}

export default Search;
