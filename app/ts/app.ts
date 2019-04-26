const series = new SerieController();
const busca = new SerieController();

const serieDetalhes: HTMLInputElement   = <HTMLInputElement>document.getElementById('serie-detalhes');
const btnProcurar: HTMLInputElement     = <HTMLInputElement>document.getElementById('btnProcurar');
const btnLimpar: HTMLInputElement       = <HTMLInputElement>document.getElementById('btnLimpar');
const inputProcurar: HTMLInputElement   = <HTMLInputElement>document.getElementById('inputProcurar');

series.buscarDados('data/robots.json')
    .then(data => series.exibirDados(data));

serieDetalhes.querySelector('.modal-close').addEventListener('click',function(){
    serieDetalhes.classList.remove('is-active');
    series.listarFavoritos();
});

btnProcurar.addEventListener('click',function(){
    
    busca.buscarDados('data/zombie.json').then(function(data){
        
        busca.exibirBusca(data, inputProcurar.value);
        btnProcurar.classList.add('is-hidden');
        btnLimpar.classList.remove('is-hidden');

    });        

});

btnLimpar.addEventListener('click', function() {

    busca.limparBusca();
    inputProcurar.value = '';
    btnProcurar.classList.remove('is-hidden');
    btnLimpar.classList.add('is-hidden');

});