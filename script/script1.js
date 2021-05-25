window.onload=function()
{
var x= new Array();
if(window.location.href.split('/').pop()=="booking.html"){
for(var i=1;i<=36;i++){
x.push(document.getElementById(i.toString()));
x[i-1].addEventListener("click", func);  
}
}
if(window.location.href.split('/').pop()=="payment.html" || window.location.href.split('/').pop()=="payment.html#"){
document.getElementById('seatnum').innerHTML=localStorage.getItem("count");
document.getElementById('cost').innerHTML=120;
document.getElementById('pay').innerHTML= localStorage.getItem("count")*120;
}
if(window.location.href.split('/').pop()=="success_book.html"){
document.getElementById('to').innerHTML=localStorage.getItem('destination');
document.getElementById('summ_paid').innerHTML=localStorage.getItem('count')*120;
document.getElementById('summ_date').innerHTML=localStorage.getItem("date");
document.getElementById('summ_name').innerHTML=localStorage.getItem("name");
document.getElementById('summ_age').innerHTML=localStorage.getItem("age");
document.getElementById('summ_gender').innerHTML=localStorage.getItem("gender");
document.getElementById('from').innerHTML=localStorage.getItem('source');


}
}
var selected=new Array();
var j=0;
function func(){
if(this.className !== "seat_occupied"){
this.style.backgroundColor="grey";
window.selected[window.j++]=this.id;
}
}
function validate(){
if(document.getElementById('name').value==""){
alert('Please fill your name');
return false;
}
if(document.getElementById('age').value==""){
alert('Please fill your age');
return false;
}
var flag=0;
var option;
var ele = document.getElementsByName('gender');             
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                 flag=1;
                 option=i;
}

}
if(flag==0){
alert("please choose gender");   
return false; 
}      
if(document.getElementById('date').value!="")
{
givenDate=new Date(document.getElementById('date').value);
todayDate=new Date();
if(givenDate<todayDate){
alert("Please Enter valid date");
return false;
}
}
else{
alert("Please enter date of travel");
return false;
}
if(document.getElementById('source').value=="" || document.getElementById('destination').value==""){
alert("select From and To");
return false;
}
else{
if(document.getElementById('source').value == document.getElementById('destination').value){
alert("Both Source and Destination are same.");
return false;
}
}
if(window.j==0){
alert("select seat");
return false;
}

localStorage.setItem("name", document.getElementById('name').value);
localStorage.setItem("age", document.getElementById('age').value);
localStorage.setItem("gender", ele[option].value);
localStorage.setItem("date", document.getElementById('date').value);
localStorage.setItem("source", document.getElementById('source').value);
localStorage.setItem("destination", document.getElementById('destination').value);
localStorage.setItem("count", window.j);
window.open('payment.html');

}

function credit(){
document.getElementById('credits').style.display="none";
document.getElementById('debits').style.display="none";
document.getElementById('gpay').style.display="none";
document.getElementById('upi').style.display="none";
document.getElementById('credit_card').style.backgroundColor="#f1f1f1";
document.getElementById('debit_card').style.backgroundColor="#f1f1f1";
document.getElementById('Gpay').style.backgroundColor="#f1f1f1";
document.getElementById('Upi').style.backgroundColor="#f1f1f1";
document.getElementById('credits').style.display="block";
document.getElementById('credit_card').style.backgroundColor="white";
}
function debit(){
document.getElementById('credits').style.display="none";
document.getElementById('debits').style.display="none";
document.getElementById('gpay').style.display="none";
document.getElementById('upi').style.display="none";
document.getElementById('credit_card').style.backgroundColor="#f1f1f1";
document.getElementById('debit_card').style.backgroundColor="#f1f1f1";
document.getElementById('Gpay').style.backgroundColor="#f1f1f1";
document.getElementById('Upi').style.backgroundColor="#f1f1f1";
document.getElementById('debits').style.display="block";
document.getElementById('debit_card').style.backgroundColor="white";
}
function gpayf(){
document.getElementById('credits').style.display="none";
document.getElementById('debits').style.display="none";
document.getElementById('gpay').style.display="none";
document.getElementById('upi').style.display="none";
document.getElementById('credit_card').style.backgroundColor="#f1f1f1";
document.getElementById('debit_card').style.backgroundColor="#f1f1f1";
document.getElementById('Gpay').style.backgroundColor="#f1f1f1";
document.getElementById('Upi').style.backgroundColor="#f1f1f1";
document.getElementById('gpay').style.display="block";
document.getElementById('Gpay').style.backgroundColor="white";
}
function upif(){
document.getElementById('credits').style.display="none";
document.getElementById('debits').style.display="none";
document.getElementById('gpay').style.display="none";
document.getElementById('upi').style.display="none";
document.getElementById('credit_card').style.backgroundColor="#f1f1f1";
document.getElementById('debit_card').style.backgroundColor="#f1f1f1";
document.getElementById('Gpay').style.backgroundColor="#f1f1f1";
document.getElementById('Upi').style.backgroundColor="#f1f1f1";
document.getElementById('upi').style.display="block";
document.getElementById('Upi').style.backgroundColor="white";
}
function credit_validate(){
var credit_num=document.getElementsByName('credit_num');
var credit_expiry=document.getElementsByName('credit_expiry');
var credit_cvv=document.getElementsByName('credit_cvv');
if(credit_num[0].value==""){
alert("enter card number");
return false;
}
if(credit_expiry[0].value==""){
alert("enter card expiry date");
return false;
}
if(credit_cvv[0].value==""){
alert("Enter card CVV");
return false;
}
window.open('success_book.html');
}
function debit_validate(){
var debit_num=document.getElementsByName('debit_num');
var debit_expiry=document.getElementsByName('debit_expiry');
var debit_cvv=document.getElementsByName('debit_cvv');
if(debit_num[0].value==""){
alert("enter card number");
return false;
}
if(debit_expiry[0].value==""){
alert("enter card expiry date");
return false;
}
if(debit_cvv[0].value==""){
alert("Enter card CVV");
return false;
}
window.open('success_book.html');
}
function gpay_validate(){
var gpayid=document.getElementsByName('gpayid');
if(gpayid[0].value==""){
alert("Enter your gpay id");
return false;
}
window.open('success_book.html');
}
function upi_validate(){
var upiid=document.getElementsByName('upiid');
if(upiid[0].value==""){
alert("Enter your upi id");
return false;
}
window.open('success_book.html');
}


