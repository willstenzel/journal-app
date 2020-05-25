import { EntryTemplate } from "../../models/types";

export function quickDaily(): EntryTemplate {
    let entry = {
        title: "quick daily",
        id: 1,
        blocks: [],
        emojis: [],
        canUploadPhotos: false
    }

    return entry;
}