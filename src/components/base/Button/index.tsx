import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const cx = classNames.bind(styles);

interface Props {
    content?: string|any,
    type?: 'btn-dark' | 'btn-dark-outline' | string,
    onClick?: Function,
    loading?: boolean,
}

const Button: React.FC<Props> = ({
    type = 'btn-dark',
    content,
    onClick,
    loading = false
}) => {

    return (
        <button
            type='button'
            disabled={loading}
            className={cx('btn', type, loading && 'disabled')}
            onClick={() => {
                onClick && onClick();
            }}
        >
            {
                loading && <AiOutlineLoading3Quarters className={cx('icon-loading')} />
            }
            { content }
        </button>
    )
}

export default React.memo(Button);
