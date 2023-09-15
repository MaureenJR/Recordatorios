import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Nuevo = () => {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [prioridad, setPrioridad] = useState(1);

    const navigate = useNavigate();

    const [errors, setErrors] = useState({}); //errors.atributo.message

    const guardarRecordatorio = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/recordatorios", {
            titulo,
            contenido,
            prioridad
        })
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors));
    }

    return(
        <div className="w-50 m-auto mt-5 card p-3">
            <h1>Nuevo Recordatorio</h1>
            <form onSubmit={guardarRecordatorio}>
                <div className="mb-2">
                    <label>Titulo:</label>
                    <input className="form-control" type="text" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)}/>
                    {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span> : null}
                </div>
                <div className="mb-2">
                    <label>Contenido:</label>
                    <input className="form-control" type="text" id="contenido" value={contenido} onChange={e => setContenido(e.target.value)}/>
                    {errors.contenido ? <span className="text-danger">{errors.contenido.message}</span> : null}
                </div>
                <div className="mb-2">
                    <label>Prioridad:</label>
                    <input className="form-control" type="number" id="prioridad" value={prioridad} onChange={e => setPrioridad(e.target.value)}/>
                    {errors.prioridad ? <span className="text-danger">{errors.prioridad.message}</span> : null}
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar"/>
            </form>
        </div>
    );
}

export default Nuevo;