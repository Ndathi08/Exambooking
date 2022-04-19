$(function(){
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Submit",
            next: "Next",
            previous: "Back"
        }
    });	

    $('#wizard').show(function(){
        $('#result').hide();
    });

    $('#wizard').submit(function(event){
        $('#wizard').hide();
        $('#result').show();
        var x=$('#wizard').serializeArray();
        var type= x[0].value;
        var doe= new Date(x[1].value);
        var day=doe.getDay();
        var location;

        if(type=="normal"){
            if(day==0){
                location="Hall 1";
            }else if(day==1){
                location="Hall 2";
            }else if(day==2){
                location="Hall 3";
            }else if(day==3){
                location="Hall 4";
            }else if(day==4){
                location="Hall 5";
            }else if(day==5){
                location="Hall 6";
            }else if(day==6){
                location="Hall 7";
            }
        }else if(type=="retake"){
            if(day==0){
                location="Hall 8";
            }else if(day==1){
                location="Hall 9";
            }else if(day==2){
                location="Hall 10";
            }else if(day==3){
                location="Hall 11";
            }else if(day==4){
                location="Hall 12";
            }else if(day==5){
                location="Hall 13";
            }else if(day==6){
                location="Hall 14";
            }
        }else{
			location= "wrong inputs";
		}

        $('#location').append(location);
        console.log(location);
        event.preventDefault();
      });
      
    $('[href="#finish"]').click(function() {
        $('#wizard').submit();
    });
    
    $('.wizard > .steps li a').click(function(){
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function(){
        $("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })

    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
    
})
    

/*	$("#finish").click(function(event){
    alert( "Handler for .submit() called." );
event.preventDefault();
});*/
    
        //var gender= document.getElementById('gender');
            //var dob= document.getElementById('dob');
                //console.log(gender);
                //console.log(dob);