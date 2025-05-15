export type Artwork = {
    id: string,
    title: string,
    description: string,
    url: string,
}

export type User = {
    id: string,
    username: string,
}

export type SortPayload = {
     a: string | Date,
     b: string | Date
}