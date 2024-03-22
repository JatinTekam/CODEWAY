gsap.to("#btn1,#btn2,#btn3,#btn4,#btn5,#btn6,#btnAdd,#btnResult,#btnMul,#btn7,#btn8,#btn9,#btn0,#btnDiv,#btnAllClear,#btnSub",{
    x:0,
    duration:0.6,
    stagger:0.05
})

let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');
let btn5=document.getElementById('btn5');
let btn6=document.getElementById('btn6');
let btn7=document.getElementById('btn7');
let btn8=document.getElementById('btn8');
let btn9=document.getElementById('btn9');
let btn0=document.getElementById('btn0');
let btnAdd=document.getElementById('btnAdd');
let btnMul=document.getElementById('btnMul');
let btnDiv=document.getElementById('btnDiv');
let btnClear=document.getElementById('btnAllClear');
let btnsub=document.getElementById('btnSub');
let btnresult=document.getElementById('btnResult');
let inputBox=document.getElementById('inputTxt');



let inputValue='';
btnClear.addEventListener('click',()=>{
    inputValue="";
    inputBox.value= inputValue;
 });
btn1.addEventListener('click',()=>{
    inputValue=inputValue+"1";
    inputBox.value=inputValue;
});
btn2.addEventListener('click',()=>{
    inputValue=inputValue+"2";
    inputBox.value=inputValue;
});
btn3.addEventListener('click',()=>{
    inputValue=inputValue+"3";
    inputBox.value=inputValue;
});
btn4.addEventListener('click',()=>{
    inputValue=inputValue+"4";
    inputBox.value=inputValue;
});
btn5.addEventListener('click',()=>{
    inputValue=inputValue+"5";
    inputBox.value=inputValue;
});
btn6.addEventListener('click',()=>{
    inputValue=inputValue+"6";
    inputBox.value=inputValue;
});
btn7.addEventListener('click',()=>{
    inputValue=inputValue+"7";
    inputBox.value=inputValue;
});
btn8.addEventListener('click',()=>{
    inputValue=inputValue+"8";
    inputBox.value=inputValue;
});
btn9.addEventListener('click',()=>{
    inputValue=inputValue+"9";
    inputBox.value=inputValue;
});
btn0.addEventListener('click',()=>{
    inputValue=inputValue+"0";
    inputBox.value=inputValue;
});
btnAdd.addEventListener('click',()=>{
    inputValue=inputValue+"+";
    inputBox.value=inputValue;
});
btnDiv.addEventListener('click',()=>{
    inputValue=inputValue+"/";
    inputBox.value=inputValue;
});
btnMul.addEventListener('click',()=>{
    inputValue=inputValue+"*";
    inputBox.value=inputValue;
});
btnsub.addEventListener('click',()=>{
    inputValue=inputValue+"-";
    inputBox.value=inputValue;
});
btnresult.addEventListener('click',()=>{
    if(inputBox.value===""){
    inputBox.value="Please Enter The Number";
    inputBox.style.fontSize="15px";
}else{

    let value=eval(inputValue);
    inputValue=value;
      inputBox.value=inputValue;
}
});
