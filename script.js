const tracks = [
    {
        title: "All Girls Are The Same",
        artist: "Juice WRLD",
        url: "https://billybobisverycool.github.io/no/youtube_All%20Girls%20Are%20The%20Same.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        url: "https://example.com/song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        url: "https://example.com/song3.mp3"
    }
];

let currentTrackIndex = 0;
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playlist = document.getElementById('playlist');

// Load track
function loadTrack(index) {
    const track = tracks[index];
    audioSource.src = track.url;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    audio.load();
}

// Play track
document.getElementById('play').addEventListener('click', () => {
    audio.play();
});

// Next track
document.getElementById('next').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Previous track
document.getElementById('prev').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Initialize playlist
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
    });
    playlist.appendChild(li);
});

// Load the first track
loadTrack(currentTrackIndex);
