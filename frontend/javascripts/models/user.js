class User{
  static all = []
  constructor({username, id}){
    this.username = username
    this.id =id
    User.all.push(this)
  }
  static findOrCreateUser(newUserInput){
    console.log(newUserInput.value)
    this.findByName(user.name)|| new User(user)
  }
  static findByName(username){
    return this.all.find(user=> user.name === username)
  }
  //welcome User
  render(){
    document.getElementById("username").innerHTML+=`
    <div id= username-${this.username}>
        <h4>Welcome ${this.username}</h4>
    </div>
    `
  }

  // logout function might make sense but not really required


}