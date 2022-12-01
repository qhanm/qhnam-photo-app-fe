export const delayLoading = (callbackFunction: Function) => {
    setTimeout(async () => {
        await callbackFunction(false);
    }, 400)
}

export const setErrorFormik = (formik: any, error: object|any) => {
    for(let p in error){
        formik.setErrors(p, error[p]);
    }
}
