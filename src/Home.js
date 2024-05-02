import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container" className="cont">
      <h1>Projeto React
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atividade01">Atividade 01</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;