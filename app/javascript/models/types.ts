export enum EntryType {
    Daily = "Daily",
    FreeForm = "Free Form",
}

export enum BlockType {
    Header,
    LongResponse,
    ShortResponse,
    Quantative
}

export interface Title {
    id: number,
    text: string
}

export interface NumberRange {
    min: number,
    max: number
}

export interface BlockTemplate {
    id: number,
    title: Title,
    type: BlockType,
    hint: string | null | undefined,
    range: NumberRange | null | undefined
}

export interface Block {
    template: BlockTemplate,
    response: string | number
}

export interface EntryTemplate {
    type: EntryType,
    id: number,
    blocks: [BlockTemplate],
    enojis: [string],
    canUploadPhotos: boolean
}

export interface Entry {
    template: EntryTemplate,
    blocks: [Block],
    emojiSelected: [string],
    photoLinks: [string]
}