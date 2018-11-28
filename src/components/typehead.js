import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015


class TypeHeadComponent extends Component {
    state = {
        options: ['John', 'Miles', 'Charles', 'Herbie']
    };



    selectedOption = (e) => {
        console.log(e)
    }

    render() {

        return (
            <div>

                <strong>Search:</strong><Typeahead onChange={this.selectedOption} options={this.state.options} />
            </div>
        )
    }
}

export default TypeHeadComponent;