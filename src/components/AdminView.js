import React from 'react';
import { FaPen, FaPlus, FaTrash} from "react-icons/fa";
import "../data/db.json";
import Table from 'react-bootstrap/Table';


function AdminView() {
    return (
        <>
            <center> <h1 class="tituloo">Administrador</h1></center>
            <button class="botonIns"> <FaPlus />

            </button>
            <br />
            <div class="tabla">
                <Table striped bordered hover size="sm" >
                    <thead class="tablatitulo">
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>1</td>
                            <td>Mitad del Mundo</td>
                            <td>Fall Favorite</td>
                            <td>02/03/2022</td>
                            <td>Disponible</td>
                            <td>
                                <button><FaPen /></button>
                                {" "}
                                <button><FaTrash /></button>

                            </td>
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>Centro Historico</td>
                            <td>Sweater Season Cozy</td>
                            <td>05/04/2022</td>
                            <td>Disponible</td>
                            <td>
                                <button><FaPen /></button>
                                {" "}
                                <button><FaTrash /></button>

                            </td>
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>Atacames</td>
                            <td>Demin Verstile</td>
                            <td>22/05/2022</td>
                            <td>Disponible</td>
                            <td>
                                <button><FaPen /></button>
                                {" "}
                                <button><FaTrash /></button>
                            </td>
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>Carmen</td>
                            <td>Blouse Lacey</td>
                            <td>12/06/2022</td>
                            <td>Disponible</td>
                            <td>
                                <button><FaPen /></button>
                                {" "}
                                <button><FaTrash /></button>
                            </td>
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>Carchi</td>
                            <td>Blouse Lacey</td>
                            <td>12/06/2022</td>
                            <td>No Disponible</td>
                            <td>
                                <button><FaPen /></button>
                                {" "}
                                <button><FaTrash /></button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </>
    )
}
export default AdminView;