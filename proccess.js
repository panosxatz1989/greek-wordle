window.onload = function () {
    build();
}

function build() {
    prepareWordGuess();
    keyboardLayout();

    localStorage.setItem('currentIndexOfGuess', 0);
    selectedWord = random(0, words.length - 2)
    localStorage.setItem('word', words[selectedWord]);

    document.querySelectorAll('.key').forEach(current => {
        current.addEventListener('click', function (e) {
            const el = e.target || window.event.target;
            if (el.dataset.bind === 'ENTER') {
                submitWord();
            } else if (el.dataset.bind === 'Backspace') {
                deleteLetter();
            } else {
                clickButton(el.dataset.bind);
            }
        });
    });
}

function clickButton(bind) {
    const rowToAddTheLetter = localStorage.getItem('currentIndexOfGuess');
    const firstEmptyBox = document.querySelectorAll(`.possible-letter[data-row="${rowToAddTheLetter}"][data-content="-"]`)[0];
    firstEmptyBox.dataset.content = bind;
    firstEmptyBox.innerHTML = bind;
    firstEmptyBox.classList.add('fit-content');
}

function deleteLetter() {
    // find the letter's position and clear it
    // also update the index of current letter guess
}

function submitWord() {
    let currentWordGuess = localStorage.getItem('currentIndexOfGuess');
    const rowBoxes = document.querySelectorAll(`.possible-letter[data-row="${currentWordGuess}"]`);
    const emptyRowBoxes = document.querySelectorAll(`.possible-letter[data-row="${currentWordGuess}"][data-content="-"]`);

    if (rowBoxes.length - emptyRowBoxes.length === 5) {
        const word = localStorage.getItem('word');
        let finalWord = '';
        rowBoxes.forEach((current, idx) => {
            const content = current.dataset.content;
            if (word.includes(content) && word.indexOf(content) === idx) {
                current.classList.add('sameIndex');
            } else if (word.includes(content)) {
                current.classList.add('letterExists');
            } else {
                current.classList.add('possible-letter');
            }
            finalWord += content;
            document.querySelector(`.key[data-bind="${content}"]`).classList.add('kbc-button-secondary');
        });

        localStorage.setItem('currentIndexOfGuess', ++currentWordGuess);

        setInterval(function () {
            if (word === finalWord) {
                finalWord = '';
                alert("YOU WON");
                build();
            }
        }, 500);
    }
}

function keyboardLayout() {
    let output = '';
    greekKeys.forEach((el, idx) => {
        el.forEach((current, index) => {
            output += `<div data-bind="${current}" class="key kbc-button kbc-button-lg">${current}</div>`;
        });
        output += '<br />';
    });
    document.querySelector('#keyboard').innerHTML = output;
}

function prepareWordGuess() {
    let output = '';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            output += `<div data-row="${i}" data-content="-" class="possible-letter"></div>`;
        }
        output += '<br />';
    }
    document.querySelector('#possible-words').innerHTML = output;
}