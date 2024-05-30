import Gerenciandooestado from "./Components/Atividade05/Gerenciandooestado";
import { Link } from "react-router-dom";

export default function Atividade05(){
    return (
        <>
          <Gerenciandooestado />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
            <button style={{ backgroundColor: "white" }}>
              <Link to="/">Voltar para página inicial</Link>
            </button>
          </div>
        </>
    );
}