document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('song-list');
    const audio = document.getElementById('audio');

    const songs = [
        { title: 'Song One', artist: 'Artist One', url: 'https://www.example.com/song1.mp3' },
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
