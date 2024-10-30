// Example songs with MP3 paths
const songs = [
    { id: 1, title: "Song One", file: "song1.mp3" },
    { id: 2, title: "Song Two", file: "song2.mp3" },
    { id: 3, title: "Song Three", file: "song3.mp3" },
];

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to display songs
function displaySongs() {
    const songListDiv = document.getElementById('song-list');
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song';
        songDiv.innerHTML = `${song.title} 
            <button onclick="selectSong(${song.id})">Select</button>`;
        songListDiv.appendChild(songDiv);
    });
}

// Function to select a song
function selectSong(id) {
    const selectedSongs = getSelectedSongs();
    if (!selectedSongs.includes(id)) {
        selectedSongs.push(id);
        setCookie('selectedSongs', JSON.stringify(selectedSongs), 7);
        displaySelectedSongs();
    }
    playSong(id);
}

// Function to get selected songs from cookies
function getSelectedSongs() {
    const cookieValue = getCookie('selectedSongs');
    return cookieValue ? JSON.parse(cookieValue) : [];
}

// Function to display selected songs
function displaySelectedSongs() {
    const selectedSongsDiv = document.getElementById('selected-songs');
    const audioPlayer = document.getElementById('audio-player');
    selectedSongsDiv.innerHTML = '';
    const selectedSongs = getSelectedSongs();
    
    selectedSongs.forEach(id => {
        const song = songs.find(song => song.id === id);
        if (song) {
            const songDiv = document.createElement('div');
            songDiv.innerHTML = song.title;
            selectedSongsDiv.appendChild(songDiv);
        }
    });
}

// Function to play a song
function playSong(id) {
    const song = songs.find(song => song.id === id);
    if (song) {
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = song.file; // Set the source to the selected song
        audioPlayer.play();
    }
}

// Initial display
displaySongs();
displaySelectedSongs();

}

// Initial display
displaySongs();
displaySelectedSongs();
