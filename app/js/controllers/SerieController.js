class SerieController {
    constructor() {
        this._series = new Series();
        this._seriesView = new SeriesView('#catalogo');
    }
    buscarDados() {
        let url = 'data/robots.json';
        fetch(url)
            .then(response => response.json())
            .then(result => {
            this.criarListaDados(result);
        })
            .catch(err => {
            console.error('Erro ao recuperar dados do servidor', err);
        });
    }
    criarListaDados(dados) {
        for (const dado of dados) {
            const serie = new Serie(dado.show.id, dado.show.name);
            this._series.adiciona(serie);
            this._seriesView.update(this._series);
        }
        console.log(this._series.paraArray());
    }
    get dados() {
        return this._dados;
    }
}
