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

export interface WorkExperience {
    company: string,
    location: string,
    role: string,
    startDate: Date,
    isCurrentlyWorking: boolean,
    endDate: Date,
    description: string
}

export interface Language {
    name: string,
    isProficient: boolean
}

export interface Skill {
    name: string
}