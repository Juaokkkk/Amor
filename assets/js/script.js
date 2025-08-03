  const inicio = new Date("2025-01-16T00:00:00");

  function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicio;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML = 
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);

