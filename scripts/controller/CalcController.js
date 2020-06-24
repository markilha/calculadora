class CalcController{

constructor(){
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");

    this._displayCalc = "0";
    this._currentDate;
    this.initialze();
}
initialze(){
    this.setDisplayDateTime();
    setInterval(()=>{
        this.setDisplayDateTime();
    },1000 );


}

setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    this.displaytime= this.currentDate.toLocaleTimeString(this._locale)


}
get displaytime(){
return this._timeEl.innerHTML;
}
set displaytime(value){
    return this._timeEl.innerHTML = value;
    }
get displayDate(){
    return this._dateEl.innerHTML;
}

set displayDate(value){
    return this._dateEl.innerHTML = value;
}

get displayCalc(){
    return this._displayCalc;
}

set displayCalc(value){
    this._displayCalc = value;
}
get currentDate(){
    return new Date();
}
set currentDate(value){
    this._currentDate = value;
}




}