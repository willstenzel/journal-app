import { BlockTemplate, BlockType } from '../../models/types';

// Q: Do we still need this header block template if every entry is going going to have a title?
export const MOCK_BLOCK_TEMPLATE_1: BlockTemplate = {
    "id": 4,
    "title": "Title",
    "type": BlockType.Header,
    "hint": null,
    "range": null,
}

export const MOCK_BLOCK_TEMPLATE_2: BlockTemplate = {
    "id": 5,
    "title": "Body",
    "type": BlockType.LongResponse,
    "hint": null,
    "range": null,
}
