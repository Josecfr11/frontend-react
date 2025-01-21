import React, { useState } from "react";
import styles from "../alumnos/Alumnos.module.css";
import ModalAgregarAlumno from "../../components/ModalAgregarAlumno/ModalAgregarAlumno";
import dataAlumnos from "../../data/alumnos";
import dataClases from "../../data/clases";
import Toast from "../../components/Toast/Toast";
import ModalEditarAlumno from "../../components/ModalEditarAlumno/ModalEditarAlumno";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Select from "../../components/select/Select";
import Table from "../../components/Table/Table";

function Alumnos() {
    const [alumnos, setAlumnos] = useState(dataAlumnos.alumnos);
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [alumnoEditInfo, setAlumnoEditInfo] = useState({});
    const [toast, setToast] = useState({
        isVisible: false,
        message: "",
        type: "",
    });

    const headers = ['idAlumno', 'Nombre', 'Apellidos', 'Clase'];


    //Variables de estado para sección de Filtrado
    const [nombreFiltro, setNombreFiltro] = useState("");
    const [apellidosFiltro, setApellidosFiltro] = useState("");
    const [claseFiltro, setClaseFiltro] = useState("");

    const nombreBuscado = (event) => setNombreFiltro(event.target.value);
    const apellidoBuscado = (event) => setApellidosFiltro(event.target.value);
    const claseBuscada = (event) => setClaseFiltro(event.target.value);

    const buscarAlumno = () => {
        alumnos.filter((alumno) => alumno.nombre === 6);
    }

    const showToast = (message, type) => {
        setToast({ isVisible: true, message, type });
        setTimeout(
            () => setToast({ isVisible: false, message: "", type: "" }),
            3000
        );
    };
    const handleShowModalAgregar = () => setShowModalAgregar(true);
    const handleShowModalEditar = (data) => {
        setShowModalEditar(true);
        setAlumnoEditInfo(data);
    };

    const actualizarValor = (alumnoActualizado) => {
        const alumnosActualizados = alumnos.map((alumno) =>
            alumno.id === alumnoActualizado.id ? alumnoActualizado : alumno
        );
        setAlumnos(alumnosActualizados);
    };

    return (
        <div className="w-100">
            <form
                className={`container-fluid bg-body-secondary rounded-4 p-3 ${styles["formulario-filtro"]}`}
            >
                <div className="row">
                    <div className="col-10">
                        <h2 className="">Alumnos</h2>
                    </div>
                    <div className="col-2 align-content-end">
                        <Button
                            type={"primary"}
                            name={"Agregar"}
                            onClick={handleShowModalAgregar}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <Input
                            type={"text"}
                            label={"Nombre"}
                            id={"nombre"}
                            value={nombreFiltro}
                            onChange={nombreBuscado}
                        ></Input>
                    </div>
                    <div className="col mb-3">
                        <Input
                            type={"text"}
                            label={"Apellidos"}
                            id={"apellidos"}
                            value={apellidosFiltro}
                            onChange={apellidoBuscado}
                        ></Input>
                    </div>
                    <div className="col mb-3">
                        <Select
                            label={"Clase"}
                            value={claseFiltro}
                            id={"claseSelect"}
                            optionList={dataClases.clases}
                            optionLabel={"clase"}
                            optionId={"id"}
                            onChange={claseBuscada}
                        ></Select>
                    </div>
                    <div className="col-2 mb-3 align-content-end">
                        <Button type={"primary"} name={"Buscar"} />
                    </div>
                </div>
            </form>
            <div className="rounded-4 p-3 mt-3 bg-body-secondary">
                <Table headers={headers} dataList={alumnos} onClickEdit={handleShowModalEditar}></Table>
            </div>
            
            {toast.isVisible && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() =>
                        setToast({ isVisible: false, message: "", type: "" })
                    }
                />
            )}
            {/* Modal */}
            <ModalAgregarAlumno
                isOpen={showModalAgregar}
                onClose={() => setShowModalAgregar(false)}
                updateAlumnos={setAlumnos}
                onShowToast={showToast}
            ></ModalAgregarAlumno>

            <ModalEditarAlumno
                isOpen={showModalEditar}
                onClose={() => setShowModalEditar(false)}
                alumnoSelected={alumnoEditInfo}
                actualizarValor={actualizarValor}
                data={alumnos}
                onShowToast={showToast}
            ></ModalEditarAlumno>
        </div>
    );
}

export default Alumnos;
