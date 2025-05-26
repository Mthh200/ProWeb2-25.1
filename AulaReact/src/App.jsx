import * as React from "react";
/*
export default () => (
    <div>
        <h1>Primeira Aula</h1>
    </div>
);

*/
export default (props) => {
    
    const { min, max} = props
    const aleatorio = parseInt((Math.random() * (max+1 - min)) + min);

    return (
        <div>
            <h1>Valor aleatório</h1>
            <p>Valor gerado: {aleatorio}</p>
        </div>
    )
};
