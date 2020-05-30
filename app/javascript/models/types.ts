export enum BlockType {
    Header = "Header",
    LongResponse = "LongResponse",
    ShortResponse = "ShortResponse",
    Quantitative = "Quantitative"
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
    title: string,
    type: BlockType,
    hint: string | null | undefined,
    range: NumberRange | null | undefined
}

export interface Block {
    template: BlockTemplate,
    response: string | number
}

export interface EntryTemplate {
    id: number,
    title: string,
    blocks: BlockTemplate[],
    emojis: string[],
    canUploadPhotos: boolean
}

export interface Entry {
    template: EntryTemplate,
    blocks: Block[],
    emojiSelected: string[],
    photoLinks: string[]
}