export const createImageURL = (hostURL: string, collId: string, recordId: string, imgName: string) => {
    return `${hostURL}/api/files/${collId}/${recordId}/${imgName}`
}

export interface Content {
    title: string,
    description: string,
    image: string,
    link: string,
    collectionId: string,
    id: string
}