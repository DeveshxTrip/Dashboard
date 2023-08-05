import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AllUsers = () => {
    const[empdata,empdatachange]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:8001/javan").then((res)=>{
            return res.json();
        }).then((resp)=>{
            empdatachange(resp);

        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h4 align="center">JAVAAN DATA</h4>
            </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                       <tr>
                        <td>ID </td>
                        <td>Rank </td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action </td>
                            </tr> 
                    </thead>
                    <tbody>
                        {empdata &&
                            empdata.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.rank}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td><a className="btn btn-success">Edit</a>
                                    <a className="btn btn-danger">Delete</a>
                                  <a className="btn btn-primary">Details</a></td>
                                
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
      
    </div>
  )
}

export default AllUsers;
