// $(document).ready(function(){

//     $("p").click(function(){
//     $(this).slideToggle("slow");
//     });

//     $("button").mouseenter(function(){
//         $(this).removeClass("makeRed").addClass("makeBlue");
//     });

//     $("button").mouseleave(function(){
//         $(this).removeClass("makeBlue").addClass("makeRed");
//     });
// });

$(document).ready(function(){
     $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });

});



