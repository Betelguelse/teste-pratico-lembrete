import React from "react";

// definição das variáveis

interface IProps {
    name: string;
    completed: boolean | string;
}

// retorna os lembretes salvos

const Lembrete: React.FC<IProps> = (props: IProps) => {
    return(
        <h1>{props.name}</h1>
    )
}

export default Lembrete;


// export default function Lembrete(props)
// {
//     return(
//         <button type="button" className="btn btn__danger">
//           Delete <span className="visually-hidden">{props.name}</span>
//         </button>
//     )
// }
