class SongApi {
  static fetchSongs(){
    fetch("http://localhost:3000/songs")
    .then(resp=>resp.json())
    .then(json=>{

     //iterate through json array 
     //for each song make a song object
     //
    })

  }
}