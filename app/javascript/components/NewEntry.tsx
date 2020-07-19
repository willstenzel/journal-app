import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "antd";
import Form from "antd/lib/form/Form";
import Button from "antd/lib/button/Button";
import { useLocation } from "react-router-dom";
import { EntryTemplate, BlockTemplate, Entry, Block } from "../models/types";
import { mockQuantitative } from "../mocks/entryTemplates/quantitative";
import { mockFreeForm } from "../mocks/entryTemplates/freeForm";
import { mockQualitative } from "../mocks/entryTemplates/qualitative";
import { Quantitative } from "../components/blocks/Quantitative"
import { Header } from "../components/blocks/Header"
import { ShortResponse } from "../components/blocks/ShortResponse"
import { LongResponse } from "../components/blocks/LongResponse"

const Components = {
  Quantitative: Quantitative,
  Header: Header,
  ShortResponse: ShortResponse,
  LongResponse: LongResponse,
}

interface NewEntryProps {
}

interface NewEntryState {
  response: Entry,
  template: EntryTemplate
}

export type WrapperProps = {
	mainApp: React.ElementType
}

function BlockToComponent(block: BlockTemplate) {
  return React.createElement(Components[block.type], {
    key: block.id,
    ...block
  });
}

const onFinish = (values, template) => {
  const blocks: Block[] = [];
  template.blockTemplates.forEach(blockTemplate => {
    blocks.push({
      template: blockTemplate,
      response: values[blockTemplate.id]
    });
  });

  const entry: Entry = {
    title: template.title,
    templateId: template.id,
    blocks: blocks,
    emojiSelected: [],
    photoLinks: [],
  };
  // TODO: Send to server
  console.log(entry)
};

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const NewEntry: React.FC = (props: NewEntryProps) => {
  const query = useQuery();
  console.log(query.get('type'));

  const [template, setTemplate] = useState(getTemplate(query.get('type')));

  const blockComponents = template.blockTemplates.map(block => BlockToComponent(block));

  return (
    <div>
      <h4><b>{template.title}</b></h4>
      <Divider />
      <Form
          onFinish={(values) => onFinish(values, template)}
        >
      {blockComponents}
      <input type="submit" value="Submit" />
      </Form>
    </div>
  );
}  