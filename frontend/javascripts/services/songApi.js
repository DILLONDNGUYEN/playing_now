class SongApi {
  static fetchSongs(){
    fetch("http://localhost:3000/songs")
    .then(resp=>resp.json())
    .then(json=>{
      json.data.forEach(song => {
                Song.findOrCreateSong(song.attributes)
               song.attributes.title.forEach(title=> new Title(title))
            });
     //iterate through json array 
     
     //for each song make a song object
     //
    })

  }
}