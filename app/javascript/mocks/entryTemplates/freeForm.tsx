import { EntryTemplate } from "../../models/types";
import { MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2 } from "../blockTemplates/freeForm"

export function mockFreeForm(): EntryTemplate {
    let entry = {
        title: "Free Form",
        id: 1,
        blockTemplates: [MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2],
        emojis: [],
        canUploadPhotos: false
    }
    return entry;
}