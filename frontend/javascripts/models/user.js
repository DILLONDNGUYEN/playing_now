class User{
  static all = []
  constructor({username, id}){
    this.username = username
    this.id =id
    User.all.push(this)
  }
  static findOrCreateUser(user){
    // debugger
    // console.log(newUserInput.value)
    return this.findByName(user.username)|| new User(user)
  }
  static findByName(username){
    return this.all.find(user=> user.name === username)
  }
  //welcome User

  render(){
    document.getElementById("username").innerHTML =`
    <div id= "username-${this.username}">
        <h4>Welcome ${this.username}</h4>
        
    </div>
    `
    //user playlist displays here
  }

  // logout function might make sense but not really required


}