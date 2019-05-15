let availableTabs = {
    govLink: '#gov',
    docsLink: '#docs',
    walletLink: '#wallet',
};

$(".tabLink").on('click', function() {
    let tab = $(this).data("id");
    $(".tabLink").removeClass("current");
    $(this).addClass("current");
    
    jQuery.each(availableTabs, function(key, val) {
        if (val === tab) {
            $(val).show();
            $(val).css('display', 'inline-flex');
        } else {
            $(val).hide();
        }
    });
});
