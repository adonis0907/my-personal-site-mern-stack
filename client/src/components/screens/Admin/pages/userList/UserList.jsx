import './userlist.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
import {userRows} from "../../dummyData"
import {Link} from "react-router-dom"
import {useState} from 'react'


export default function UserList(){
  const [data,setData]=useState(userRows)

  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!==id))
  }

  
  const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    },
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',

    width: 120,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,

  },
  {
    field:"action",
    headerName:"Action",
    width:150,
    renderCell:(params)=>{
      return(
        <>
        <Link to={"/user/"+params.row.id}>
        <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
        </>
      )
    }



  }
];


  return(
    <div className="userList">
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={8}
      checkboxSelection
      disableSelectionOnClick
    />
    </div>
  )
}
