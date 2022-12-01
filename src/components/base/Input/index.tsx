import React, {useCallback} from "react";
import styles from "./index.module.css"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
    placeholder?: string,
    type?: string,
    value?: string | number | any,
    name?: string,
    error?: string|any,
    label?: string,
    onChange?: Function,
}

const Input: React.FC<Props> = ({
    placeholder,
    type = 'text',
    name,
    error,
    onChange,
    value,
    label,
}) => {

    return (
        <div className={cx('form-group')}>
            <input
                className={cx('input')}
                placeholder={placeholder}
                type={type}
                onChange={(event: any) => {
                    onChange && onChange(event);
                }}
                name={name}
                value={value}
                id={name}
            />
            {
                error && (
                    <span className={'text-danger'}>{ error }</span>
                )
            }
        </div>
    )
}

export default React.memo(Input);
