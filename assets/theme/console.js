// \0 Runs the command on this line
// \1 Renders the current line immediately
function initializeConsole(container, onCarriageReturn) {
    container.classList.add('console-background');

    var consoleElement = document.createElement('div');
    consoleElement.classList.add('console');
    container.appendChild(consoleElement);

    // Related to autocapitalize not working right in firefox on android for textareas
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1425291
    var input = document.createElement('textarea');
    input.setAttribute("autocapitalize", "none");
    input.setAttribute("spellcheck", "false");
    input.classList.add('console-input');
    container.appendChild(input);

    var isNewLine = function(character) {
        return (character === '\r' || character === '\n' || character === '\r\n');
    }

    var decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    var offsetHeight = document.body.offsetHeight;
    var toWrite = '';
    setInterval(function() {
        if (document.body.offsetHeight > offsetHeight && (window.innerHeight + window.scrollY) < document.body.offsetHeight) {
            window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
            offsetHeight = document.body.offsetHeight;
        }
        else if (document.body.offsetHeight < offsetHeight) {
            offsetHeight = document.body.offsetHeight;
        }
        for (var i = 0; i < 4; i++) {
            writeNextCharacter();
        }
    }, 15);

    function writeNextCharacter() {
        if (toWrite.length < 1) return;
        var c = toWrite[0];
        toWrite = toWrite.substr(1);
        if (c === "\0") {
            var lines = consoleElement.innerHTML.split("\n");
            var line = lines[lines.length - 1];

            consoleElement.innerHTML = consoleElement.innerHTML.substr(0, consoleElement.innerHTML.length - line.length) + decodeHTML(line);

            consoleElement.innerHTML += "\n";
            if (onCarriageReturn) {
                onCarriageReturn(line.trim());
            }
        }
        else if (isNewLine(c) || c === "\1") {
            var lines = consoleElement.innerHTML.split("\n");
            var line = lines[lines.length - 1];
            consoleElement.innerHTML = consoleElement.innerHTML.substr(0, consoleElement.innerHTML.length - line.length) + decodeHTML(line);
            if (isNewLine(c)) {
                consoleElement.innerHTML += c;
            }
        }
        else {
            consoleElement.innerHTML += c;
        }
    }

    input.oninput = function(e) {
        var newCharacter = input.value;
        newCharacter = newCharacter.substr(newCharacter.length - 1);
        if (isNewLine(newCharacter)) {
            toWrite += "\0";
        }
        else {
            toWrite += newCharacter;
        }
        input.value = '';
    };

    input.onkeydown = function(e) {
        switch (e.keyCode) {
            case 8:
                if (toWrite.length > 0) {
                    toWrite = toWrite.substr(0, toWrite.length - 1);
                }
                else {
                    var backspaceLength = 1;
                    var innerTextCharacter = consoleElement.innerText.substr(consoleElement.innerText.length - 1, 1);
                    if (innerTextCharacter === '>' || innerTextCharacter === '<') {
                        backspaceLength = 4;
                    }
                    if (innerTextCharacter === '&') {
                        backspaceLength = 5;
                    }
 
                    var len = consoleElement.innerHTML.length;
                    var toRemove = consoleElement.innerHTML.substr(len - backspaceLength, backspaceLength)
                    if (isNewLine(toRemove)) {
                        return;
                    }
                    consoleElement.innerHTML = consoleElement.innerHTML.substr(0, len - backspaceLength);
                }
                break;
        }
    };

    input.onpaste = function(e) {
        var paste = (event.clipboardData || window.clipboardData).getData('text');
        toWrite += paste;
        input.value = '';
    };

    container.onclick = function(e) {
        if (window.getSelection().toString().length > 0) {
            return;
        }
        input.focus();
    };

    input.focus();

    return function(message, triggerCommand) {
        toWrite += message;
        if (triggerCommand) {
            toWrite += "\0";
        }
    };
}
