const series = new SerieController();
series.buscarDados();

const serieDetalhes = document.getElementById('serie-detalhes');
serieDetalhes.querySelector('.modal-close').addEventListener('click',function(){
    serieDetalhes.classList.remove('is-active');
    series.listarFavoritos();
});