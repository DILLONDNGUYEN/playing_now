class PlaylistApi{
  static fetchPlaylists(){
     fetch("http://localhost:3000/playlists")
    .then(resp=>resp.json())
    .then(json=>{
      json.data.forEach(playlist => {
                Playlist.findOrCreatePlaylist(playlist.attributes)
               playlist.attributes.name.forEach(name=> new Name(name))
            });
     //iterate through json array 
     
     //for each playlist make a playlist object
     //
    })
  }

  async displaySongs(playlist_id){
    const playlistObj = {playlist_id: playlist_id}
    try { 
      let res = await fetch("http://localhost:3000/playlistssongs",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(playlistObj)
      })
      let data = await res.json()
      return data

      

      // console.log(data)
      

    } catch (error) {
        console.log(error.message)
    }
  }
}