import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Botones from './Botones'

const studentName = "Jewison";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Hola React!!!</h1>
      <h3>{studentName}</h3>
      <ul>
        {
          techSkills.map(techSkills => 
            <li id={uuidv4()} key={uuidv4()}>{techSkills}</li>
          )
        }
      </ul>
      <Botones 
        alerts = {alerts}
      />
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
