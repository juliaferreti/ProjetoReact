import Contador from "./Components/Atividade02/Contador";
import { Link } from "react-router-dom";

export default function Atividade02(){
    return (
        <>
          <Contador />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
            <button style={{ backgroundColor: "white" }}>
              <Link to="/">Voltar para página inicial</Link>
            </button>
          </div>
        </>
    );
}