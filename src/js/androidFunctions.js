/**
 * functions for fingerprint
 * in p_fingerprint comment how to enable it for android hook
*/
function fingerprint(sResult) {
    let button = $('#paymentValidationFormEmpty');
    if (sResult) {
        button.removeClass('falseAction');
        button.removeClass('disabledAction');
        button.addClass('enabledAction');
    } else {
        button.removeClass('enabledAction');
        button.addClass('disabledAction');
        button.addClass('falseAction');
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
    let button = $('#paymentValidationFormEmpty');
    if (sResult) {
        button.removeClass('falseAction');
        button.removeClass('disabledAction');
        button.addClass('enabledAction');
    } else {
        button.removeCalass('enabledAction');
        button.addClass('falseAction');
    }
}
function p_facerecognition() {
    // p_facerecognition() => window.location='p_facerecognition'
    faceRecognition(true);
}

function addcard(sResult) {
    alert("addcard result:" + sResult);
}

function scanandpay(sResult) {
    alert("scanandpay result:" + sResult);
}