const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

//Song Titles

const songs = ['Electricity', 'Be Right There', 'All I Want vs. Moments vs. Sound of Walking Away (Nick Gunner Mashup)'];

//Track Songs

let songIndex = 0;

// Load song 

loadSong(songs[songIndex]);

//update song

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong(){
musicContainer.classList.add('play');
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');
audio.play();
}

function pauseSong(){
musicContainer.classList.remove('play');
playBtn.querySelector('i.fas').classList.add('fa-play');
playBtn.querySelector('i.fas').classList.remove('fa-pause');
audio.pause();
}

function prevSong(){
  songIndex--;
  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(song[songIndex]);
  playSong();

}

function nextSong(){
  songIndex++;

  if(songIndex > song.length - 1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}


//Event Listeners

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if(isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
})

//Change Event

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
