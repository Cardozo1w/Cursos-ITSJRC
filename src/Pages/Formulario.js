import React, { Fragment, useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/context";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";

const Formulario = () => {
  const { alumno, setAlumno } = useContext(DataContext);
  const { matricula, nombre, carrera, semestre, grupo } = alumno;

  const [disabled, setDisabled] = useState(true);
  const [mensaje, setMensaje] = useState(false);
  const history = useHistory();

  const buscar = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://itsjrctalleres.duckdns.org/student/${matricula}`
      );
      setAlumno(data);
      setDisabled(false);
      setMensaje(false);
    } catch (error) {
      setDisabled(true);
      setMensaje(true);
      setAlumno({
        matricula: "",
        nombre: "",
        carrera: "",
        semestre: "",
        grupo: "",
      });
      setTimeout(() => {
        setMensaje(false);
      }, 2000);
    }
  };

  const onChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });

    if (e.target.value.length >= 8) {
      document.querySelector("#matricula").classList.add("correcto");
      document.querySelector("#matricula").classList.remove("error");
    } else {
      document.querySelector("#matricula").classList.add("error");
      document.querySelector("#matricula").classList.remove("correcto");
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    history.push("/registro-completado");
  };
  return (
    <Fragment>
      <div
        className="vertical-layout vertical-menu-modern boxicon-layout no-card-shadow 1-column  navbar-sticky footer-static bg-full-screen-image  blank-page blank-page"
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col="1-column"
      >
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <section className="">
                <div className="c">
                  <div className="card bg-authentication mb-0">
                    <div className="row m-0 flex-row-reverse">
                      <div className="col-md-6 col-12 px-0">
                        <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                          <div className="card-header pb-1">
                            <div className="card-title">
                              <h4 className="text-center mb-2">
                                2da jornada de ingeniería en TICS 2021
                              </h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <form action="index.html">
                                <div className="form-group">
                                  <label for="matricula">Matricula</label>
                                  <div className="btn-buscar">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="matricula"
                                      name="matricula"
                                      placeholder="Matricula"
                                      onChange={onChange}
                                    />

                                    <button
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                      data-tip
                                      data-for="buscar"
                                      className="btn btn-primary glow btn-search"
                                      onClick={buscar}
                                    >
                                      Buscar
                                      <i
                                        style={{ marginLeft: "5px" }}
                                        className="fas fa-search"
                                      ></i>
                                    </button>
                                    <ReactTooltip
                                      id="buscar"
                                      type="dark"
                                      effect="solid"
                                    >
                                      Buscar
                                    </ReactTooltip>
                                  </div>
                                </div>
                                {mensaje ? (
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    Matricula no encontrada
                                  </p>
                                ) : null}

                                <div className="form-group mb-50">
                                  <label className="text-bold-600" for="nombre">
                                    Nombre
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    placeholder="Nombre"
                                    disabled={true}
                                    value={nombre}
                                  />
                                </div>
                                <div className="form-group mb-50">
                                  <label
                                    className="text-bold-600"
                                    for="carrera"
                                  >
                                    Carrera
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="carrera"
                                    placeholder="Carrera"
                                    disabled={true}
                                    value={carrera}
                                  />
                                </div>
                                <div className="form-group mb-50">
                                  <label
                                    className="text-bold-600"
                                    for="semestre"
                                  >
                                    Semestre
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="semestre"
                                    placeholder="Semestre"
                                    disabled={true}
                                    value={semestre}
                                  />
                                </div>
                                <div className="form-group mb-50">
                                  <label className="text-bold-600" for="grupo">
                                    Grupo
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="grupo"
                                    placeholder="Grupo"
                                    disabled={true}
                                    value={grupo}
                                  />
                                </div>
                                <ReactTooltip
                                  id="inscribir"
                                  type="dark"
                                  effect="solid"
                                >
                                  Inscribirse
                                </ReactTooltip>
                                <button
                                  type="submit"
                                  className="btn btn-primary glow position-relative w-100"
                                  data-tip
                                  data-for="inscribir"
                                  onClick={onClick}
                                  disabled={disabled}
                                >
                                  Inscribirme
                                  <i
                                    id="icon-arrow"
                                    className="bx bx-right-arrow-alt"
                                  ></i>
                                </button>
                                
                              </form>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                        <img
                          className="img-fluid"
                          src="../app-assets/images/pages/register.png"
                          alt="branding logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Formulario;
