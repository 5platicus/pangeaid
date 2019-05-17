/**
 * functions for fingerprint
 * in p_fingerprint comment how to enable it for android hook
*/
function fingerprint(sResult) {
    let button = $('#paymentValidationEmptyForm');
    if (sResult) {
        button.removeClass('falseAction');
        button.removeClass('disabledAction');
        button.addClass('enabledAction');
    } else {
        button.removeCalass('enabledAction');
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
function faceRecognition(sResult) {
    let button = $('#paymentValidationEmptyForm');
    if (sResult) {
        button.removeClass('falseAction');
        button.removeClass('disabledAction');
        button.addClass('enabledAction');
    } else {
        button.removeCalass('enabledAction');
        button.addClass('falseAction');
    }
}
function p_faceRecognition() {
    // p_faceRecognition() => window.location='p_faceRecognition'
    faceRecognition(true);
}

function addcard(sResult) {
    alert("addcard result:" + sResult);
}

function scanandpay(sResult) {
    alert("scanandpay result:" + sResult);
}


/**
 * MODAL ROUTES INITIALIZATION
*/
$("#govFormEmpty").animatedModal();
$("#travelCategoryFormEmpty").animatedModal();
$("#visaApplicationFormEmpty").animatedModal();
$("#prePaymentEmptyForm").animatedModal();
$("#paymentValidationEmptyForm").animatedModal();

$("#docsFormEmpty").animatedModal();
$("#walletFormEmpty").animatedModal();

/**
 * TAB NAVIGATION ROUTES WITH OPTIONS
*/
let availableTabs = {
    govLink: {
        id: '#gov',
        title: 'MY GOV',
        icon: 'fa-landmark',
    },
    docsLink: {
        id: '#docs',
        title: 'MY DOCS',
        icon: 'fa-id-card',
    },
    walletLink: {
        id: '#wallet',
        title: 'MY WALLET',
        icon: 'fa-wallet',
    },
};


/**
 * CLICK ACTION FOR TAB NAVIGATION
*/
$('.tabLink').on('click', function() {
    let tab = $(this).data("id");
    $(".tabLink").removeClass("current");
    $(this).addClass("current");
    
    $.each(availableTabs, function(key, val) {
        if (val.id === tab) {
            $(val.id).show();
            $(val.id).css('display', 'inline-flex');
            $('#screenTitle').text(val.title);
            $("#screenIcon").attr('class', 'fa ' + val.icon);
        } else {
            $(val.id).hide();
        }
    });
});

/**
 * PASTING DUMMY DATA FOR PROFILE
*/
$('#pasteProfile').on('click', function() {
    let variables = {
        surname: 'Miora',
        firstName: 'Rakotomalala',
        birthDate: '1980-05-18',
        birthPlace: 'Madagascar',
        nationality: 'Malagasy',
        passportNumber: '07D703249',
        dateIssued: '2013-07-15',
        placeIssued: 'Antananarivo',
        validUntil: '2023-05-18',
        issuingAuthority: 'Madagascar',
    };
    $.each(variables, function(key, val) {
        $('[data-profile="' + key + '"]').val(val);
        $('[data-profile="' + key + '"]').css('border', '1px solid #6980b5');
    })
    $('[data-profile="profilePic"]').text('');
    $('[data-profile="profilePic"]').css('background', 'url(../assets/images/profilePic.png)');
    $('[data-profile="profilePic"]').css('background-size', 'cover');
})

/*
 * signature pad
 */
let canvas = document.getElementById("signature");
let signaturePad = new SignaturePad(canvas);
$('#prePaymentEmptyForm').on('click', function() {
    let data = signaturePad.toData();
    signaturePad.clear();
    console.log(data);
});
