import React from "react"

function Nota(props){
    return (
     <div>
      <h1>Disciplina: {props.disciplina}</h1>
      <h3>Nota: {props.nota}</h3>
    </div>
    )
}
export default Nota;