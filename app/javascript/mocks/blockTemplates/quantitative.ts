import { BlockTemplate, BlockType } from '../../models/types';

export const MOCK_BLOCK_TEMPLATE_1: BlockTemplate = {
    "id": 1,
    "title": "How are you feeling physically today?",
    "type": BlockType["Quantitative"],
    "hint": null,
    "range": {
        "min": 0,
        "max": 10
    }
}

export const MOCK_BLOCK_TEMPLATE_2: BlockTemplate = {
    "id": 2,
    "title": "How are you feeling mentally today?",
    "type": BlockType["Quantitative"],
    "hint": null,
    "range": {
        "min": 0,
        "max": 10
    }
}

export const MOCK_BLOCK_TEMPLATE_3: BlockTemplate = {
    "id": 3,
    "title": "How many hours did you sleep?",
    "type": BlockType["Quantitative"],
    "hint": null,
    "range": {
        "min": 0,
        "max": 10
    }
}