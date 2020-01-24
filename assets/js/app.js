'use strict';

$(document).ready(() => {
    const $global = $('.main');

    $('.form').html(pageHTML);

    $('.forgot-pwd').on('click', e => {
        e.preventDefault();
        $('.form').html(pageForgotHTML)
    });

    $($global).on('click', e => {
        const target = e.target;
        if(target.classList.contains('btn-form')) {
            e.preventDefault();
            contactFormSubmission(); 
        };
    });

    $($global).on('blur', e => {
        const target = e.target;
        if(!target.contains('input')) return;
        if($('input').val() !== '') {
            target.css('border-bottom', '1px solid #00be98');
        }
    });
});

