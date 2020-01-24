'use strict';

function renderPage() {
  return "\n        <div class=\"text\">\n            <h2>Welcome back</h2>\n            <p>Sign in to contine to IO Technologies.</p>\n        </div>\n        <label for=\"\">\n            <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Your email\" required>\n            <div class=\"correct-email hide\">\n            <div class=\"idea\"></div>\n                <span>Oops! You entered an invalid email</span>\n            </div>\n        </label>\n        <input type=\"password\" name=\"pwd\" id=\"pwd\" placeholder=\"Password\" autocomplete=\"current-password\" required>\n        <button type=\"button\" class=\"log-in btn-form\">\n            LOG IN<img class=\"arrow\" src=\"assets/images/icon/right-arrow.png\"alt=\"arrow\">\n        </button>\n        <a href=\"#\" class=\"forgot-pwd\">Forgot your password?<span>Reset</span></a>\n    ";
}

;

function pageSuccessfulAuthorization() {
  return "\n        <div class=\"text\">\n            <h2>Hi, Nikita</h2>\n            <p>Please choose your project.</p>\n        </div>\n        <input type=\"text\" name=\"flirchi\" id=\"flirchi\" placeholder=\"Flirchi\">\n        <input type=\"text\" name=\"io\" id=\"io\" placeholder=\"io\">\n        <input type=\"text\" name=\"company_name\" id=\"companyName\" placeholder=\"company name\">\n        <input type=\"url\" name=\"website\" id=\"website\" placeholder=\"facenews.com\">\n    ";
}

function forgotPwd() {
  return "\n        <a href=\"index.html\" class=\"back-to-page\">\n            <img src=\"assets/images/icon/left-arrow.png\" alt=\"arrow\" class=\"back-to-page-arrow\"/>\n        </a>\n        <div class=\"text\">\n            <h2>Forgot password?</h2>\n        </div>\n        <label for=\"\">\n            <input type=\"email\" name=\"email\" id=\"forgetEmail\" placeholder=\"Enter your email\" required>\n            <div class=\"correct-email hide\">\n            <div class=\"idea\"></div>\n                <span>Oops! You entered an invalid email</span>\n            </div>\n        </label>\n        <button type=\"button\" class=\"send-instruction btn-form\">\n            Send Me Instructions\n        </button>\n    ";
}

;

var contactFormSubmission = function contactFormSubmission(e) {
  var inputEmail = $('input[type="email"]');
  var inputPwd = $('input[type="password"]');

  var getValue = function getValue(elem) {
    return elem.val();
  };

  var emailString = getValue(inputEmail);
  var pwdString = getValue(inputPwd);
  var isCorrectValue = {
    email: new RegExp(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/, 'i').test(emailString),
    password: new RegExp(/^[0-9a-z-]{8,}$/, 'i').test(pwdString)
  };

  if (isCorrectValue.email && isCorrectValue.password) {
    $('.correct-email').addClass('hide');
    $('.form').html(pageProgect);
    $('input').css('text-align', 'center');
  }

  for (var value in isCorrectValue) {
    if (!isCorrectValue[value]) {
      $('.correct-email').removeClass('hide');
      $('input').css('border-bottom', '1px solid red');
      $('input').addClass('invalid');
    }

    ;
  }

  ;
};

var pageHTML = renderPage();
var pageForgotHTML = forgotPwd();
var pageProgect = pageSuccessfulAuthorization();
'use strict';

$(document).ready(function () {
  var $global = $('.main');
  $('.form').html(pageHTML);
  $('.forgot-pwd').on('click', function (e) {
    e.preventDefault();
    $('.form').html(pageForgotHTML);
  });
  $($global).on('click', function (e) {
    var target = e.target;

    if (target.classList.contains('btn-form')) {
      e.preventDefault();
      contactFormSubmission();
    }

    ;
  });
  $($global).on('blur', function (e) {
    var target = e.target;
    if (!target.contains('input')) return;

    if ($('input').val() !== '') {
      target.css('border-bottom', '1px solid #00be98');
    }
  });
});