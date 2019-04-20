class SeriesView {

    private _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(model: Series): void {

        this._elemento.innerHTML = this.template(model);
    }

    template(model: Series): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(serie => 
                     `
                        <tr>
                            <td>${serie.id}</td>
                            <td>${serie.nome}</td>
                        <tr>
                     `   
                ).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }


}