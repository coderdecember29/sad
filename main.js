x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start()
{
    document.getElementById("status").innerHTML = "System has been recognized as:"
recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTMLv = "the speech has ben recognized as:  " + content;
if(content == "Circle")
{
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);

    document.getElementById("status").innerHTMLv = "started drawing circle  ";
    draw_circle = "set";
}

if(content == "rectangle")
{
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);

    document.getElementById("status").innerHTMLv = "started drawing rectangle  ";
    draw_rectangle = "set";
}
}

function preload(){

}

function draw()
{
if(draw_circle == "set")
{
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTMLv = "circle is drawn  ";
draw_circle = "";
}


if(draw_rectangle == "set")
{
    
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTMLv = "rectangle is drawn  ";
draw_rectangle = "";
}
}

function setup()
{
    canvas = createCanvas(900, 600);


}



