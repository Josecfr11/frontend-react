import React, { useState } from 'react';
import styles from '../alumnos/Alumnos.module.css';
import ModalAgregarAlumno from '../../components/ModalAgregarAlumno/ModalAgregarAlumno'
import dataAlumnos from '../../data/alumnos'
import dataClases from '../../data/clases'
import Toast from '../../components/Toast/Toast';
import ModalEditarAlumno from '../../components/ModalEditarAlumno/ModalEditarAlumno';

function Alumnos() {
    const [alumnos, setAlumnos] = useState(dataAlumnos.alumnos);
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [alumnoEditInfo, setAlumnoEditInfo] = useState({});
    const [toast, setToast] = useState({ isVisible: false, message: '', type: '' });

    
    const showToast = (message, type) => {
        setToast({ isVisible: true, message, type });
        setTimeout(() => setToast({ isVisible: false, message: '', type: '' }), 3000);
    };
    const handleShowModalAgregar = () => setShowModalAgregar(true);
    const handleShowModalEditar = (data) => {
        setShowModalEditar(true);
        console.log(data);
        
        setAlumnoEditInfo(data);
    }
    
    return (
        <div className='w-100'>
            <form className={`container-fluid bg-body-secondary rounded-4 p-3 ${styles['formulario-filtro']}`}>
                <div className='row'>
                    <div className='col-10'>
                        <h2 className=''>Alumnos</h2>
                    </div>
                    <div className='col-2 align-content-end'>
                        <button type="button" className="btn btn-primary w-100" onClick={handleShowModalAgregar}>Agregar</button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col mb-3">
                        <label className="form-label">Nombre:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label">Apellidos:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className='col mb-3'>
                        <label className="form-label">Clase:</label>
                        <select id="inputState" className="form-select">
                            {dataClases.clases.map((clase) => (
                                <option key={clase.id} value={clase.id}>{clase.clase}</option>))}
                        </select>
                    </div>
                    <div className='col-2 mb-3 align-content-end'>
                        <button type="button" className="btn btn-primary w-100">Buscar</button>
                    </div>
                </div>
            </form>
            <div className='rounded-4 p-3 mt-3 bg-body-secondary'>
                <table className="rounded-4 table table-hover overflow-hidden m-0">
                    <thead>
                        <tr>
                            <th scope="col">Id alumno</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Clase</th>
                            <th scope="col" className='text-center w-25'>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAlumnos.alumnos.filter((alumno) => alumno.opc_estatus)
                            .map((alumno) => (
                                <tr key={alumno.id}>
                                    <th scope="row">{alumno.id}</th>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellidos}</td>
                                    <td>{alumno.clase}</td>
                                    <td>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col align-content-end'>
                                                    <button type="button" className="btn btn-warning w-100" onClick={() => handleShowModalEditar(alumno)}>Editar</button>
                                                </div>
                                                <div className='col align-content-end'>
                                                    <button type="button" className="btn btn-danger w-100">Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {/* <Toast message={'Se ha guardado correctamente'} type={'success'} ></Toast> */}
            {toast.isVisible && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast({ isVisible: false, message: '', type: '' })}
                />
            )}
            {/* Modal */}
            <ModalAgregarAlumno isOpen={showModalAgregar} onClose={() => setShowModalAgregar(false)} updateAlumnos={setAlumnos} onShowToast={showToast}></ModalAgregarAlumno>
            
            <ModalEditarAlumno isOpen={showModalEditar} onClose={() => setShowModalEditar(false)} alumnoSelected={alumnoEditInfo} updateAlumnos={setAlumnos} onShowToast={showToast}></ModalEditarAlumno>
        </div>
    );
}

export default Alumnos;