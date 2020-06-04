import React, { Component } from 'react';
import marked from 'marked';

class Markdown extends Component {
    constructor(props){
        super(props);
        this.state = { 
            input: '# Hello world\n\n## Header 2\n\n[My Portfolio](https://netk.dev)\n\n`This is an inline code`\n\n\t<html>\n\t\t<body>\n\t\tCode Block\n\t\t</body>\n\t</html>\n\n* One\n* Two\n* Three\n\n> Dorothy followed her through many of the beautiful rooms in her castle. This is a blockquote.\n\n![Alt text](https://image.flaticon.com/icons/svg/2964/2964677.svg "This is an image")\n\n**bolded text**',
         }
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }
    parseMarkedText() {
        let markedUp = marked(this.state.input, {sanitize: true,  breaks: true});
        return {__html: markedUp};
    }

    render() { 
        return ( 
            <div id="markdown">
            <textarea id="editor" value={this.state.input} onChange={this.handleChange}>
            </textarea>
            <div id="preview" dangerouslySetInnerHTML={this.parseMarkedText()}></div>
            </div>
         );
    }
}
 
export default Markdown;