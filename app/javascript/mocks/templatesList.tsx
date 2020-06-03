import { TemplateInfo } from "../models/types";

export function getTemplateList(): TemplateInfo[] {
    return [
        {
            id: 1,
            name: "Free Form",
            key: "freeform"
        },
        {
            id: 2,
            name: "Qualitative",
            key: "qualitative"
        },
        {
            id: 3,
            name: "Quantitative",
            key: "quantitative"
        }

    ]
};
