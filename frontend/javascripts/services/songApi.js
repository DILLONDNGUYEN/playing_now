class SongApi {
  static fetchSongs(){
    fetch("http://localhost:3000/songs")
    .then(resp=>resp.json())
    .then(json=>{
      // debugger
      json.forEach(song => {
                Song.findOrCreateSong(song)
               
            });
     //iterate through json array 
     
     //for each song make a song object
     //
    })

  }
}