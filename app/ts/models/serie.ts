class Serie {

    constructor(
        private _id: number,
        private _nome:string
    ) {}

    
    public get nome() : string {
        return this._nome;
    }
    
    
    public get id() : number {
        return this._id;
    }
    

}