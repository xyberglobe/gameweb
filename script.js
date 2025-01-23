document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const gameName = this.getAttribute('data-game');
        alert(`Starting ${gameName}...`);
    });
});