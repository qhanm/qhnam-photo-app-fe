import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-group')}>
                <input
                    className={cx('input')}
                />
                <div className={cx('input-icon-search')}>
                    <AiOutlineLoading3Quarters size={20} />
                    <MdOutlineCancel size={20}/>
                </div>
            </div>
            <div className={cx('search-icon')}>
                <BsSearch size={28} />
            </div>
        </div>
    )
}

export default Search;
