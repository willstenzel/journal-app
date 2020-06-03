import React, { useState } from "react";
import { Divider } from "antd";
import { useLocation } from "react-router-dom";
import { EntryTemplate, BlockTemplate } from "../models/types";
import { mockQuantitative } from "../mocks/entryTemplates/quantitative";
import { mockFreeForm } from "../mocks/entryTemplates/freeForm";
import { mockQualitative } from "../mocks/entryTemplates/qualitative";
import { Quantitative } from "../components/blocks/Quantitative"
import { Header } from "../components/blocks/Header"
import { ShortResponse } from "../components/blocks/ShortResponse"
import { LongResponse } from "../components/blocks/LongResponse"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getTemplate(type): EntryTemplate {
  switch (type) {
    case 'freeform':
      return mockFreeForm();
    case 'qualitative':
      return mockQualitative();
    case 'quantitative':
      return mockQuantitative();
    default:
      return mockFreeForm();
  }
}

const Components = {
  Quantitative: Quantitative,
  Header: Header,
  ShortResponse: ShortResponse,
  LongResponse: LongResponse,
}

function BlockToComponent(block: BlockTemplate) {
  // component does exist
  if (typeof Components[block.type] !== "undefined") {
    return React.createElement(Components[block.type], {
      key: block.id,
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
  const query = useQuery();
  console.log(query.get('type'));

  const [template, setTemplate] = useState(getTemplate(query.get('type')));
  const [responseArray, setResponseArray] = useState([]);

  const blocks: BlockTemplate[] = template.blocks;

  return (
    <div>
      <h4><b>{template.title}</b></h4>
      <Divider />
      {blocks.map(block => BlockToComponent(block))}
    </div>
  );
};