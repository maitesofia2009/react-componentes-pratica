import React from 'react';

function Produto(props) {
  return (
    <div className="produto-card">
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
      <p><strong>Preço:</strong> R$ {props.preco}</p>
       <strong>Status: </strong>{props.disponivel ? "Disponível" : "Indisponível"}
      <button>Comprar</button>

    </div>
  );
}

export default Produto;
