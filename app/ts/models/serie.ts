class Serie {

    constructor(
        private _id: number,
        private _nome:string,
        private _imgMedium:string,
        private _imgOriginal:string,
        private _genero:[string],
        private _rating:number,
        private _summary:string,
        private _language:string,
        private _release:string
    ) {}
    
    public get nome() : string {
        return this._nome;
    }
    
    
    public get id() : number {
        return this._id;
    }

    
    public get imgM() : string {
        return this._imgMedium;
    }

    
    public get imgFull() : string {
        return this._imgOriginal;
    }
    
    
    public get genero() : [string] {
        return this._genero;
    }

    
    public set genero(v : [string]) {
        this._genero = v;
    }
    
    
    public get rating() : number {
        return this._rating;
    }
    
    public set rating(v : number) {
        this._rating = v;
    }
    
    
    public get summary() : string {
        return this._summary;
    }
    
    
    public set summary(v : string) {
        this._summary = v;
    }
    
    
    public get language() : string {
        return this._language;
    }

    
    public set language(v : string) {
        this._language = v;
    }
    
    
    public get release() : string {
        return this._release
    }

    
    public set release(v : string) {
        this._release = v;
    }
    
    
    

}