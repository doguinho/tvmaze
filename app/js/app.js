const series = new SerieController();
const busca = new SerieController();
const serieDetalhes = document.getElementById('serie-detalhes');
const btnProcurar = document.getElementById('btnProcurar');
const btnLimpar = document.getElementById('btnLimpar');
const inputProcurar = document.getElementById('inputProcurar');
series.buscarDados('data/robots.json')
    .then(data => series.exibirDados(data));
serieDetalhes.querySelector('.modal-close').addEventListener('click', function () {
    serieDetalhes.classList.remove('is-active');
    series.listarFavoritos();
});
btnProcurar.addEventListener('click', function () {
    busca.buscarDados('data/zombie.json').then(function (data) {
        busca.exibirBusca(data, inputProcurar.value);
        btnProcurar.classList.add('is-hidden');
        btnLimpar.classList.remove('is-hidden');
    });
});
btnLimpar.addEventListener('click', function () {
    busca.limparBusca();
    inputProcurar.value = '';
    btnProcurar.classList.remove('is-hidden');
    btnLimpar.classList.add('is-hidden');
});
