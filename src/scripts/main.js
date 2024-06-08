AOS.init();

const dataEvento = new Date("dec 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diasEmMs / horasEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horasEmMs / minutosEmMs);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutosEmMs / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contador);
        const timer = document.getElementById('contador');
        timer.innerHTML = 'EVENTO EXPIRADO';
        timer.classList.add('evento--expirado');
    }

}, 1000);