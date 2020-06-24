class CalcController{

constructor(){
    this._displayCalc = "0";
    this._dataAtual;
}

get displayCalc(){
    return this._displayCalc;
}

set displaycalc(value){
    this._displayCalc = value;
}
get _dataAtual(){
    return this._dataAtual;
}
set dataAtual(value){
    this._dataAtual = value;
}




}