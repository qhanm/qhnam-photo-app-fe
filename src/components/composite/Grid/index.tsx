import React from "react";
import styled from "styled-components";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

const BaseGrid : any = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${ (props: any) => props.col }, 1fr);
  grid-gap: var(--spacing);
`;

interface Props {
    col?: number,
    children?: any
}

const Grid : React.FC<Props> = ({ children, col = 1 } : any) => {
    return (
        <div className={cx('container')}>
            <BaseGrid col={col}>
                { children }
            </BaseGrid>
        </div>
    )
}

export default Grid;
