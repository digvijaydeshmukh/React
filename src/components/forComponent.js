import React, { Component } from 'react';

class forComponent extends Component {
    state = {
        toggle:true,
        data: [
            {
                "id": 1,
                "fname": "abc",
                "lname": "test"
            },
            {
                "id": 2,
                "fname": "abc2",
                "lname": "test2"
            },
            {
                "id": 3,
                "fname": "abc3",
                "lname": "test3"
            },
            {
                "id": 4,
                "fname": "abc4",
                "lname": "test4"
            },
            {
                "id": 5,
                "fname": "abc5",
                "lname": "test5"
            },
            {
                "id": 6,
                "fname": "abc6",
                "lname": "test6"
            },
            {
                "id": 7,
                "fname": "abc7",
                "lname": "test7"
            },

        ]
    }
    constructor(props){
        super(props);
        //this.test=this.test.bind(this)
    }
    //type1 start
    // render() {

    //     return (
    //         <div className="container">
    //             <table>
    //                 
    //                 <tbody>
    //    <tr>
    //    <th>All about Forloop</th>
    //    </tr> 
    //                     <tr>
    //                         <td>FirstName</td>
    //                         <td>LastName</td>
    //                     </tr>
    //                     {this.state.data.map((d) =>
    //                         <tr>
    //                             <td>{d.fname}</td>
    //                             <td>{d.lname}</td>
    //                         </tr>
    //                     )}

    //                 </tbody>
    //             </table>

    //         </div>
    //     )
    // }
    //type1 ends
    togglebutton=()=>{
        this.state.toggle=!this.state.toggle
        this.setState({toggle:this.state.toggle})
    }

    render() {
      
       let test=()=>{
            if(this.state.toggle){
                return (
                    <div>
                        <h1 className="text text-danger">hiii from If</h1>
                    </div>
                )
            }else{
                return(<div>
                    <h1 className="text text-success">hii from else block</h1>
                </div>)
            }
        } 
        let tabledata = this.state.data.map((d) => <tr key={d.id}><td>{d.fname}</td><td>{d.lname}</td></tr>)
        return (
            <div className="container">
                <table>

                    <tbody>
                        <tr>
                            <th>All about Forloop</th>
                        </tr>

                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                        </tr>
                        {tabledata}

                    </tbody>
                </table>

                <div>
                    {test()}
                </div>
                <button onClick={this.togglebutton}>toggleTitle</button>
            </div>
        )
    }
}


export default forComponent;