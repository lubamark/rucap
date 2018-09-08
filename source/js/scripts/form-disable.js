$(document).ready(function () {
    var $form = $('.j-form');

    $form.each(function () {
        var $requiredCheckbox = $(this).find('.j-required-checkbox');
        var $submitForm = $(this).find('.j-submit');
        if( $requiredCheckbox.attr("checked") !== 'checked') {
            $submitForm.addClass('_disabled');
            $submitForm.prop('disabled', true);
            $requiredCheckbox.on('change', function () {
                $submitForm.toggleClass('_disabled');
                $submitForm.prop('disabled', function (i, val) {
                    return !val;
                });
            });
        }
    });
});