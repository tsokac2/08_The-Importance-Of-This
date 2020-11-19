var xhr = new XMLHttpRequest();
var data;
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = this.responseText; // returns a string
        // console.log(JSON.parse(this.responseText)); // returns JSON to the console
    }
};


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

// $(document).ready(function(){
//      $(".box").on("click", function(){
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     });
// });


// $(".module-nav").on("click", function(){
//   let allModulesCardsSelector = ".card";
//   let thisModuleCardsSelector = "." + this.id + "-card";
  
//   $(allModulesCardsSelector).removeClass("card-highlight");
//   $(thisModuleCardsSelector).addClass("card-highlight");
  
// });


// $(document).ready(function(){
//     $(".box").on("click", function(){
//         /** 
//          * When we click on an elemnt that has a "box" class, this event will be fired
//         */
//        var classNames = $(this).attr("class").split(" ");
//        var boxClass = classNames[0];
//        var className = classNames[1];
//        if($(this).css("background-color") == "rgb(255, 0, 0)"){
//             //If this object is already red, turn it black
//             $("." + className).css("background-color", "#000");
//        } else {
//            // Else turn all elements with a box class black
//            // and then change the color of all elements
//            // with the same class name as the clicked element
//            // to red.
//            $("." + boxClass).css("background-color", "#000");
//            $("." + className).css("background-color", "red"); 
//        }
//     });
// });



