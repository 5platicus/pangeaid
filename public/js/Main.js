let govLink = $("#govLink");
let gov = $("#gov");
let docsLink = $("#docsLink");
let docs = $("#docs");
let walletLink = $("#walletLink");
let wallet = $("#wallet");

govLink.click(function() {
    gov.css('display', 'inline-flex');
    docs.hide();
    wallet.hide();
    govLink.addClass("current");
    docsLink.removeClass("current");
    walletLink.removeClass("current");
});

docsLink.click(function() {
    gov.hide();
    docs.css('display', 'inline-flex');
    wallet.hide();
    govLink.removeClass("current");
    docsLink.addClass("current");
    walletLink.removeClass("current");
});

walletLink.click(function() {
    gov.hide();
    docs.hide();
    wallet.css('display', 'inline-flex');
    govLink.removeClass("current");
    docsLink.removeClass("current");
    walletLink.addClass("current");
});