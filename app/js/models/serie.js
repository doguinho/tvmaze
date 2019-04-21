class Serie {
    constructor(_id, _nome, _imgMedium, _imgOriginal, _genero, _rating, _summary, _language, _release) {
        this._id = _id;
        this._nome = _nome;
        this._imgMedium = _imgMedium;
        this._imgOriginal = _imgOriginal;
        this._genero = _genero;
        this._rating = _rating;
        this._summary = _summary;
        this._language = _language;
        this._release = _release;
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
    get rating() {
        return this._rating;
    }
    set rating(v) {
        this._rating = v;
    }
    get summary() {
        return this._summary;
    }
    set summary(v) {
        this._summary = v;
    }
    get language() {
        return this._language;
    }
    set language(v) {
        this._language = v;
    }
    get release() {
        return this._release;
    }
    set release(v) {
        this._release = v;
    }
}
