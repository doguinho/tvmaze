class SeriesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
        const boxes = this._elemento.querySelectorAll('.box-serie');
        const serieDetalhes = document.getElementById('serie-detalhes');
        for (const b of boxes) {
            b.addEventListener('click', function (e) {
                serieDetalhes.classList.add('is-active');
                for (const m of model.paraArray()) {
                    if (m.id == this.dataset.serieId) {
                        const serieView = new SerieView('#detalhes');
                        serieView.update(m);
                    }
                }
            });
        }
        serieDetalhes.querySelector('.modal-close').addEventListener('click', function () {
            serieDetalhes.classList.remove('is-active');
        });
    }
    template(model) {
        return `
                ${model.paraArray().map(serie => `
                    <div class="box-serie" data-serie-id="${serie.id}">
                        <h1 class="subtitle">
                            <a href="#">${serie.nome}<br/>
                            <small class="has-text-grey-light">${serie.genero.length > 0 ? serie.genero : '...<br/>'}</small>
                            </a>
                        </h1>                                                
                        <a href="#"><img src="${serie.imgM}"/></a>
                    </div>
                     `).join('')}            
            
        `;
    }
}
