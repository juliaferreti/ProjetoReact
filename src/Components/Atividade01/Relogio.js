import { useState, useEffect } from 'react';

function Relogio() {


  const [horario, setHorario] = useState('');

  useEffect(() => {
    function atualizarRelogio() {
      let dataAtual = new Date();
      let horas = dataAtual.getHours();
      let minutos = dataAtual.getMinutes();
      let segundos = dataAtual.getSeconds();
      if (horas < 10) horas = "0" + horas;
      if (minutos < 10) minutos = "0" + minutos;
      if (segundos < 10) segundos = "0" + segundos;
      let horario = horas + ":" + minutos + ":" + segundos;
      setHorario(horario);
    }

    const intervalo = setInterval(atualizarRelogio, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div class="relogio">
      <h1>{horario}</h1>
    </div>
  );
}

export default Relogio;