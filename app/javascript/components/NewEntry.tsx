import React, { useState } from "react";
import { Divider } from "antd";
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

export class NewEntry extends React.Component {
  state: { response: Entry; template: EntryTemplate; };

  constructor(props) {
    super(props);
    const templateType = new URLSearchParams(window.location.search).get("type");
    const template = this.getTemplate(templateType);

    const entry: Entry = {
      title: template.title,
      templateId: template.id,
      blocks: [],
      emojiSelected: [],
      photoLinks: []
    }

    this.state = {
      response: entry,
      template: template
    }
  }

  useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  getTemplate(type): EntryTemplate {
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
  
  blockToComponent(block: BlockTemplate) {
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

  handleOnChange() {
    
  }

  render() {
    const blockComponents = this.state.template.blocks.map(block => this.blockToComponent(block));

    return (
      <div>
        <h4><b>{this.state.template.title}</b></h4>
        <Divider />
        {blockComponents}
      </div>
    );
  }
}


