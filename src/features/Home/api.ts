import {PhotoApi} from "../../api/functions/PhotoApi";

export const loadDiscover = async () => {
    try {
        const res = await PhotoApi.discover();
        return res?.data?.data || [];
    }catch (err){}

    return [];
}
