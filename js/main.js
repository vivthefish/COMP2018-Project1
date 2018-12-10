$( document ).ready(function() {

    // Global Navigation Toggle Icon Change
    const navToggle = $('.navbar-toggler');
    const toggleIcon = $('.navbar-toggler-icon i');
    let menuOpen = false;

    navToggle.click(function() {
        if(!menuOpen) {
            // If menu is not already open, change icon to an 'X'
            toggleIcon.removeClass('fa-bars');
            toggleIcon.addClass('fa-times');
            menuOpen = true;
        } else {
            // else if menu is open, change icon back to bars
            toggleIcon.addClass('fa-bars');
            toggleIcon.removeClass('fa-times');
            menuOpen = false;
        }
    });


    // Click handler for nav links
    $('.nav-link').click(function(e) {
        $(this).toggleClass('active');
    })

    // Put a slight delay in page loading so that you can see the nav animation
    $(function(){
        $("a").click(function(e){
            e.preventDefault();
            var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 500);
        });
    });


});