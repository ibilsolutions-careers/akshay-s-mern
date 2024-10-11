import React,{useEffect,useState} from 'react'
import axios from 'axios';
function TaskList() {
    const [data,setdata]=useState()
    useEffect(() => {
     
                axios.get(`http://localhost:5000/api/tasks`)
                 .then((response) =>{
                    setdata(response.data.data)
                    console.log(response.data)
                  }).catch ((error)=>
                  {
                    console.error("There was an error fetching the movie!", error);
                  }
                ) 
              }
              
                        
       
       ,[])
  return (
    <>
     <div className="container-fluid">
            <div className="pt-5">
                <table className="table table-bordered table-secondary w-50 mx-auto">
                    <thead className="text-center">
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>Date</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    {(data)?data.map((content)=>
                    {
                    return(
                            <tr >
                                <td>{content.title}</td>
                                <td>{content.description}</td>
                                <td>{content.dueDate}</td>
                                <td>
                                    <button className="btn btn-warning">
                                       update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" data-toggle="modal" data-target="#modal">Delete</button>
                                </td>
                            </tr>
                        )}
                    ):null}
                    </tbody>
                   
                  
                </table>
                </div>
                </div>
    </>
  )
}

export default TaskList;