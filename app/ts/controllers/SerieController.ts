class SerieController {

    private _series = new Series();
    private _seriesView = new SeriesView('#catalogo');

    constructor(
    ) { }

    buscarDados() {

        const url = 'data/robots.json';

        fetch(url)
        .then(response => response.json()) 
        .then(result => {
            this.criarListaDados(result);
        })
        .catch(err => {
            console.error('Erro ao recuperar dados do servidor', err);
      });
    
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
                release.toLocaleDateString();
                );

            this._series.adiciona(serie);

            this._seriesView.update(this._series);

        }        
        
    }


}