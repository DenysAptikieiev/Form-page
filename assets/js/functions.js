'use strict';

function renderPage() {
    return (`
        <div class="text">
            <h2>Welcome back</h2>
            <p>Sign in to contine to IO Technologies.</p>
        </div>
        <label for="">
            <input type="email" name="email" id="email" placeholder="Your email" required>
            <div class="correct-email hide">
            <div class="idea"></div>
                <span>Oops! You entered an invalid email</span>
            </div>
        </label>
        <input type="password" name="pwd" id="pwd" placeholder="Password" autocomplete="current-password" required>
        <button type="button" class="log-in btn-form">
            LOG IN<img class="arrow" src="assets/images/icon/right-arrow.png"alt="arrow">
        </button>
        <a href="#" class="forgot-pwd">Forgot your password?<span>Reset</span></a>
    `);
};

function pageSuccessfulAuthorization() {
    return (`
        <div class="text">
            <h2>Hi, Nikita</h2>
            <p>Please choose your project.</p>
        </div>
        <input type="text" name="flirchi" id="flirchi" placeholder="Flirchi">
        <input type="text" name="io" id="io" placeholder="io">
        <input type="text" name="company_name" id="companyName" placeholder="company name">
        <input type="url" name="website" id="website" placeholder="facenews.com">
    `)
}

function forgotPwd() {
    return (`
        <a href="index.html" class="back-to-page">
            <img src="assets/images/icon/left-arrow.png" alt="arrow" class="back-to-page-arrow"/>
        </a>
        <div class="text">
            <h2>Forgot password?</h2>
        </div>
        <label for="">
            <input type="email" name="email" id="forgetEmail" placeholder="Enter your email" required>
            <div class="correct-email hide">
            <div class="idea"></div>
                <span>Oops! You entered an invalid email</span>
            </div>
        </label>
        <button type="button" class="send-instruction btn-form">
            Send Me Instructions
        </button>
    `);
};

const contactFormSubmission = e => {
    const inputEmail = $('input[type="email"]');
    const inputPwd = $('input[type="password"]');

    const getValue = elem => elem.val();

    const emailString = getValue(inputEmail);
    const pwdString = getValue(inputPwd);


    const isCorrectValue = {
        email: new RegExp(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/, 'i').test(emailString),
        password: new RegExp(/^[0-9a-z-]{8,}$/, 'i').test(pwdString)
    };

    if(isCorrectValue.email && isCorrectValue.password) {
        $('.correct-email').addClass('hide');
        $('.form').html(pageProgect);
        $('input').css('text-align', 'center');
    }

    for (let value in isCorrectValue) {
        if (!isCorrectValue[value]) {
            $('.correct-email').removeClass('hide');
            $('input').css('border-bottom', '1px solid red');
            $('input').addClass('invalid');
        };
    };
};

const pageHTML = renderPage();
const pageForgotHTML = forgotPwd();
const pageProgect = pageSuccessfulAuthorization();
