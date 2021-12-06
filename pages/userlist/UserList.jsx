import './userlist.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'userName',
          headerName: 'UserName',
          width: 190,
          renderCell: (params) => {
              return (
                  <div className="userListUser">
                      <img 
                      src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="due to" 
                      className="userListImg"/>
                      {params.row.userName}
                  </div>
              )
          }
        },
        
        {
          field: 'email',
          headerName: 'Email',
          width: 190,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160
        },  
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/user/"+params.row.id}>
                    <button className="editButton">
                        Edit
                    </button>
                    </Link>
                    <DeleteOutline className="deleteButton" onClick={() => handleDelete(params.row.id)}/>
                    </> 
                )
            }
        }
      ];
      
     
    return (
        <div className="userlist">
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>
        </div>
    )
}

export default UserList


