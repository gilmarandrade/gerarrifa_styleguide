function initCheckbox() {
    $(".checkbox_input").change(function() {
        $(this).parent().toggleClass("is-checked");
    });
    
    updateCheckbox();
}

function initSwitch() {
    $(".switch_input").change(function() {
        $(this).parent().toggleClass("is-checked");
    });
    
    updateSwitch();
}

function initRadiobutton() {
    $(".radiobutton_input").on("change", function() {
        console.log('radiobutton changed');
        if ($(this).prop("checked")) {
            var name = $(this).attr("name");
            $("input[name='" + name + "']").parent().removeClass("is-checked");
            $(this).parent().addClass("is-checked");
        }
    });
    
    updateRadiobutton();
}

function updateCheckbox() {
    $(".checkbox_input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }else{
            $(this).parent().removeClass("is-checked");
        }
        
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateSwitch() {
    $(".switch_input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }else{
            $(this).parent().removeClass("is-checked");
        }
        
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateRadiobutton() {
    $("input[type='radio']").parent().removeClass("is-checked");
    $(".radiobutton_input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}