import { BlockTemplate, BlockType } from '../../models/types';

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
