import React from 'react';
//Esta função de montagem não é um componente React.
//É uma função simples que leva
//em uma referência a um elemento HTML.
//Portanto, precisamos descobrir uma maneira de fazer uso
//da função de montagem de dentro
//de um componente React 
//queremos manter o acoplamento entre nosso contêiner
//e marketing o mais genérico e simples possível.
//E é por isso que estamos exportando
//e fazendo uso da função de montagem.
//Então, se decidirmos trocar algo aqui,
//não teremos que fazer uma mudança em outro lugar.
//É por isso que não estamos exportando um componente React,
//mesmo que isso tornasse nossas vidas muito mais fáceis
import MarketingApp from './components/MarketingApp';
export default ()=> {
    return <div>
        <h1>Container</h1>
        <hr/>
        <MarketingApp/>
    </div>
}