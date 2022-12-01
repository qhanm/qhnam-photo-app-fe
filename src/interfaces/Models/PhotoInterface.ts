import {ImageInterface} from "./ImageInterface";

export interface PhotoInterface {
    id: number,
    uuid: string,
    name: string,
    status: number,
    image: ImageInterface,
    created_at: string,
    updated_at: string,
}
