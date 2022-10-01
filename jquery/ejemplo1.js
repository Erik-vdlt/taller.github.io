$(document).ready(function(){
    $("#oc").click(function(){
        $("#div1").hide(1000)
    });

    $("#mo").click(function(){
        $("#div1").show(1000)
    });

    $("#ou").click(function(){
        $("#div1").fadeOut(1000)
    });

    $("#in").click(function(){
        $("#div1").fadeIn(1000)
    });
});