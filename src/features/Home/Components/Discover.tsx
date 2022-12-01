import React, {useEffect, useState} from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import Avatar from "../../../components/composite/Avatar";
import SlideDisplay from "./SlideDisplay";
import {PhotoInterface} from "../../../interfaces/Models/PhotoInterface";
import {loadDiscover} from "../api";

const cx = classNames.bind(styles);

interface Props {
}

const Discover: React.FC<Props> = ({ }) => {
    const [indexDiscover, setIndexDiscover] = useState(-1);
    const [discovers, setDiscovers] = useState <Array<PhotoInterface>>([]);

    useEffect(() => {
        fetchData().then();
    }, [])

    const fetchData = async () => {
        const res: any = await loadDiscover();
        if(res?.length){
            setIndexDiscover(0);
        }
        setDiscovers(res);
    }

    const onNext = () => {
        if(discovers?.length - 1 > indexDiscover){
            setIndexDiscover(indexDiscover + 1);
        }else{
            setIndexDiscover(0);
        }
    }

    const onPre = () => {
        if(indexDiscover === 0){
            setIndexDiscover(discovers.length - 1);
        }else{
            setIndexDiscover(indexDiscover - 1);
        }
    }

    return (
        <div>
            <div className={cx('item', 'transition')}>
                <SlideDisplay position={'left'} onClick={onNext}/>
                <img
                    className={cx('item-image')}
                    src={discovers[indexDiscover]?.image?.path}
                    alt="item"
                />
                <SlideDisplay position={'right'} onClick={onPre} />
            </div>
            <div className={cx('item-avatar')}>
                <Avatar />
                <div>
                    <div>Ridhwan Nordin</div>
                    <div className={cx('hashtag')}>@ridzjcob</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Discover);
