let successAnimation = "<svg id='successAnimation' class='animated' xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'><path id='successAnimationResult' fill='#D8D8D8' d='M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z'/><circle id='successAnimationCircle' cx='35' cy='35' r='24' stroke='#979797' stroke-width='2' stroke-linecap='round' fill='transparent'/><polyline id='successAnimationCheck' stroke='#979797' stroke-width='2' points='23 34 34 43 47 27' fill='transparent'/></svg>";

$(document).ready(function() {
    initializeModals();
    tabNavigation();
    $('#signature').signature();
    [].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( bttn, pos ) {
        new UIProgressButton( bttn, {
            callback : function( instance ) {
                var progress = 0,
                    interval = setInterval( function() {
                        progress = Math.min( progress + Math.random() * 0.2, 1 );
                        instance.setProgress( progress );

                        if( progress === 1 ) {
                            instance.stop( pos === 1 || pos === 3 ? -1 : 1 );
                            clearInterval( interval );
                        }
                    }, 150 );
            }
        } );
    } );

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
    });
    $('.back-prePayment').on('click', function() {
        resetIdentityValidation();
    });
    $('.back-paymentValidation').on('click', function() {
        resetSignature();
    });
    $('#displayQREmptyForm').on('click', function() {
        setTimeout(function() {
            showAlertSuccess( "Successful transaction",  "Successful transaction");
        }, 10000)
    });
    $('#displayDocQREmptyForm').on('click', function() {
        setTimeout(function() {
            showAlertSuccess( "Successful transaction",  "Successful transaction");
        }, 10000)
    });
    $('#sendPaymentValidationFormEmpty').on('click', function() {
        showAlertSuccess( "Successful transaction",  "Successful transaction");
    });
    // $('#paymentValidationFormEmpty').on('click', function() {
    //     showAlertSuccess( "Successful transaction",  "Successful transaction");
    // });
    // $('#payPaymentValidationFormEmpty').on('click', function() {
    //     showAlertSuccess( "Successful transaction",  "Successful transaction");
    // });
});

/**
 * MODAL ROUTES INITIALIZATION
*/
function initializeModals() {
    let options = {
        beforeClose: function beforeModalClose() {
            return swal({
                title: "Warning",
                text: "Closing this window will delete your progress. Are you sure that you would like to close it?",
                buttons: true,
                dangerMode: true
            });
        }
    }

    $("#govFormEmpty").animatedModal();
    $("#travelCategoryFormEmpty").animatedModal(options);
    $("#visaApplicationFormEmpty").animatedModal(options);
    $("#prePaymentFormEmpty").animatedModal(options);

    $("#docsFormEmpty").animatedModal();

    $("#walletFormEmpty").animatedModal();
    
    $("#displayDocQREmptyForm").animatedModal();
    $("#displayQREmptyForm").animatedModal(options);
    $("#sendPaymentMethodFormEmpty").animatedModal(options);
    $("#sendRecipientInformationFormEmpty").animatedModal(options);
    $("#sendAuthenticationFormEmpty").animatedModal(options);
    $("#payPaymentMethodFormEmpty").animatedModal(options);
    $("#payRecipientInformationFormEmpty").animatedModal(options);
    $("#payAuthenticationFormEmpty").animatedModal(options);
}

/**
 * tab avigation
 * availableTabs - routes
 * onClick functionality
*/
let currentNav = 'first';
let currentTab = 'govLink';
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
                let nextIndex = Object.keys(availableTabs).indexOf(key);
                let currentIndex =  Object.keys(availableTabs).indexOf(currentTab);
                // let bounce = new Bounce();
                // let x = 300;
                // if (nextIndex < currentIndex) {
                //     x = -300
                // }
                // bounce.translate({
                //     from: { x: x, y: 0 },
                //     to: { x: 0, y: 0 },
                //     duration: 500,
                //     stiffness: 2,
                // }).applyTo(document.querySelectorAll(".animation-target"));
                
                currentTab = key;
                $(val.id).fadeIn('fast');
                $(val.id).css('display', 'inline-flex');
                $('.nav').attr('class', 'nav selected ' + currentNav);
                setTimeout(function () {
                    $('.nav').attr('class', 'nav selected ' + val.nav);
                }, 100) 
                setTimeout(function () {
                    $('.nav').attr('class', 'nav ' + val.nav);
                    currentNav = val.nav;
                }, 200);
                
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
function pasteScanAndPay() {
    $('[data-profile="recipientName"]').val('Rakotomalala Miora');
    $('[data-profile="recipientEmail"]').val('rakotomalala.miora@gmail.com');
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
    $('#sendPaymentValidationFormEmpty').attr('class', 'containerAction disabledAction')
};

function showAlertSuccess(title, text) {
    swal({
        title: title,
        text: text
    });
    $('<div class="swal-success-container"></div>').insertAfter('.swal-text');
    $('.swal-success-container').html(successAnimation);
}