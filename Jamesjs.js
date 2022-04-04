//question 1:
alert("Q1:" + " " + Date());
//question 2:
function question2(){
	var question2=document.getElementById('question2');
	question2.src="https://i.keaimeitu.com/uploads/allimg/20200207/2019273382.jpg";
}
//question 3:
function question3(){
	document.getElementById('question3').innerHTML='I am James';
}
//question 4:
function question4(){
	alert('WORNING!');
}
//question5:
function question5(){
	var question5=document.getElementById('question5');
	question5.style.backgroundColor='green';
	question5.style.fontFamily='Arial';
	question5.style.textAlign='center';
}
//question6:
function question6more(f) {
  return (5/9) * (f-32);
}

function question6() {
  document.getElementById("question6").innerHTML = question6more(20);
}
//question7:
	function question7(){
    var a=parseFloat(prompt('first number'));
    var b=parseFloat(prompt('last number'));
    document.getElementById('solution1').innerHTML=a+b;
}	

	function question7more(){
	document.getElementById('solution1').innerHTML=0;
}
//question8:
function question8(){
    var a=prompt('first name');
    var b=prompt('last name');
    document.getElementById('solution2').innerHTML="Nice to meet you"+" "+a+" "+b;
}	