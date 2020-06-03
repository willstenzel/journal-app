import { BlockTemplate, BlockType } from '../../models/types';

export const MOCK_BLOCK_TEMPLATE_1: BlockTemplate = {
    "id": 6,
    "title": "What emotions are you feeling?",
    "type": BlockType.ShortResponse,
    "hint": null,
    "range": null,
}

export const MOCK_BLOCK_TEMPLATE_2: BlockTemplate = {
    "id": 7,
    "title": "Describe the fearful thought?",
    "type": BlockType.LongResponse,
    "hint": null,
    "range": null,
}

export const MOCK_BLOCK_TEMPLATE_3: BlockTemplate = {
    "id": 8,
    "title": "What's happening at the moment?",
    "type": BlockType.LongResponse,
    "hint": null,
    "range": null,
}
