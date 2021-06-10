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
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-play')
audio.play()
}

function pauseSong(){
musicContainer.classList.remove('play')
playBtn.querySelector('i.fas').classList.add('fa-play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
audio.pause()
}

function prevSong(){
  songIndex--
  if(songIndex < 0) {
    
  }

}

function nextSong(){

}






//Event Listens

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

//Change Event

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
