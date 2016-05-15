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

function initIcontoggle() {
    $(".icontoggle_input").change(function() {
        $(this).parent().toggleClass("is-checked");
    });

    updateIcontoggle();
}

function initTogglebutton() {
    /*seleção exclusiva*/
    $(".togglebutton_radio-input").on("change", function() {
        console.log('toggle button changed');
        if ($(this).prop("checked")) {
            var name = $(this).attr("name");
            $("input[name='" + name + "']").parent().removeClass("is-checked");
            $(this).parent().addClass("is-checked");
        }
    });

    /*seleção multipla*/
    $(".togglebutton_checkbox-input").change(function() {
        $(this).parent().toggleClass("is-checked");
    });

    updateTogglebutton();
}

function initDropdown() {
    $(".dropdown_options li").click(function() {
        $(this).parent().prev().html($(this).html());
        $(this).parent().find("li").each(function() {
            $(this).removeClass("is-active");
        });
        $(this).addClass("is-active");
        $(this).parent().next().attr("value", $(this).data("value"));
    });

    updateDropdown();
}
function initTextfield() {
    $(".textfield_input").keydown(function() {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });
    $(".textfield_input").keyup(function() {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });

    $(".textfield_input").focus(function() {
        $(this).parent().addClass("is-focused");
    });
    $(".textfield_input").blur(function() {
        $(this).parent().removeClass("is-focused");
    });
    
    /*>>falta verificar required, disabled*/
    updateTextfield();
}

function updateCheckbox() {
    $(".checkbox_input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
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
        } else {
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
    $(".radiobutton_input").parent().removeClass("is-checked");
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

function updateIcontoggle() {
    $(".icontoggle_input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateTogglebutton() {
    /*seleção exclusiva*/
    $(".togglebutton_radio-input").parent().removeClass("is-checked");
    $(".togglebutton_radio-input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        }
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });

    /*seleção multipla*/
    $(".togglebutton_checkbox-input").each(function() {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("is-checked");
        } else {
            $(this).parent().removeClass("is-checked");
        }

        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });
}

function updateDropdown() {
    $(".dropdown .dropdown_options li").each(function() {
        if ($(this).hasClass("is-active")) {
            $(this).parent().prev().html($(this).html());
            $(this).parent().next().attr("value", $(this).data("value"));
        } else {
            $(this).parent().removeClass("is-checked");
        }
    });
}
function updateTextfield() {
    $(".textfield_input").each(function() {
        if ($(this).val() == "") {
            $(this).parent().removeClass("is-dirty");
        } else {
            $(this).parent().addClass("is-dirty");
        }
    });
    
     $(".textfield_input").each(function() {
        if ($(this).prop("disabled")) {
            $(this).parent().addClass("is-disabled");
        } else {
            $(this).parent().removeClass("is-disabled");
        }
    });

}