import React, { Component } from 'react';
import axios from 'axios';

import config from '../config';
import LangOption from './LangOption';


class Languages extends Component {
    state = {
        languages: []
    }

    componentDidMount() {
        const googleKey = config.GOOGLE_TRANSLATE_API_KEY;
        axios.get('https://translation.googleapis.com/language/translate/v2/languages?key=' + googleKey)
            .then(res => this.setState({ languages: res.data.data.languages }))
    }

    render() {
        return (
            <select name="languages">
                { this.state.languages.map((language, i) => <LangOption language={language} key={i} />)}
            </select>
        )
    }
}



export default Languages
