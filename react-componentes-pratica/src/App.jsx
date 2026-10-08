import React from 'react';
import Titulo from './components/Titulo'; 
import Aluno from './components/Aluno';
import Nota from './components/Nota';
import Produto from './components/Produto';

function App() {
  return (
    <div>
      <Titulo /> 
      <Aluno nome="Carlos" turma="DS" />
      <Aluno nome="Ana" turma="DS" />
      <Aluno nome="Pedro" turma="DS" />
      <Nota disciplina="React" nota={8.5} />
      <Nota disciplina="Javascript" nota={7} />
      <Nota disciplina="Html/Css" nota={10} />
      <Produto
       nome="Teclado Mecânico"
       descricao="Teclado com iluminação RGB"
       preco={250}
       disponivel={true}
      />

      <Produto
        nome="Mouse Gamer"
        descricao="Mouse de alta precisão"
        preco={120}
        disponivel={false}
      />
      <Produto
        nome="Monitor 144Hz"
        descricao="Monitor gamer com tela IPS de 24 polegadas"
        preco={899}
        disponivel={true}
      />
      <Produto
        nome="Headset Sem Fio"
        descricao="Fone de ouvido com microfone integrado e bateria de longa duração"
        preco={350}
        disponivel={false}
      />
      <Produto
        nome="Cadeira Ergonômica"
        descricao="Cadeira de escritório confortável com ajuste de altura"
        preco={680}
        disponivel={true}
      />
    </div>
  
  );
}
export default App;