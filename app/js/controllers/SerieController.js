var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SerieController {
    constructor() {
        this._series = new Series();
        this._seriesView = new SeriesView('#catalogo', 'Series');
        this._seriesViewFav = new SeriesView('#favoritos', 'Favoritos');
        this._seriesViewBusca = new SeriesView('#busca', 'Busca');
    }
    get dados() {
        return this._dados;
    }
    set dados(d) {
        this._dados = d;
    }
    buscarDados(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(url);
            let data = yield response.json();
            return data;
        });
    }
    exibirDados(dados) {
        this.criarListaDados(dados);
        this.listarFavoritos();
        this._seriesView.update(this._series);
    }
    exibirBusca(dados, query) {
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
        // console.log(this._series);
    }
    limparBusca() {
        this._seriesViewBusca.update(new Series());
        this._seriesView.mostrar();
        this._seriesViewFav.mostrar();
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
    listarBusca(valor) {
        this.buscarDados('data/zombie.json');
        //            let busca = new Series();
        /*
                    let listaFav = JSON.parse(localStorage.getItem("listaFav"));
        
                    for (const serie of this._series.paraArray()) {
        
                        const favExistente = listaFav.indexOf(serie.id);
        
                        if (favExistente >= 0) { favoritos.adiciona(serie) };
        
                    }
        
                    this._seriesViewFav.update(favoritos);
        
        */
    }
}
