$(document).ready(function(){
  
  var initialStyles = {
    location: {
      top: $('.location').css('top'),
      borderTopLeftRadius: $('.location').css('border-top-left-radius'),
      borderTopRightRadius: $('.location').css('border-top-right-radius'),
      height: $('.location').css('height'),
      zIndex: $('.location').css('z-index')
    },
    front: {
      borderBottomRightRadius: $('.front').css('border-bottom-right-radius'),
      borderBottomLeftRadius: $('.front').css('border-bottom-left-radius')
    },
    primaryButton: {
      borderBottomRightRadius: $('.primary-button').css('border-bottom-right-radius')
    },
    registerButton: {
      borderBottomLeftRadius: $('.register-button').css('border-bottom-left-radius')
    }
  };

  var animado = false;

  $('.primary-button').click(function() {
    if (!animado) {
      $('.location').animate({
        top: 0
      });
      $('.location').css('border-top-left-radius', '0px');
      $('.location').css('border-top-right-radius', '0px');
      $('.location').css('z-index', '1');
      $('.front').css('border-bottom-right-radius', '0px');
      $('.front').css('border-bottom-left-radius', '0px');
      $('.primary-button').css('border-bottom-right-radius', '0px');
      $('iframe').css('border-top-left-radius', '0px');
      $('iframe').css('border-top-right-radius', '0px');
      $('.register-button').css('border-bottom-left-radius', '0px');

      animado = true;
    } else {
      $('iframe').css('border-radius', '30px');
      $('.location').animate(initialStyles.location);
      $('.front').css(initialStyles.front);
      $('.primary-button').css(initialStyles.primaryButton);
      $('.register-button').css(initialStyles.registerButton);

      animado = false;
    }
  });
});
