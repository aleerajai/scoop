$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 1400) {
            $(".back_to_top").addClass("back_to_top_show");
            $(".back_to_top").removeClass("back_to_top_hidden");
        } else {
            // console.log("1400 sa chota");
            $(".back_to_top").addClass("back_to_top_hidden");
            $(".back_to_top").removeClass("back_to_top_show");
        }
    });


    $(".back_to_top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".icon-styling").on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('expanded')) {
            $(this).removeClass('expanded').parent().removeClass("toggleOpen");
            //$(this).find('img').attr("src", $(this).data('close-img'));
        } else {
            $(this).addClass('expanded').parent().addClass("toggleOpen");
            //$(this).find('img').attr("src", $(this).data('open-img'));
            //$(this).find('.expanded').addClass("TEST");
        }
    });

    //ON CLICK SCROLL DOWN
    $(".main_app_hero_banner_free_proposal_btn, .get-quote-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#footerContainer").offset().top
        }, 1000);
    });


    //ON CLICK SERVICES SCROLL DOWN
    $("#webservices").click(function() {
        $('html, body').animate({
            scrollTop: $("#webServicesSection").offset().top - 80
        }, 1000);
    });

    $("#googleSeo").click(function() {
        $('html, body').animate({
            scrollTop: $("#googleSeoSection").offset().top - 80
        }, 1000);
    });

    $("#googleAds").click(function() {
        $('html, body').animate({
            scrollTop: $("#googleAdsSection").offset().top - 80
        }, 1000);
    });

    $("#socialMediaMarketing").click(function() {
        $('html, body').animate({
            scrollTop: $("#socialMediaMarketingSection").offset().top - 80
        }, 1000);
    });

    $("#localSeo").click(function() {
        $('html, body').animate({
            scrollTop: $("#localSeoSection").offset().top - 80
        }, 1000);
    });

    //ON CLICK FOOTER INPUT GLOW CLASS ADD
    $(".main_footer_form_content input").on('click', function() {
        $(this).parent().parent().parent().addClass("glowForm");
    });

    $(".main_footer_form_content").on('keydown', 'input', function(e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode == 9) {
            e.preventDefault();
        }
    });

    $("#panelOne").on('click', function(e) {
        //$(this).parent().parent().parent().addClass("glowForm");
        e.preventDefault();
        //alert("WORK");
        if ($(this).hasClass('DefaultOpen')) {
            //alert("WOKR");
            $(this).removeClass('DefaultOpen');
            $(this).removeClass('toggleOpen');

        } else {
            $(this).addClass('DefaultOpen');
        }
    });

    var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    //HEREO BANNER EMAIL FORM
    $(".hero_banner_email_form .hero_banner_email_submit").on('click', function(e) {
        e.preventDefault();
        email = jQuery('#user_email').val();
        console.log(email);
        //return false;

        if ((email == '')) {
            alert("Input Fields Cannot be empty");
            return;
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert("Please enter a valid Email!");
            return;
        } else {
            // console.log("else");
            $.ajax({
                url: 'sendBannerFormEmail.php',
                method: 'POST',
                dataType: 'json',
                data: {
                    email: email,
                },
                success: function(response) {
                    console.log(response);
                    $('.hero_banner_email_form')[0].reset();
                    //$('.sent-notification').text("Message Sent Successfully.");
                    toastMixin.fire({
                        animation: true,
                        title: "We've received your email, we'll contact you shortly",
                        timer: 150000,
                    });
                }
            });

        }
    });

    //ON FOOTER SUBMIT FORM 
    $(".main_footer_form_col .form-submit-btn").on('click', function(e) {
        e.preventDefault();
        name = jQuery('#name').val();
        email = jQuery('#email').val();
        phone = jQuery('#phone').val();
        message = jQuery('#message').val();
        emailValidation = validateEmail(email);
        if ((name == "") || (email == "") || (phone == "") || (message == "")) {
            e.preventDefault();
            alert('Error! One or more fields are empty!');
            return;
        } else if (!emailValidation) {
            e.preventDefault();
            alert('Please enter a valid Email!');
            return;
        } else {
            $.ajax({
                url: 'sendFooterFormEmail.php',
                method: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                },
                success: function(response) {
                    // console.log(response);
                    $(".form-submit-btn").attr("disabled", "disabled");
                    $('.main_footer_form_content')[0].reset();
                    //$('.sent-notification').text("Message Sent Successfully.");
                    toastMixin.fire({
                        animation: true,
                        title: "Hooray! Your filled form has been submitted.",
                        timer: 5000,
                    });
                }
            });
        }
    });


    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }
});

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadeInAnimation");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});