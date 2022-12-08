const greekKeys = [
    ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ'],
    ['Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Backspace'],
    ['Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'ENTER']
]

const words = [
    'ΣΧΗΜΑ',
    'ΠΕΤΡΑ',
    'ΠΟΡΤΑ',
    'ΛΑΘΟΣ',
    'ΚΗΤΟΣ',
    'ΠΑΘΟΣ',
    'ΑΓΑΠΗ',
    'ΒΑΘΟΣ',
    'ΠΕΝΤΕ',
    'ΝΙΚΟΣ'
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

let selectedWord = words[lastUsedWordIdx]