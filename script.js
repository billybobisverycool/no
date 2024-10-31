document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('song-list');
    const audio = document.getElementById('audio');

    const songs = [
        { title: 'All Girls Are The Same', artist: 'Juice WRLD', url: 'https://billybobisverycool.github.io/no/youtube_All%20Girls%20Are%20The%20Same.mp3' },
        { title: 'Song Two', artist: 'Artist Two', url: 'https://www.example.com/song2.mp3' },
        // Replace with actual audio URLs
    ];

    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.onclick = () => {
            audio.src = song.url;
            audio.play();
        };
        songList.appendChild(li);
    });
});
