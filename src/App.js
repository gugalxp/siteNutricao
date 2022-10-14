import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
const [nutri, setNutri] = useState([]);

useEffect(() => {

  function loadApp() {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then((results)=>results.json()) //esse primeiro then é criado uma função onde passa os resultados e transforma eles em array
    .then((exibejson) =>{ //esse then recebe o resultado formatado em json é já possível acessa-lo dentro da função  
    console.log(exibejson);
    setNutri(exibejson);
    })
  }
  loadApp();
}, [])
  return (
    <div className='container'>
      <header>
        <strong>React Nutrição</strong>
      </header>
      {nutri.map((item)=>{
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao'>Acessar</a>
            <h4 className='categoria'>Categoria: {item.categoria}</h4>
          </article>
        )
      })}
    </div>

  );
}

export default App;
