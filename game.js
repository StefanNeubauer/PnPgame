let character = {};

function startGame() {
    // Get values from character creation form
    character.name = document.getElementById('characterName').value;
    character.courage = parseInt(document.getElementById('courage').value);
    // Add similar lines for other attributes

    // Validate attribute points allocation
    if (validateAttributePoints()) {
        // Hide character creation screen and show game screen
        document.getElementById('characterCreationScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';

        // Start the game
        showStory("Welcome to the Text Adventure Game, " + character.name + "!");
    } else {
        alert("Please allocate all 100 attribute points before starting the game.");
    }
}

function validateAttributePoints() {
    // Check if the total attribute points equal 100
    const totalPoints = character.courage + character.strength + character.constitution +
                       character.agility + character.dexterity + character.intelligence +
                       character.intuition + character.charisma;
    return totalPoints === 100;
}

function showStory(storyText, imagePath = '', options = []) {
    const outputElement = document.getElementById('output');
    const imageElement = document.getElementById('image');
    const optionsElement = document.getElementById('options');

    // Display story text
    outputElement.textContent = storyText;

    // Display image if provided
    imageElement.src = imagePath;

    // Display options if provided
    optionsElement.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', option.action);
        optionsElement.appendChild(button);
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', function() {
    // Display character creation screen initially
    document.getElementById('characterCreationScreen').style.display = 'block';
});