const musicContainer = document.querySelector('.music-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const playbtn = document.querySelector('#play')
const prevbtn = document.querySelector('#prev')
const nextbtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')

//Song Titles

const songs = ['Electricity', 'Be Right There', 'All I Want vs. Moments vs. Sound of Walking Away (Nick Gunner Mashup)']

//Track Songs

let songIndex = 0

// Load song into DOM

loadSong(songs[songIndex])

//update song

function loadSong(song) {
  title.innerText = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}

function playSong(){
musicContainer.classList.add('play')
playbtn.querySelector('i.fas').classList.remove('fa-play')
playbtn.querySelector('i.fas').classList.add('fa-play')
}

function pauseSong(){
musicContainer.classList.remove('play')
playbtn.querySelector('i.fas').classList.add('fa-play')
playbtn.querySelector('i.fas').classList.remove('fa-play')
}



//Event Listens

playbtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})
