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
$(".tabLink").on('click', function() {
    let tab = $(this).data("id");
    $(".tabLink").removeClass("current");
    $(this).addClass("current");
    
    jQuery.each(availableTabs, function(key, val) {
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
