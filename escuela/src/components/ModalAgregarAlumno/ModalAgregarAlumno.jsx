import React, { useState } from "react";
import dataClases from "../../data/clases";
import dataAlumnos from "../../data/alumnos";
import Select from "../select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";

function ModalAgregarAlumno({ isOpen, onClose, updateAlumnos, onShowToast }) {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [clase, setClase] = useState("");

    const handleSaveData = () => {
        const nuevoId =
            Math.max(0, ...dataAlumnos.alumnos.map((alumno) => alumno.id)) + 1;

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
        handleShowToast("Se ha guardado correctamente", "success");
        limpiarCampos();
    };

    const limpiarCampos = () => {
        setNombre("");
        setApellidos("");
        setClase("");
    };
    const handleShowToast = (message, type) => {
        onShowToast(message, type);
    };

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
                            <h5 className="modal-title">Agregar Alumno</h5>
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
                                    <Input
                                        type={"text"}
                                        label={"Nombre"}
                                        id={"nombre"}
                                        value={nombre}
                                        onChange={saveNombre}
                                    ></Input>
                                </div>
                                <div className="mb-3">
                                    <Input
                                        type={"text"}
                                        label={"Apellidos"}
                                        id={"apellidos"}
                                        value={apellidos}
                                        onChange={saveApellidos}
                                    ></Input>
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
                            <Button
                            type={"primary"}
                            name={"Guardar"}
                            onClick={handleSaveData}
                        />
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

export default ModalAgregarAlumno;
