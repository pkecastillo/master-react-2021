import React ,{useState,useEffect}from 'react'

const Fetch = () => {

    // HOOK
    const [users,setUsers]=useState([])

  useEffect(()=>{
   const cargarUsuarios=async()=>{
   const res=await fetch('https://jsonplaceholder.typicode.com/users')
   const data=await res.json()
   setUsers(data)
   console.log(data)
   }
   cargarUsuarios()

  },[])

    return (
        <>
        {/* <ul>
           {users.map(user => (
             
            <li key={user.id}>
                Nombre:{user.name}<br/>
                Apellido:{user.username}<br/>
                 Email:{user.email}<br/>
                Phone:{user.phone}
                <hr/>
            </li>

              
             ))}
        
        </ul>       */}

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

export default Fetch