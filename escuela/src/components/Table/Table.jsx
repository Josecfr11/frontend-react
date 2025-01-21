import React from "react";
import Button from "../Button/Button";

export default function Table({ headers, dataList, onClickEdit }) {
    return (
        <table className="rounded-4 table table-hover overflow-hidden m-0">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th scope="col">{header}</th>
                    ))}
                    <th scope="col" className="text-center w-25">
                        Accion
                    </th>
                </tr>
            </thead>
            <tbody>
                {dataList
                    .filter((data) => data.opc_estatus)
                    .map((data) => (
                        <tr key={data.id}>
                            {Object.keys(data).map((prop) => (
                                prop !== 'opc_estatus' ? 
                                <td>{data[prop]}</td> : ''
                            ))}
                            <td>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col align-content-end">
                                            <Button
                                                type={"warning"}
                                                name={"Editar"}
                                                onClick={() => onClickEdit(data)}
                                            />
                                        </div>
                                        <div className="col align-content-end">
                                            <Button
                                                type={"danger"}
                                                name={"Eliminar"}
                                                onClick={() => { /* Define the delete action here */ }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}