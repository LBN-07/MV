const audio1=new Audio("sounds/vinu.mp3");
document.getElementById("vinu1").addEventListener("mouseover",vinu);
document.getElementById("vinu1").addEventListener("mouseout",kanna);
     function vinu(){
    audio1.play();
    }

function kanna(){
        audio1.pause();
        audio1.currentTime=0;
    }

const audio2=new Audio("sounds/vinu2(NTR).mp3");
audio2.loop=true;
document.getElementById("vinu2").addEventListener("mouseover",vinuu1);
document.getElementById("vinu2").addEventListener("mouseout",kanna1);
function vinuu1(){
    audio2.play();
}
function kanna1(){
    audio2.pause();
    audio2.currentTime=0;
}

const audio3=new Audio("sounds/tholi_prema.mp3");
audio3.loop=true;

document.getElementById("vinu3").addEventListener("mouseover",vinuu3);
document.getElementById("vinu3").addEventListener("mouseout",kanna3);
function vinuu3(){
    audio3.play();

}
function kanna3(){
    audio3.pause();
    audio3.currentTime=0;
}

const audio4=new Audio("sounds/surya.mp3");
audio4.loop=true;
document.getElementById("vinu4").addEventListener("mouseover",vinuu4);
document.getElementById("vinu4").addEventListener("mouseout",kanna4);
function vinuu4(){
    audio4.play();

}
function kanna4(){
    audio4.pause();
    audio4.currentTime=0;

}
function displayMessage() {
    const message = document.getElementById("loveMessage");
    message.style.display = "block";
}

/*$("button").on("click",function(){
    $("h1").toggle();
}); 
$("button").on("click",function(){
    $("h1").fadeOut();
});
$("button").on("click",function(){
    $("h1").fadeToggle();
});
$("button").on("click",function(){
    $("h1").slideToggle();
});
$("button").on("click",function(){
    $("h1").animate({opacity : 0.6});
});
$("button").on("click",function(){
   $("h1").slideUp().slideDown().animate({margin :"10%"}).animate({opacity:0.5}).animate({margin:"0%"}).animate({opacity:0.9});
}*/