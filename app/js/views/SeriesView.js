class SeriesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
                ${model.paraArray().map(serie => `
                    <div class="box-serie">
                        <h1 class="subtitle">
                            <a href="#${serie.id}">${serie.nome}</a>
                        </h1>                        
                        <img src="${serie.imgM}"/>
                    </div>
                     `).join('')}            
            
        `;
    }
}
