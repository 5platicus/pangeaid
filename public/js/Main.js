$( document ).ready(function() {
    initializeModals();
    tabNavigation();
    $('#signature').signature();

    $('#pasteProfile').on('click', function() {
        pastDummyProfile();
    })

    $('#prePaymentFormEmpty').on('click', function() {
        saveSignature();
    })
    $('#paymentValidationFormEmpty').on('click', function() {
        loadSignature();
    })
    
    /**
     * RESETING SCREENS ON BACK PRESS
    */
    $('.back-visaApplication').on('click', function() {
        resetProfile();
    })
    $('.back-prePayment').on('click', function() {
        resetIdentityValidation();
    })
    $('.back-paymentValidation').on('click', function() {
        resetSignature();
    })
});

/**
 * MODAL ROUTES INITIALIZATION
*/
function initializeModals() {
    let options = {
        beforeClose: function beforeModalClose() {
            return swal({
                title: "Are you sure?",
                text: "Are you sure you want to go the root screen.",
                buttons: true,
                dangerMode: true
            });
        }
    }

    $("#govFormEmpty").animatedModal();
    $("#travelCategoryFormEmpty").animatedModal(options);
    $("#visaApplicationFormEmpty").animatedModal(options);
    $("#prePaymentFormEmpty").animatedModal(options);
    $("#paymentValidationFormEmpty").animatedModal(options);

    $("#docsFormEmpty").animatedModal();

    $("#walletFormEmpty").animatedModal();

    $("#displayQREmptyForm").animatedModal(options);
    $("#sendPaymentMethodFormEmpty").animatedModal(options);
    $("#sendRecipientInformationFormEmpty").animatedModal(options);
    $("#sendAuthenticationFormEmpty").animatedModal(options);
    $("#sendPaymentValidationFormEmpty").animatedModal(options);
    $("#sendSuccessFormEmpty").animatedModal(options);
    $("#payPaymentMethodFormEmpty").animatedModal(options);
    $("#payRecipientInformationFormEmpty").animatedModal(options);
    $("#payAuthenticationFormEmpty").animatedModal(options);
    $("#payPaymentValidationFormEmpty").animatedModal(options);
    $("#paySuccessFormEmpty").animatedModal(options);
}

/**
 * tab avigation
 * availableTabs - routes
 * onClick functionality
*/
let currentTab = '';
function tabNavigation() {
    let availableTabs = {
        govLink: {
            id: '#gov',
            title: 'MY GOV',
            icon: 'fa-landmark',
            nav: 'first',
        },
        docsLink: {
            id: '#docs',
            title: 'MY DOCS',
            icon: 'fa-id-card',
            nav: 'second',
        },
        walletLink: {
            id: '#wallet',
            title: 'MY WALLET',
            icon: 'fa-wallet',
            nav: 'third',
        },
    };
    $('.tabLink').on('click', function() {
        let tab = $(this).data("id");
        $(".tabLink").removeClass("current");
        $(this).addClass("current");
        
        $.each(availableTabs, function(key, val) {
            if (val.id === tab) {
                $(val.id).show();
                $(val.id).css('display', 'inline-flex');
                $('.nav').attr('class', 'nav selected ' + currentTab);
                setTimeout(function () {
                    $('.nav').attr('class', 'nav selected ' + val.nav);
                }, 200) 
                setTimeout(function () {
                    $('.nav').attr('class', 'nav ' + val.nav);
                    currentTab = val.nav;
                }, 400);
                
                $('#screenTitle').text(val.title);
                $("#screenIcon").attr('class', 'fa ' + val.icon);
            } else {
                $(val.id).hide();
            }
        });
    });
}

function pastDummyProfile() {
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
}

function saveSignature() {
    let data = $('#signature').signature('png');
    window.localStorage.setItem("signatureImage", data);
}

function loadSignature() {
    let data = window.localStorage.getItem("signatureImage");
    $('#signatureImage').attr('src', data);
}

function resetGovScreens() {
    resetProfile();
    resetSignature();
    resetIdentityValidation();
}
function resetProfile() {
    let variables = {
        surname: '',
        firstName: '',
        birthDate: '',
        birthPlace: '',
        nationality: '',
        passportNumber: '',
        dateIssued: '',
        placeIssued: '',
        validUntil: '',
        issuingAuthority: '',
    };
    $.each(variables, function(key, val) {
        $('[data-profile="' + key + '"]').val(val);
        $('[data-profile="' + key + '"]').css('border', 'none');
    })
    $('[data-profile="profilePic"]').text('UPLOAD PHOTO');
    $('[data-profile="profilePic"]').css('background', '');
    $('#signature').signature();
}
function resetSignature() {
    $('#signatureImage').attr('src', '');
}
function resetIdentityValidation(){
    $('#paymentValidationFormEmpty').attr('class', 'containerAction disabledAction')
    $('#sendAuthenticationFormEmpty').attr('class', 'containerAction disabledAction')
};
