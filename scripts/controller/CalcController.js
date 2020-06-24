class CalcController{

constructor(){
    this._displayCalc = "0";
    this._currentDate;
    this.initialze();
}
initialze(){
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");
    displayCalcEl.innerHTML = "12345";
    dateEl.innerHTML = "01/02/2020";
    timeEl.innerHTML = "00:00";
}

get displayCalc(){
    return this._displayCalc;
}

set displayCalc(value){
    this._displayCalc = value;
}
get currentDate(){
    return this._currentDate;
}
set currentDate(value){
    this._currentDate = value;
}




}