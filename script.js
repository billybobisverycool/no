document.getElementById('start-game').onclick = () => {
    // Example game start logic
    alert("Game started!");
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('question').innerText = "What is 2 + 2?";
    const answers = ["3", "4", "5"];
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => alert(`You selected: ${answer}`);
        answersDiv.appendChild(button);
    });
};

document.getElementById('join-game').onclick = () => {
    const code = document.getElementById('game-code').value;
    alert(`Joined game with code: ${code}`);
};
