var commands = {};

commands.help = (words) => "<p>Feel free to type in one of the following commands, or give them a click!</p>\n\1" + Object.keys(commands).map(function(cmd) {
    return "<a onclick='writer(\""+cmd+"\", true)'>"+cmd+"</a>";
} ).join("\t");

commands.whoami = (words) => "<h1>Michael Smith</h1><p>Oklahoma City, Oklahoma, United States</p>";

commands.portfolio = function(words) {
    document.location.hash = "";
    document.location.href = "/portfolio.html";
};

commands.clear = function(words) {
    document.getElementsByClassName("console")[0].innerHTML = '';
    return "help\0";
};

commands.blog = function(words) {
    document.location.hash = "";
    document.location.href = "/blog.html";
};

commands.findme = (words) => {
    var html = "";
    var contactPoints = [
        "📧 <a href='mailto:michael.smith.ok@gmail.com' target='_blank'>michael.smith.ok@gmail.com</a>",
        "<img src='assets/icons/GitHub-Mark-Light-32px.png'/> <a href='https://github.com/smwa/' target='_blank'>github.com/smwa</a>",
        "<img src='assets/icons/facebook_32.png'/> <a href='https://www.facebook.com/michael.w.smith.ok/' target='_blank'>facebook.com/michael.w.smith.ok</a>",
        "<img src='assets/icons/snapchat.png'/> <a href='https://www.snapchat.com/add/michaelsmith.ok' target='_blank'>snapchat.com/add/michaelsmith.ok</a>",
        "<img src='assets/icons/twitter.png'/> <a href='https://twitter.com/smwa_ok' target='_blank'>twitter.com/smwa_ok</a>",
        "<img src='assets/icons/mastodon.png'/> <a href='https://mastodon.social/@smwa' target='_blank'>@smwa@mastodon.social</a>",
        "<img src='assets/icons/linkedin.png'/> <a href='https://linkedin.com/in/michael-smith-ok' target='_blank'>linkedin.com/in/michael-smith-ok</a>",
        "<img src='assets/icons/steam.png'/> <a href='https://steamcommunity.com/profiles/76561198011969367/' target='_blank'>steamcommunity.com/profiles/76561198011969367/</a>",
        "<img src='assets/icons/spotify.png'/> <a href='https://open.spotify.com/user/michael.smith.ok' target='_blank'>open.spotify.com/user/michael.smith.ok</a>",
        "<img src='assets/icons/bitcoin.png'/> <a href='bitcoin:bc1qgtmffjw542zqek7snj3np4uy8py4au4jvuknjp' target='_blank'>bitcoin:bc1qgtmffjw542zqek7snj3np4uy8py4au4jvuknjp</a>",
        "<img src='assets/icons/venmo.png'/> Venmo: @mettle",
        "<img src='assets/icons/discord.png'/> Discord: Mettle#8129",
        "<img src='assets/icons/nintendo.png'/> Nintendo Switch: SW-7755-9487-8676",
    ];
    contactPoints.forEach(function(contactPoint){
        html += "<div class='contact'>" + contactPoint + "</div>\1";
    });
    return html;
};
