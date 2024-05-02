import React, { useState, useEffect } from "react";

function Data() {
    const [dataAtual, setDataAtual] = useState("");

    useEffect(() => {
        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"];

        const data = new Date();
        const dataFormatada = `${diaSemana[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`;

        setDataAtual(dataFormatada);
    }, []);

    return (
        <div class="data">
            {dataAtual}
        </div>
    );
}

export default Data;

