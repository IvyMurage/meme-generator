export type MemeType = {
    topText: string
    bottomText: string
    randomImage: string
}

export type MemeImageType = {
    "id": string,
    "name": string,
    "url": string,
    "width": number,
    "height": number,
    "box_count": number
}

export type AllMemeImagesType = {
    "success": boolean,
    "data": {
        "memes": MemeImageType[]
    }
}