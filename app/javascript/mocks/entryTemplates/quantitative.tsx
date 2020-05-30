import { EntryTemplate } from "../../models/types";
import { MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3 } from "../blockTemplates/quantitative"

export function quickDaily(): EntryTemplate {
    let entry = {
        title: "quick daily",
        id: 1,
        blocks: [MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3],
        emojis: [],
        canUploadPhotos: false
    }

    return entry;
}