import AdicionandoInteratividade from "./Components/Atividade04/AdicionandoInteratividade";
import { Link } from "react-router-dom";

export default function Atividade04(){
    return (
        <>
          <AdicionandoInteratividade />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
            <button style={{ backgroundColor: "white" }}>
              <Link to="/">Voltar para página inicial</Link>
            </button>
          </div>
        </>
    );
}