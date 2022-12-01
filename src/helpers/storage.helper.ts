export const setStorage = (key: string, value: any) : void => {
    sessionStorage.setItem(key, value);
}

export const getStorage = (key: string, isStringify: boolean = false) => {
    let data: any = sessionStorage.getItem(key);
    if(isStringify) {
        try {
            data = JSON.parse(data);
        }catch (err) {
            console.error("Can not stringify data");
        }
    }

    return data;
}


