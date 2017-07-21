

//Accordion

$('.uk-accordion-title').click(function() {
    $(this).find("i").toggleClass('fa-angle-down');
    $(this).find("i").toggleClass('fa-angle-up');
});
