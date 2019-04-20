class Serie {
    constructor(_id, _nome) {
        this._id = _id;
        this._nome = _nome;
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this._id;
    }
}
