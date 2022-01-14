import React,{useContext} from 'react';
import { UserContext } from './Context/UserContext';

const Listausuarios = () => {

    const{users}=useContext(UserContext)

    console.log(users)
    const usuarios=users.data
    
    return (
        <>

        {/* <ul>
            {usuarios.map(usuario=>(
                <li key={usuario.id}>
                    {usuario.id}<br/>
                    {usuario.name}<br/>
                    {usuario.phone}<br/>
                    {usuario.username}
                </li>
            ))}
        </ul> */}


        <table>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PHONE</th>
                    <th>USERNAME</th>
                </tr>

                {usuarios.map(usuario=>(

                <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.phone}</td>
                    <td>{usuario.username}</td>

                </tr>
                ))}
        </table>
        </>
    );
}

export default Listausuarios;
