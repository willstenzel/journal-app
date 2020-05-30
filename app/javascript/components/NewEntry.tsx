import React, { useState } from "react";
import { EntryTemplate, BlockTemplate } from "../models/types";
import { mockQuickDaily } from "../mocks/entryTemplates/quantitative";
import { Quantitative } from "../components/blocks/Quantitative"

function getTemplate(): EntryTemplate {
    console.log(mockQuickDaily());
    return mockQuickDaily();
}

const Components = {
    Quantitative: Quantitative
}

function BlockToComponent(block: BlockTemplate) {
    // component does exist
    if (typeof Components[block.type] !== "undefined") {
      return React.createElement(Components[block.type], {
        ...block
      });
    }
    // component doesn't exist yet
    return React.createElement(
      () => <div>The component {block.type} has not been created yet.</div>,
      { key: block.id }
    );
  }

export const NewEntry: React.FC = (props: any) => {
    // TODO: set query paramater and fetch right template

    const [template, setTemplate] = useState(getTemplate());
    const [responseArray, setResponseArray] = useState([]);

    const blocks: BlockTemplate[] = template.blocks;
   
    return (
        <div>
            <h4>{template.title}</h4>
            {blocks.map(block => BlockToComponent(block))}
        </div>
    );
};