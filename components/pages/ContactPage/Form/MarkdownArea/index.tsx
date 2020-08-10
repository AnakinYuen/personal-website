/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import ReactMde from 'react-mde';
import { Converter } from 'showdown';
import style from './style.module.scss';

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

interface Props {
  messageRef: React.MutableRefObject<string>;
}

interface State {
  value: string;
  __html: string;
}

class MarkdownArea extends React.Component<Props, State> {
  public state = {
    value: '',
    __html: '',
  };

  public render() {
    return (
      <div>
        <ReactMde
          childProps={{
            textArea: {
              id: 'mde',
            },
          }}
          toolbarCommands={[
            ['header', 'bold', 'italic', 'strikethrough'],
            ['link', 'quote', 'code'],
            ['unordered-list', 'ordered-list', 'checked-list'],
          ]}
          disablePreview
          value={this.state.value}
          onChange={this.onChange}
          selectedTab="write"
          onTabChange={() => void 0}
          generateMarkdownPreview={(_) => null}
        />
        <h3 className={style.notice}>* Your message will NOT be posted here</h3>
        <div
          className={style.preview}
          dangerouslySetInnerHTML={{
            __html: this.state.__html,
          }}
        />
      </div>
    );
  }

  public clear() {
    this.onChange('');
  }

  private onChange = (value: string) => {
    this.props.messageRef.current = value;
    this.setState({
      value,
      __html: converter.makeHtml(value),
    });
  };
}

export default MarkdownArea;
