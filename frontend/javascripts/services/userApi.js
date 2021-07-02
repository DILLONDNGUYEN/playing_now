class UserApi {
    // static fetchUsers() {
    //     fetch("http://localhost:3000/users")
    //     .then(resp => resp.json())
    //     .then(data => { 
    //         data.forEach(user => {
    //             // User.findOrCreateUser(user)
    //             // User.playlists
    //         })
    //      .catch(err => {
     //   console.log(err.message)
    //})
    // })
    // }

    // async fetchUsers(){
    //     try {
    //         let res = await fetch("http://localhost:3000/users")
    //         let data = await res.json()
    //         console.log(data)
    //         return data
    //     } catch (error) {
    //         console.log(error.message)
    //     }

    // }

    //This will pass in username that the user creates and then save to the backend with POST request
    static async createUser(username){
        const nameObj = {username}
        // console.log(nameObj)
        // debugger
        try {
            let res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nameObj)
            })
            console.log(res)
            let data = await res.json()
            console.log(data)
            // return data
            // debugger
            const newUser = User.findOrCreateUser(data)
            data.playlists.forEach(playlist => {
                const p = Playlist.findOrCreatePlaylist(playlist)
                p.owner_id =  newUser.id
                playlist.songs.forEach(song => {
                    debugger

                 const s = Song.findOrCreateSong(song)
                //  debugger
                 s.playlistIds.push(p.id)

                })
            })
            // debugger
            newUser.render()   
            
            //current
        } catch (error) {
            console.log(error.message)
        }
        

    }
       
}

// {username: "name"}

