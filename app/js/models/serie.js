class Serie {
    constructor(_id, _nome, _imgMedium, _imgOriginal, _genero) {
        this._id = _id;
        this._nome = _nome;
        this._imgMedium = _imgMedium;
        this._imgOriginal = _imgOriginal;
        this._genero = _genero;
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this._id;
    }
    get imgM() {
        return this._imgMedium;
    }
    get imgFull() {
        return this._imgOriginal;
    }
    get genero() {
        return this._genero;
    }
    set genero(v) {
        this._genero = v;
    }
}
