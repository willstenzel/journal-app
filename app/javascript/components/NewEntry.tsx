import React, { useState } from "react";
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

export class NewEntry extends React.Component<NewEntryProps, NewEntryState> {

  state: { response: Entry; template: EntryTemplate; };
  setState: any;
  
  constructor(props: NewEntryProps) {
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

    entry.blocks = template.blockTemplates.map( blockTemplate => {
      return {
        template: blockTemplate,
        response: ""
      }
    });

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
        handleOnChange: this.handleOnChange.bind(this),
        ...block
      });
    }
    // component doesn't exist yet
    return React.createElement(
      () => <div>The component {block.type} has not been created yet.</div>,
      { key: block.id }
    );
  }

  handleOnChange = (blockId: number, input: string | number) => {
    console.log("Handle On Change " + blockId + " " + input)
    const responseCopy = {... this.state.response };

    const block = responseCopy.blocks.find(block => block.template.id == blockId);
    if (block != null) {
      block.response = input;
      this.setState({
        response: responseCopy
      });
    }   
  }

  onFinish = values => {
    const template: EntryTemplate = this.state.template;

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

  render() {
    const blockComponents = this.state.template.blockTemplates.map(block => this.blockToComponent(block));
    console.log(this.state.response);

    return (
      <div>
        <h4><b>{this.state.template.title}</b></h4>
        <Divider />
        <Form
            onFinish={this.onFinish}
          >
        {blockComponents}
        <input type="submit" value="Submit" />
        </Form>
      </div>
    );
  }
}


