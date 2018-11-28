import React, { Component } from 'react';
import { Textbox } from 'react-inputs-validation';

class AppendComponent extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            values:[]
        };
       // this.showValues = this.showValues.bind(this);
    }

    createBox() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleinput.bind(this, i)} />
                <input type='button' value='remove' onClick={this.removeBox.bind(this, i)} />
            </div>
        )
    }

    addNewBox = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ values: [...prevState.values, ''] }))

    }

    handleinput=(i, event) =>{
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });

    }
    removeBox=(i)=> {
        let values = [...this.state.values];
        console.log(values)
        values.splice(i, 1);
        this.setState({ values });
    }
    showValues=(e) =>{
        e.preventDefault();
        console.log(this.state.values);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.showValues}>
                    {this.createBox()}
                    <div className="form-group">
                        <div>
                            <button onClick={this.addNewBox}>Add</button>
                        </div>

                    </div>
                    <div className="form-group">
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </div>
                </form>


            </div>
        )
    }

}

export default AppendComponent;