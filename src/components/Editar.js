import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function EditarUsuario(){
    const params = useParams();
    console.log(params); 
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [foto, setFoto] = useState(null);
    const [rutaFoto, setRutaFoto] = useState("");
    
    useEffect(async()=>{
        var res = await axios.get("https://nfapasswordrm.onrender.com/api/buscarUsuarioPorId/:id" + params.id)
        setId(res.data.id)
        setNombre(res.data.nombre)
        setUsuario(res.data.usuario)
        setRutaFoto("https://nfapasswordrm.onrender.com/images/" + res.data.foto)
    },[])

    function editarDatos(e){
        e.preventDefault();
        console.log("editar datos");
    }


    return(
        <div className="container mt-5">
        <div className="text-danger"><h2>{mensaje}</h2></div>
        <form onSubmit={editarDatos}>
            <div className="card">
                <div className="card-header">
                    <h1>Editar usuario</h1>
                </div>
                <div className="card-body">
                    <input className="form-control mb-3" type="text" name="id" id="id" placeholder="Id" readOnly></input>
                    <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autoFocus onChange={(e)=>setNombre(e.target.value)}></input>
                    <input className="form-control mb-3" type="text" name="usuario" id="usuario" placeholder="Usuario" onChange={(e)=>setUsuario(e.target.value)} ></input>
                    <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)} ></input>
                    <div>
                    <img src={rutaFoto} alt="Foto de usuario" width="100" height="100"></img>
                    </div>
                </div>
                <div className="card-footer">
                    <button className=" form-control btn btn-primary" type="submit">Editar</button>
                </div>
            </div>
        </form>
    </div>
    )
}