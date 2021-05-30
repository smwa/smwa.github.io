var writer = initializeConsole(document.body, function(line) {
    if (!commands) {
        return; // Dict not initialized yet
    }
    var words = line.split(" ");
    
    var command = words[0].toLowerCase();
    if (commands[command]) {
        if (command !== 'help') {
          window.location.hash = words.join('-')
        }
        var result = commands[command](words);
        if (result) {
            writer(result + "\n");
        }
    }
});

var hashLocation = window.location.hash.replace('#', '').replace(/\-/, ' ')

setTimeout(() => {
    writer(hashLocation, true)
}, 200);

setTimeout(() => {
    writer("help", true);
}, 1200);

if (hashLocation != "whoami") {
    writer("whoami", true);
}
