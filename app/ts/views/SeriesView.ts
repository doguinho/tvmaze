class SeriesView {

    private _elemento: Element;
    private _titulo:string;

    constructor(seletor: string,titulo:string) {

        this._elemento = document.querySelector(seletor);
        this._titulo = titulo;
        
    }

    update(model: Series): void {

        this._elemento.innerHTML = this.template(model);
        const boxes = this._elemento.querySelectorAll('.box-serie');
        const serieDetalhes = document.getElementById('serie-detalhes');
        for (const b of boxes) {
            b.addEventListener('click',function(e){                
                serieDetalhes.classList.add('is-active');
                for (const m of model.paraArray()) {
                    if (m.id == this.dataset.serieId) {
                        const serieView = new SerieView('#detalhes');
                        serieView.update(m);        
                    }
                }
            });    
        }        
       
    }

    limpar(){
        this._elemento.innerHTML = '';
    }

    esconder() {
        this._elemento.classList.add('is-hidden');
    }

    mostrar() {
        this._elemento.classList.remove('is-hidden');
    }

    template(model: Series): string {
        
        return `
                <h1 class="title">${model.paraArray().length > 0 ? this._titulo : ''}</h1>
                <div class="lista">
                    ${model.paraArray().map(serie => 
                        `
                        <div class="box-serie" data-serie-id="${serie.id}">
                            <h1 class="subtitle">
                                <a href="#">${serie.nome}<br/>
                                <small class="has-text-grey-light">${serie.genero.length > 0 ? serie.genero : '...<br/>'}</small>
                                </a>
                            </h1>                                                
                            <a href="#"><img src="${serie.imgM}"/></a>
                        </div>
                        `   
                    ).join('')}            
                </div>
        `;
    }

}