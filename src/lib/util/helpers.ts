export const serializeNonPOJOs = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
}

export const createImageURL = (hostURL: string, collId: string, recordId: string, imgName: string) => {
    return `${hostURL}/api/files/${collId}/${recordId}/${imgName}`
}