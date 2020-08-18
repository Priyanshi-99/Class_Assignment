console.log("connected")
$("#all").on("click",function() {
    $(".cakeimg").show()
    $(".ccimg").show()
    $(".donimg").show()
    console.log("clicked cake");
});

$("#pn").on("click",function() {
    $(".cakeimg").show()
    $(".ccimg").hide()
    $(".donimg").hide()
    console.log("clicked cake");
});
$("#cc").on("click",function() {
    $(".ccimg").show()
    $(".cakeimg").hide()
    $(".donimg").hide()
    console.log("clicked cake");
});
$("#don").on("click",function() {
    $(".donimg").show()
    $(".ccimg").hide();
    $(".cakeimg").hide();
    console.log("clicked cake");
});
$("#search").on("click",function(){
   var searching = $("#inputbox").val();
   $("#inputbox").val("");
   console.log(searching)
   if(searching === "cake"){
    $(".cakeimg").show()
    $(".ccimg").hide()
    $(".donimg").hide()
   }
   else if(searching === "cupcakes" || searching === "muffins"){
    $(".ccimg").show()
    $(".cakeimg").hide()
    $(".donimg").hide()
    }
   else if(searching === "donuts" || searching === "donut"){
        $(".donimg").show();
        $(".ccimg").hide();
        $(".cakeimg").hide();       

    }
    
});
$(".cart").on('click',function(){
   $(this).html("Added to cart");
   $(this).css("background","green")

})
$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainnav");
        $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
    });
});