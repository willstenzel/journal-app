import { EntryTemplate } from "../../models/types";

let q1 = require("../blockTemplates/quantitative_1");
let q2 = require("../blockTemplates/quantitative_2");
let q3 = require("../blockTemplates/quantitative_3");

export function quickDaily(): EntryTemplate {
    let entry = {
        title: "quick daily",
        id: 1,
        blocks: [q1, q2, q3],
        emojis: [],
        canUploadPhotos: false
    }
    
    return entry;
}