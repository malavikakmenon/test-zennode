$(document).ready(function(){

    // square
    $("#square-radio").click(function(){
        $(".shapes-input").hide();
        $(".square-area").show();
        $(".area-answer").html("");
        // $(".circle-area input, .triangle-area input, .rectangle-area input").val("");

        // alert("You entered p1!");
    })

     // triangle
     $("#triangle-radio").click(function(){
        $(".shapes-input").hide();
        $(".triangle-area").show();
        $(".area-answer").html("");
        // $(".circle-area input, .square-area input, .rectangle-area input").val("");
        

        // alert("You entered p1!");
    })
    // rectangle
    $("#rectangle-radio").click(function(){
        $(".shapes-input").hide();
        $(".rectangle-area").show();
        $(".area-answer").html("");
        // $(".circle-area input, .triangle-area input, .square-area input").val("");
      

        // alert("You entered p1!");
    })
    // circle
    $("#circle-radio").click(function(){
        $(".shapes-input").hide();
        $(".circle-area").show();
        $(".area-answer").html("");
        // $(".square-area input, .triangle-area input, .rectangle-area input").val("");


        // alert("You entered p1!");
    })


    // area calculations

    // circle area
    $(".circle-area button").click(function(e){
        e.preventDefault();
        var radius = $("#radius-input").val();
        // alert(radius);
        var circlearea =3.14*radius*radius;
        // alert(circlearea);
        var arealimit = $(".circle-area .area-limit").val();
        if(circlearea < arealimit){
            $(".area-answer").css("color","red") ;
          }
          else{
            $(".area-answer").css("color","green") ;
          }


        $(".area-answer").html("Area of Circle is "+circlearea);
        

    })

    // square area
    $(".square-area button").click(function(e){
        e.preventDefault();
        var length = $("#length-input").val();
        // alert(length);
        var squarearea = length*length;
        // alert(squarearea);
        var arealimit = $(".square-area .area-limit").val();

        if(squarearea < arealimit){
            $(".area-answer").css("color","red") ;
          }
          else{
            $(".area-answer").css("color","green") ;
          }
        
        $(".area-answer").html("Area of square is "+squarearea);


    })
     // triangle area
     $(".triangle-area button").click(function(e){
        e.preventDefault();
        var base = $("#base-input").val();
        var height = $("#height-input").val();
        // alert(length);
        var trianglearea = 0.5*base*height;
        // alert(trianglearea);
        var arealimit = $(".triangle-area .area-limit").val();

        if(trianglearea < arealimit){
            $(".area-answer").css("color","red") ;
          }
          else{
            $(".area-answer").css("color","green") ;
          }
        
        $(".area-answer").html("Area of triangle is "+trianglearea);

    })
    // rectangle area
    $(".rectangle-area button").click(function(e){
        e.preventDefault();
        var lengthr = $("#lengthr-input").val();
        var breadth = $("#breadth-input").val();
        // alert(length);
        var rectanglearea = lengthr*breadth;
        // alert(rectanglearea);
        var arealimit = $(".rectangle-area .area-limit").val();

        if(rectanglearea < arealimit){
            $(".area-answer").css("color","red") ;
          }
          else{
            $(".area-answer").css("color","green") ;
          }
        
        $(".area-answer").html("Area of rectangle is "+rectanglearea);

    })
    $(".parameter-wrapper button").click(function(e){
      e.preventDefault();
      $(".answer-wrapper").slideDown();

    })
    $(".form-check").click(function(){
      $(".answer-wrapper").slideUp();

    })




  
});