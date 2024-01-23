(function ($) {
    $(function () {

        //  open and close nav 
        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    });
})(jQuery); 