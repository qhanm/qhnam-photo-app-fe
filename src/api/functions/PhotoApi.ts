import {APIClient} from "../base";

export const PhotoApi = {
    discover: async () => await APIClient.get('/photo/discover'),
    photo: async (filter: any) => await APIClient.get('/photo', filter),
}
