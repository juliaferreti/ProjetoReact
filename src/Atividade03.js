import DescrevendoaUI from "./Components/Atividade03/DescrevendoaUI";
import { Link } from "react-router-dom";

export default function Atividade03(){
    return (
        <>
          <h1>Descrevendo a UI</h1>
          <DescrevendoaUI />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
            <button style={{ backgroundColor: "white" }}>
              <Link to="/">Voltar para página inicial</Link>
            </button>
          </div>
        </>
    );
}