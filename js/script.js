function insert(num){
    document.form.input.value+=num;
    console.log(num);
}
function equal(){
    let equals=document.form.input.value;
    if(equals){
        document.form.input.value=eval(equals);
    }
}
function clean(){
    document.form.input.value="";
}
function back(){
    let backs=document.form.input.value;
    if(backs){
        document.form.input.value=backs.substring(0,backs.length-1)
    }
}