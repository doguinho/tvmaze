class Serie {

    constructor(
        private _id: number,
        private _nome:string,
        private _imgMedium:string,
        private _imgOriginal:string,
        private _genero:[string]
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
    
    
    
    

}