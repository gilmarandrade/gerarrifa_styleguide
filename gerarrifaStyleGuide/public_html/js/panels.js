function initPanels() {
    resizeLayout();
    $(window).resize(resizeLayout);

    $("#nav_button").click(toggleNav);
    $("#nav_curtain").click(closeNav);

    $("#btAside").click(toggleAside);
    $("#btCloseAside").click(closeAside);
}

function resizeLayout() {
    if ($(window).width() >= 1280) {
    } else {}
}

function toggleNav() {
    $("body").toggleClass("nav--opened");
    $("body").toggleClass("nav--closed");
}
function closeNav() {
    $("body").removeClass("nav--opened");
    $("body").addClass("nav--closed");
}
function openNav() {
    $("body").addClass("nav--opened");
    $("body").removeClass("nav--closed");
}

function toggleAside() {
    $("body").toggleClass("aside--opened");
}
function openAside() {
    $("body").addClass("aside--opened");
}
function closeAside() {
    $("body").removeClass("aside--opened");
}