import * as React from 'react'

function Mensagem(props){
    return <h1>Seja bem vindo(a), {props.name}</h1>
}

function App(){
    return 
        <div>
            <Mensagem name="Lerry Augusto"></Mensagem>
        </div>
}