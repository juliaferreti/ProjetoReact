import Relogio from "./Components/Atividade01/Relogio";
import Letreiro from "./Components/Atividade01/Letreiro";
import Data from "./Components/Atividade01/Data";
import { Link } from "react-router-dom";

export default function Atvidade01(){
    return (
        <>
          <h1>Data, hora e letreiro</h1>
          <Data />
          <Relogio />
          <Letreiro />
          <Link to="/">Voltar para página inicial</Link>
        </>
    );
}
