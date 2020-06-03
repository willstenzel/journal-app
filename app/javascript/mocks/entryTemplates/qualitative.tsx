import { EntryTemplate } from "../../models/types";
import { MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3 } from "../blockTemplates/qualitative"

export function mockQualitative(): EntryTemplate {
    let entry = {
        title: "Qualitative",
        id: 2,
        blocks: [MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3],
        emojis: [],
        canUploadPhotos: false
    }
    return entry;
}