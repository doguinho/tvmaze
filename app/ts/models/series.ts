class Series {

    private _series: Serie[] = [];

    adiciona(serie: Serie): void {

        this._series.push(serie);
    }

    paraArray(): Serie[] {

        return [].concat(this._series);
    }
}
