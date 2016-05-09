//Check off items with a click
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

//Click on the X to remove item
	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
		event.stopPropagation();
	});

	// body...
$("#sortable").sortable();({   
		placeholder: "ui-sortable-placeholder" 
    }); 

$("button").click(function(){
	$("#listitems").find(".completed").hide();
});





//Add a new item

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new item text from input
		var itemText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + itemText + "</li>")
	}
});

$(".fa-plus").click(function(event){
	$("input[type='text'").fadeToggle();
});


