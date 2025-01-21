import React, { useEffect, useState } from "react";
import dataClases from "../../data/clases";
import dataAlumnos from "../../data/alumnos";
import Select from "../select/Select";

function ModalEditarAlumno({
    isOpen,
    onClose,
    actualizarValor,
    onShowToast,
    alumnoSelected,
    data,
}) {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [clase, setClase] = useState("");

    const handleSaveData = () => {
        const alumnoActualizado = {
            ...alumnoSelected,
            nombre,
            apellidos,
            clase,
        };

        actualizarValor(alumnoActualizado);
        onShowToast("Alumno actualizado correctamente", "success");
        onClose();
    };

    useEffect(() => {
        if (alumnoSelected) {
            setNombre(alumnoSelected.nombre || "");
            setApellidos(alumnoSelected.apellidos || "");
            setClase(alumnoSelected.clase || "");
        }
    }, [alumnoSelected]);

    const saveNombre = (event) => setNombre(event.target.value);
    const saveApellidos = (event) => setApellidos(event.target.value);
    const saveClase = (event) => setClase(event.target.value);

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div
                className={`modal fade ${isOpen ? "show" : ""}`}
                style={{ display: isOpen ? "block" : "none" }}
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Alumno</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="nombre-modal-"
                                        className="form-label"
                                    >
                                        Nombre:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        value={nombre}
                                        onChange={saveNombre}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="apellidos"
                                        className="form-label"
                                    >
                                        Apellidos:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="apellidos"
                                        value={apellidos}
                                        onChange={saveApellidos}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Select
                                        label={"Clase"}
                                        value={clase}
                                        id={"clasesCombo"}
                                        optionList={dataClases.clases}
                                        optionLabel={"clase"}
                                        optionId={"id"}
                                        onChange={saveClase}
                                    ></Select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSaveData}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`modal-backdrop fade ${isOpen ? "show" : ""}`}
                style={{ display: isOpen ? "block" : "none" }}
                onClick={onClose}
            ></div>
        </div>
    );
}

export default ModalEditarAlumno;
