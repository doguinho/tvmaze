class SerieController {

    private _series = new Series();
    private _seriesView = new SeriesView('#catalogo','Series');
    private _seriesViewFav = new SeriesView('#favoritos','Favoritos');
    private _seriesViewBusca = new SeriesView('#busca', 'Busca');
    private _dados;

    constructor(
    ) { }

    
    public get dados() : string {
        return this._dados;
    }
    
    
    public set dados(d : string) {
        this._dados = d;
    }
    

    async buscarDados(url:string) {

        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    exibirDados(dados){

        this.criarListaDados(dados);
        this.listarFavoritos();

        this._seriesView.update(this._series);

    }

    exibirBusca(dados, query: string){

        let palavra = query.toLocaleLowerCase();

        let listaBusca = new Series();
        this._series = new Series();
        this.criarListaDados(dados);

        for (const serie of this._series.paraArray()) {

            if (serie.nome.toLowerCase().indexOf(palavra) >= 0) {
                listaBusca.adiciona(serie);                
            }
        }


        this._seriesViewBusca.update(listaBusca);
        this._seriesView.esconder();
        this._seriesViewFav.esconder();
        

    }

    limparBusca(){

        this._seriesViewBusca.update(new Series());

        this._seriesView.mostrar();
        this._seriesViewFav.mostrar();

    }
    
    criarListaDados(dados){

        for (const dado of dados) {

            if (dado.show.image === null) { continue; }

            const release = new Date(dado.show.premiered);

            const serie = new Serie(
                dado.show.id,
                dado.show.name,
                dado.show.image.medium,
                dado.show.image.original,
                dado.show.genres,
                dado.show.rating.average != null ? dado.show.rating.average : 0,
                dado.show.summary,
                dado.show.language,
                release.toLocaleDateString()
                );

            this._series.adiciona(serie);

        }        

    }

    testaBtnFav(serie:Serie){

        let listaFav = JSON.parse(localStorage.getItem("listaFav"));

        if (listaFav != null) {

            const favExistente = listaFav.indexOf(serie.id);

            if (favExistente >= 0) { 
                document.querySelector("#favBtn").classList.add('is-success');
            } else { 
                document.querySelector("#favBtn").classList.remove('is-success');
            }

        }

    }

    adicionaFavoritos(serie:Serie) {

        let listaFav = JSON.parse(localStorage.getItem("listaFav"));

        if (listaFav == null) {
            listaFav = [];
        }

        const favExistente = listaFav.indexOf(serie.id);

        if (favExistente < 0) { 
            listaFav.push(serie.id);
         } else { 
             listaFav.splice(favExistente,1);
        }
        
        localStorage.setItem("listaFav", JSON.stringify(listaFav));

        this.testaBtnFav(serie);

    }

    listarFavoritos(){
        
        if (localStorage.getItem("listaFav") !== null) {

            let favoritos = new Series();

            let listaFav = JSON.parse(localStorage.getItem("listaFav"));

            for (const serie of this._series.paraArray()) {

                const favExistente = listaFav.indexOf(serie.id);

                if (favExistente >= 0) { favoritos.adiciona(serie) } ;
                
            }

            this._seriesViewFav.update(favoritos);

        }
        
    }

}