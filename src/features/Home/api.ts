import {PhotoApi} from "../../api/functions/PhotoApi";

export const loadDiscover = async () => {
    try {
        const res = await PhotoApi.discover();
        return res?.data || [];
    }catch (err){}

    return [];
}

export const loadPhoto = async (filter: any) => {
    try {
        const res = await PhotoApi.photo(filter);
        return  res?.data;
    }catch (err){}

    return null;
}
