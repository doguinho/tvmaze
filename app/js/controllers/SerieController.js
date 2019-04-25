class SerieController {
    constructor() {
        this._series = new Series();
        this._seriesView = new SeriesView('#catalogo', 'Series');
        this._seriesViewFav = new SeriesView('#favoritos', 'Favoritos');
    }
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
    criarListaDados(dados) {
        for (const dado of dados) {
            if (dado.show.image === null) {
                continue;
            }
            const release = new Date(dado.show.premiered);
            const serie = new Serie(dado.show.id, dado.show.name, dado.show.image.medium, dado.show.image.original, dado.show.genres, dado.show.rating.average != null ? dado.show.rating.average : 0, dado.show.summary, dado.show.language, release.toLocaleDateString());
            this._series.adiciona(serie);
        }
        this._seriesView.update(this._series);
        this.listarFavoritos();
    }
    testaBtnFav(serie) {
        let listaFav = JSON.parse(localStorage.getItem("listaFav"));
        if (listaFav != null) {
            const favExistente = listaFav.indexOf(serie.id);
            if (favExistente >= 0) {
                document.querySelector("#favBtn").classList.add('is-success');
            }
            else {
                document.querySelector("#favBtn").classList.remove('is-success');
            }
        }
    }
    adicionaFavoritos(serie) {
        let listaFav = JSON.parse(localStorage.getItem("listaFav"));
        if (listaFav == null) {
            listaFav = [];
        }
        const favExistente = listaFav.indexOf(serie.id);
        if (favExistente < 0) {
            listaFav.push(serie.id);
        }
        else {
            listaFav.splice(favExistente, 1);
        }
        localStorage.setItem("listaFav", JSON.stringify(listaFav));
        this.testaBtnFav(serie);
    }
    listarFavoritos() {
        if (localStorage.getItem("listaFav") !== null) {
            let favoritos = new Series();
            let listaFav = JSON.parse(localStorage.getItem("listaFav"));
            for (const serie of this._series.paraArray()) {
                const favExistente = listaFav.indexOf(serie.id);
                if (favExistente >= 0) {
                    favoritos.adiciona(serie);
                }
                ;
            }
            this._seriesViewFav.update(favoritos);
        }
    }
}
