/*
function drawDiagonal()
{
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');


	//begin path name
	context.beginPath();
	context.moveTo(100,100);
	context.lineTo(500,300);
	context.stroke();
}




*/

function drawDiagonal()
{
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');

	//context.save();
	//context.translate(170,200);
	//begin pathname


	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(200,200);
	context.lineTo(200,460);
	context.lineTo(400,400);
	context.stroke();
	context.save();
	context.restore();
}





//context.moveTo(300,300);
//context.lineTo(600,600);
//context.stroke();


window.addEventListener('load',drawDiagonal,false);


