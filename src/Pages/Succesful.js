import React, { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/context";
import axios from "axios";

const Succesful = () => {
  const { alumno } = useContext(DataContext);

  const { curso1, curso2, nombre, matricula } = alumno;
  const [pdf, setPdf] = useState("");

  useEffect(() => {
    if (matricula !== undefined) {
      const insertar = async () => {
        try {
          const { data } = await axios.put(
            `https://itsjrctalleres.duckdns.org/student/${matricula}`,
            {
              estatus: "1",
            }
          );

          setPdf(data.url);
        } catch (error) {
          console.log("Hubo un error al actualizar el estatus");
        }
      };

      insertar();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="vertical-layout vertical-menu-modern boxicon-layout no-card-shadow 1-column  navbar-sticky footer-static bg-full-screen-image  blank-page blank-page row justify-content-center align-items-center">
        <div className="success card bg-authentication">
          <i class="far fa-check-circle"></i>
          <h1>Registro Completado!!</h1>
          <h3>Segunda Jornada de TIC'S 2021</h3>

          <div className="cursos">
            <h2>Tus cursos</h2>
            <p>{curso1}</p>
            <p>{curso2}</p>
          </div>
          <p style={{ color: "#000", textAlign: "left", paddingTop: "20px" }}>
            Alumno {nombre}
          </p>

          <a
            href={pdf}
            download="How-to-download-file.pdf"
            className="btn btn-primary"
            target="_blank"
          >
            Descargar
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Succesful;
