import React, { Component } from 'react';

class LangOption extends Component {
    render() {
        const lang = this.props.language.language;
        return (
            <option value="english" defaultValue>{lang}</option>
        )
    }
}



export default LangOption
