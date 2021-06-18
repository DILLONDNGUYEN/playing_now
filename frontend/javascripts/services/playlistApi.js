class playlistApi{
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
}