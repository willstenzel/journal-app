import { EntryTemplate } from "../../models/types";
import { MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3 } from "../blockTemplates/quantitative"

export function mockQuantitative(): EntryTemplate {
    let entry = {
        title: "Quantiative",
        id: 3,
        blockTemplates: [MOCK_BLOCK_TEMPLATE_1, MOCK_BLOCK_TEMPLATE_2, MOCK_BLOCK_TEMPLATE_3],
        emojis: [],
        canUploadPhotos: false
    }
    return entry;
}
