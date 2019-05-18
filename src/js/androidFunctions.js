/**
 * functions for fingerprint
 * in p_fingerprint - uncomment line and comment the next line to enable hooks
*/
let currentScreen = '';
function fingerprint(sResult) {
    if (sResult) {
        if(currentScreen === 'govPayment') {
            $('#paymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'walletSend') {
            $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'walletPay') {
            $('#payPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'docsAuthentication') {
            $('#displayDocQREmptyForm').attr('class', 'containerAction enabledAction');
        }
    } else {
        if (currentScreen === 'govPayment') {
            $('#paymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'walletSend') {
            $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'walletPay') {
            $('#payPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'docsAuthentication') {
            $('#displayDocQREmptyForm').attr('class', 'containerAction falseAction');
        }
    }
}
function p_fingerprint(current) {
    currentScreen = current;
    // window.location='p_fingerprint'
    fingerprint(true);
}

/**
 * functions for face recognition
 * in p_facerecognition - uncomment line and comment the next line to enable hooks
*/
function facerecognition(sResult) {
    if (sResult) {
        if(currentScreen === 'govPayment') {
            $('#paymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'walletSend') {
            $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'walletPay') {
            $('#payPaymentValidationFormEmpty').attr('class', 'containerAction enabledAction');
        } else if (currentScreen === 'docsAuthentication') {
            $('#displayDocQREmptyForm').attr('class', 'containerAction enabledAction');
        }
    } else {
        if (currentScreen === 'govPayment') {
            $('#paymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'walletSend') {
            $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'walletPay') {
            $('#payPaymentValidationFormEmpty').attr('class', 'containerAction falseAction');
        } else if (currentScreen === 'docsAuthentication') {
            $('#displayDocQREmptyForm').attr('class', 'containerAction falseAction');
        }
    }
}
function p_facerecognition(current) {
    currentScreen = current;
    // window.location='p_facerecognition'
    facerecognition(true);
}

function addcard(sResult) {
    if (sResult) {
        let length = $('#sendPaymentMethodCategories').children().length;
        $("<li class='creditCard' id='sendRecipientInformationFormEmpty" + length + "' href='#sendRecipientInformation'><div><i class='fal fa-credit-card'></i></i><h3>Card number</h3></div><h4>4242 4242 424242 4242</h4></li>").insertBefore('#sendAddCard');
        $("#sendRecipientInformationFormEmpty" + length).animatedModal();
    }
}
function p_addcard() {
    window.location='p_addcard'
    // addcard(true);
}


function scanandpay(sResult) {
    if (sResult) {
        pasteScanAndPay()
    }
}
function p_scanandpay() {
    window.location='p_addcard'
    // scanandpay(true);
}
