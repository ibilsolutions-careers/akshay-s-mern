import React,{ useState } from 'react';
import axios from 'axios';
function TaskForm() {
    const [title,setTitle]=useState();
    const [description,setDescription]=useState()
    const [dueDate,setDate]=useState()
    function Addtaskverify ()
    {
        axios.post(`http://localhost:5000/api/tasks`,
            {
                title,
                description,
                dueDate
            })
              .then((response) =>{
               
               console.log(response.data)
              }).catch ((error)=>
                {
                  console.error("There was an error fetching the movie!", error);
                })
          
    }
  return (
    <div>
         <div className="container-fluid " >
         <div classNameName='pt-5'>
         <div className="card w-25 mx-auto mt-5 pt-5">
        <div className="card-body">
           <h4 className="card-title text-center">Add Task</h4>
          <div className="card-text">
            <form  method="post" onSubmit={Addtaskverify}>
                <dl className="row">
                    <dt className="col-sm-3"><label>title</label></dt>
                    <dd className="col-sm-9" >
                        <input type="text" name="title"className="form-control pl-2 border-0 w-100" value={title}
                                    onInput={(event) => setTitle(event.target.value)}
                                    required></input></dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-sm-3"><label>description</label></dt>
                    <dd className="col-sm-9" >
                        <textarea value={description} onInput={(event) => setDescription(event.target.value)} className='form-control'></textarea></dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-sm-3"><label>date</label></dt>
                    <dd className="col-sm-9" >
                        <input type="date" name="title" className="form-control pl-2 border-0 w-100" value={dueDate}
                                    onInput={(event) => setDate(event.target.value)}
                                    required></input></dd>
                  </dl>
                   <div style={{textAlign: 'center'}}><input type="submit" value="Submit"></input></div>
            </form>
    </div>
    </div>
</div> 
</div>
</div>
    </div>
  )
}

export default TaskForm