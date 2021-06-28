class UserApi {
    // static fetchUsers() {
    //     fetch("http://localhost:3000/users")
    //     .then(resp => resp.json())
    //     .then(data => { 
    //         data.forEach(user => {
    //             // User.findOrCreateUser(user)
    //             // User.playlists
    //         });
    // })
    // }

    async fetchUsers(){
        try {
            let res = await fetch("http://localhost:3000/users")
            let data = await res.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error.message)
        }

    }

    //This will pass in username that the user creates and then save to the backend with POST request
    async createUser(username){
        const nameObj = {username}
        try {
            let res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nameObj)
            })
            let data = await res.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error.message)
        }
        

    }
       
}

// {username: "name"}

