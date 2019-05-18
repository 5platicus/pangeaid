/**
 * functions for fingerprint
 * in p_fingerprint comment how to enable it for android hook
*/
function fingerprint(sResult) {
    if (sResult) {
        $('#paymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
    } else {
        $('#paymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
    }
}
function p_fingerprint() {
    // p_fingerprint() => window.location='p_fingerprint'
    fingerprint(true);
}

/**
 * functions for face recognition
 * in p_fingerprint comment how to enable it for android hook
*/
function facerecognition(sResult) {
    if (sResult) {
        $('#paymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
    } else {
        $('#paymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
    }
}
function p_facerecognition() {
    // p_facerecognition() => window.location='p_facerecognition'
    facerecognition(true);
}

function addcard(sResult) {
    if (sResult) {
        let length = $('#sendPaymentMethodCategories').children().length;
        $("<li class='creditCard' id='sendRecipientInformationFormEmpty" + length + "' href='#sendRecipientInformation'><div><i class='fal fa-credit-card'></i></i><h3>Card number</h3></div><h4>4242 4242 424242 4242</h4></li>").insertBefore('#sendAddCard');
        $("#sendRecipientInformationFormEmpty" + length).animatedModal();
    } else {
        // do action
    }
}
function p_addcard() {
    // p_addcard() => window.location='p_addcard'
    addcard(true);
}


function scanandpay(sResult) {
    if (sResult) {
        pasteScanAndPay()
    }
}
function p_scanandpay() {
    scanandpay(true);
}