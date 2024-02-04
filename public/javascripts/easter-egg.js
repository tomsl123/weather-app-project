let index = 0;

/**
 * Cycles through emojis
 */
function changeEmoji() {
    const emojiElement = document.getElementById('weatherEmoji')
    const possibleEmojis = ['☀️', '🌤️', '🌥️', '☁️', '🌧️'];

    index++;
    if(index === 5) {
        index = 0;
    }
    emojiElement.innerHTML = possibleEmojis[index]
}