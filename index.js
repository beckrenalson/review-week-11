const chosenColor = document.getElementById('enterColor');
const applyBtn = document.getElementById('apply');
const randomBtn = document.getElementById('random');
let colorDisplay = document.getElementById('displayColor');

const randomColors = [
    '#FFB17A',
    '#0A1128',
    '#BEE7B8',
    '#713E5A',
    '#0B4F6C',
    '#20BF55'
];

applyBtn.addEventListener('click', function () {
    colorDisplay.style.backgroundColor = chosenColor.value;
    console.log(chosenColor.value);
    colorDisplay.textContent = chosenColor.value;
});

randomBtn.addEventListener('click', function () {
    const randomColorIndex = Math.floor(Math.random() * randomColors.length);
    console.log(randomColorIndex)

    randomColors.forEach(function(color, index) {
        color.id = `displayColor-${index}`;
    });

    const randomSelectedColor = document.getElementById(`displayColor-${randomColorIndex}`);

    colorDisplay.style.backgroundColor = randomSelectedColor;
    console.log(randomSelectedColor);
});

