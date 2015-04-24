function showRegisterForm() {
    $('.loginBox').fadeOut('fast', function () {
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register');
    });
    $('.error').removeClass('alert alert-danger').html('');
}
function showForgotForm() {
    $('.loginBox').fadeOut('fast', function () {
        $('.forgotBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.forgot-footer').fadeIn('fast');
        });
        $('.modal-title').html('Forgot Password');
    }); $('.error').removeClass('alert alert-danger').html('');
}
function showLoginForm() {
    debugger
    if ($('.forgotBox').css('display')==='none') {
        $('.registerBox').fadeOut('fast', function () {            
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast', function () {
                $('.login-footer').fadeIn('fast');
            });
            $('.modal-title').html('Login');
        });
    } else if ($('.registerBox').css('display') === 'none') {
        $('#loginModal .forgotBox').fadeOut('fast', function () {
            $('.loginBox').fadeIn('fast');
            $('.forgot-footer').fadeOut('fast', function () {
                $('.login-footer').fadeIn('fast');
            });
            $('.modal-title').html('Login');
        });
    }
    $('.error').removeClass('alert alert-danger').html('');
}
function openLoginModal() { showLoginForm(); setTimeout(function () { $('#loginModal').modal('show'); }, 230); }
function openRegisterModal() { showRegisterForm(); setTimeout(function () { $('#loginModal').modal('show'); }, 230); }
function loginAjax() { shakeModal(); }
function shakeModal() { $('#loginModal .modal-dialog').addClass('shake'); $('.error').addClass('alert alert-danger').html("Invalid email/password combination"); $('input[type="password"]').val(''); setTimeout(function () { $('#loginModal .modal-dialog').removeClass('shake'); }, 1000); }