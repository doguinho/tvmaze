class SerieView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
            <div class="detalhes">
            <div class="photo">
            <figure>
                <img src="${model.imgFull}" alt="Serie" 
                srcset="${model.imgM} 210w,
                ${model.imgFull} 680w" 
                sizes="(max-width: 380px) 210px,
                (min-width: 381px) 680px">
            </figure>
            </div>
            <div class="summary">
            <h1 class="title">${model.nome}</h1>
            <h2 class="subtitle">
                ${model.genero.length > 0 ? model.genero + '<br/>' : ''}
                <small>
                    ${model.rating > 0 ? 'Rating: ' + model.rating + '<br />' : ''}
                    Idioma: ${model.language}<br />
                    Lançamento: ${model.release}
                </small>
            </h2>
            <p>${model.summary}</p>
            </div>
        </div>
        `;
    }
}
