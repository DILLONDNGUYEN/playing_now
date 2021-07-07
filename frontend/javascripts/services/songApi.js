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
  // This will fetch songs
  async fetchSongs(){
    try {
      let res = await fetchSongs("http://localhost:3000/songs")
      let data = await res.json()
      // console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
    }
  }


  
}