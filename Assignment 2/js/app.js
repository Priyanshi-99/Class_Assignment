console.log("connected");

function showCake(){
    $(".cakeimg").parent().addClass("show");
    $(".ccimg").parent().removeClass("show");
    $(".donimg").parent().removeClass("show");
}

function showCupCake(){
    $(".ccimg").parent().addClass("show");
    $(".cakeimg").parent().removeClass("show");
    $(".donimg").parent().removeClass("show");
}

function showDonut(){
    $(".donimg").parent().addClass("show");
    $(".ccimg").parent().removeClass("show");
    $(".cakeimg").parent().removeClass("show");
}

$("#all").on("click",function() {
    $(".cakeimg").parent().addClass("show");
    $(".ccimg").parent().addClass("show");
    $(".donimg").parent().addClass("show");
});

$("#cake").on("click",function() {
    showCake();
});

$("#cupcake").on("click",function() {
    showCupCake();
});

$("#donut").on("click",function() {
    showDonut();
});

$("#search").on("click",function(){
    var sweet = $("#inputbox").val();
    sweet = sweet.toLowerCase();
    $("#inputbox").val("");
    if(sweet === 'cake') {
        showCake();
    }
    else if(sweet==='cupcake'||sweet==='cupcakes'||sweet==='muffin'||sweet==='muffins') {
        showCupCake();
    }
    else if(sweet==='donuts'||sweet==='donut') {
        showDonut();
    }
});

$(".cart").on('click',function(){
    $(this).html("Added to cart");
    $(this).css("background","green");
});

$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainnav");
        $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
    });
});