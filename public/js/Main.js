$( document ).ready(function() {
   initializeModals();
   tabNavigation();
    $('#pasteProfile').on('click', function() {
        pastDummyProfile();
    })
    $('#signature').signature();
});

/**
 * MODAL ROUTES INITIALIZATION
*/
function initializeModals() {
    $("#govFormEmpty").animatedModal();
    $("#travelCategoryFormEmpty").animatedModal();
    $("#visaApplicationFormEmpty").animatedModal();
    $("#prePaymentFormEmpty").animatedModal();
    $("#paymentValidationFormEmpty").animatedModal();

    $("#docsFormEmpty").animatedModal();

    $("#walletFormEmpty").animatedModal();
    $("#newTransactionSendMoneyFormEmpty").animatedModal();
    $("#newTransactionReceiveMoneyFormEmpty").animatedModal();
    $("#newTransactionPayBillFormEmpty").animatedModal();

    $("#sendMoneyFormEmpty").animatedModal();
    $("#sendPaymentMethodFormEmpty").animatedModal();
    $("#sendRecipientInformationFormEmpty").animatedModal();
    $("#sendAuthenticationFormEmpty").animatedModal();
    $("#sendPaymentValidationFormEmpty").animatedModal();
    $("#sendSuccessFormEmpty").animatedModal();
}

/**
 * tab avigation
 * availableTabs - routes
 * onClick functionality
*/
function tabNavigation() {
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