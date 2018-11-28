import React ,{ Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter'

class DataTable extends Component{
  state={
    TableData:[]
  }

  componentWillMount(){
    return fetch('/data.json')
    .then((response)=>
      {
      return response.json()
      }
  ).then((d)=>{
        this.setState({TableData:d.data})
    })
    
  }

  render(){  
    const columns = [{
        Header:"Id",
        accessor:"id",
        filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["id"] }),
                  filterAll: true
    },{
      Header: 'Name',
      accessor: 'name',
      filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
    },{
      Header: 'Age',
      accessor: 'ageLimitTest',
      filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ageLimitTest"] }),
                  filterAll: true
    }]
    return(
      <div className="container">
      <br/>
        <Link to='/home'><button className="btn btn-success">Back</button></Link>
        <Link to='/login'><button className="btn btn-danger">SignOut</button></Link>

        <Link to="/for"><button>ForLoopExample</button></Link>
      <h1>React Table</h1>
      
              <ReactTable
                data={this.state.TableData}
                filterable
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[4, 6]}
              />
          </div>  


    )
  }
}

export default DataTable;