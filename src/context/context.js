import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [alumno, setAlumno] = useState({
    matricula: "",
    nombre: "",
    carrera: "",
    semestre: "",
    grupo: "",
  });

  return (
    <DataContext.Provider value={{ alumno, setAlumno }}>
      {children}
    </DataContext.Provider>
  );
};
