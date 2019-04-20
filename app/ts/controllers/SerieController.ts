class SerieController {

    private _dados;
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

            const serie = new Serie(
                dado.show.id,
                dado.show.name,
                dado.show.image.medium,
                dado.show.image.original,
                dado.show.image.genre
                );

            this._series.adiciona(serie);

            this._seriesView.update(this._series);

        }        
        
    }

    public get dados() {
        return this._dados;
    }

}