class Series {
    constructor() {
        this._series = [];
    }
    adiciona(serie) {
        this._series.push(serie);
    }
    paraArray() {
        return [].concat(this._series);
    }
}
