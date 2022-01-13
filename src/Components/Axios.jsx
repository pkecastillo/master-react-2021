import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Axios = () => {
   
    const[users,setUsers]=useState([])
    
    useEffect(()=>{
         const cargarUsuarios=async()=>{
         const res=await axios('https://jsonplaceholder.typicode.com/users')
         console.log(res.data)
         if (res.status===200) {
             console.log('Status 200 OK')
         }else{
            console.log(`Status actual: ${res.status}`)
         }
         setUsers(res.data)
         }
         cargarUsuarios()

    },[])

    return (
        <>
            {/* <ul>
                {users.map(user =>(

                 <li key={user.id}>
                    Nombre:{user.name}<br/>
                    Apellido:{user.username}<br/>
                    Email:{user.email}

                    <hr/>
                 </li>

                ))}
            </ul> */}

            {/* VERSION EN TABLA */}
            <table>
                <tr>
                    {/* <th>ID</th> */}
                    <th>NOMBRE</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                </tr>
                {users.map(user=>(
                <tr key={user.id}>
                    {/* Filas por persona por eso en singular*/}
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
                ))}
            </table> 
        </>
    )
}

export default Axios