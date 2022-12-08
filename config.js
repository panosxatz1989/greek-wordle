const words = [
    'ΣΧΗΜΑ',
    'ΠΕΤΡΑ',
    'ΠΟΡΤΑ',
    'ΛΑΘΟΣ',
    'ΚΗΤΟΣ'
]

let lastUsedWordIdx = -1

const random = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    if (lastUsedWordIdx === num) {
        random(min, max)
    }

    lastUsedWordIdx = num
    return num
}