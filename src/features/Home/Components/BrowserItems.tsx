import React, {useEffect, useState} from "react";
import BrowserItem from "./BrowserItem";
import classNames from "classnames/bind";
import styles from "../index.module.css";
import {PhotoInterface} from "../../../interfaces/Models/PhotoInterface";
import {loadPhoto} from "../api";
import Button from "../../../components/base/Button";
import {data} from "autoprefixer";
const cx = classNames.bind(styles);

const arrItems: Array<any> = [
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
]

const BrowserItems = ({  }) => {

    const [photos, setPhotos] = useState <Array<PhotoInterface>>([])
    const [pageIndex, setPageIndex] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        fetchData(pageIndex).then();
    }, [])

    const fetchData = async (page: number) => {
        const res = await loadPhoto({page: page});
        if(Array.isArray(res?.data)){
            await setTotalPage(res?.last_page || 0);
            await setPhotos(photos.concat(res.data))
        }
    }

    const onSeeMore = async () => {
        await setPageIndex(pageIndex + 1);
        await fetchData(pageIndex);
    }

    return (
        <>
            <div className={cx('browser-items')}>
                {
                    photos?.map((item: PhotoInterface, index: number) => {

                        let rule: string = 'event';
                        if(( index + 1 ) % 5 === 0 || ( index + 1 ) % 5 === 1){
                            rule = 'odd';
                        }

                        return (
                            <BrowserItem key={index} item={item} rule={rule} />
                        )
                    })
                }
            </div>
            {
                totalPage  > pageIndex && (
                    <div className={cx('spacing')}>
                        <Button
                            type={'btn-dark-outline'}
                            content={'See more'}
                            onClick={onSeeMore}
                        />
                    </div>
                )
            }
        </>
    )
}

export default BrowserItems;
