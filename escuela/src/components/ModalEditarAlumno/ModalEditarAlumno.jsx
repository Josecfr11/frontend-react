import React, { useState } from 'react';
import dataClases from '../../data/clases';
import dataAlumnos from '../../data/alumnos';

function ModalEditarAlumno({ isOpen, onClose, updateAlumnos, onShowToast,alumnoSelected}) {
    const [nombre, setNombre] = useState(alumnoSelected.nombre);
    const [apellidos, setApellidos] = useState(alumnoSelected.apellidos);
    const [clase, setClase] = useState(alumnoSelected.clase);

    const handleSaveData = () => {
        const nuevoId = Math.max(0, ...dataAlumnos.alumnos.map(alumno => alumno.id)) + 1;

        const nuevoAlumno = {
            id: nuevoId, 
            nombre,
            apellidos,
            clase,
            opc_estatus: true,
        };

        dataAlumnos.alumnos.push(nuevoAlumno); 
        updateAlumnos([...dataAlumnos.alumnos]);
        onClose();
        handleShowToast('Se ha guardado correctamente', 'success');
        limpiarCampos();
    };
    
    const limpiarCampos = () => {
        setNombre('');
        setApellidos('');
        setClase('');
    }
    const handleShowToast = (message, type) => {
        onShowToast(message, type);
    }

    const saveNombre = (event) => setNombre(event.target.value);
    const saveApellidos = (event) => setApellidos(event.target.value);
    const saveClase = (event) => setClase(event.target.value);

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Alumno</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre-modal-" className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        value={nombre}
                                        onChange={saveNombre}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="apellidos"
                                        value={apellidos}
                                        onChange={saveApellidos}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clasesCombo" className="form-label">Clase:</label>
                                    <select
                                        id="clasesCombo"
                                        className="form-select"
                                        value={clase}
                                        onChange={saveClase}
                                    >
                                        {dataClases.clases.map((clase) => (
                                            <option key={clase.id} value={clase.clase}>
                                                {clase.clase}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSaveData}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div
                className={`modal-backdrop fade ${isOpen ? 'show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={onClose}
            ></div>
        </div>
    );
}

export default ModalEditarAlumno;
