import React from "react"

function Aluno(props){
    return (
     <div>
      <h2>Aluno: {props.nome}</h2>
      <p>Turma: {props.turma}</p>
    </div>
    )
}
export default Aluno;