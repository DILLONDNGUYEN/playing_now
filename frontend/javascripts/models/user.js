class User{
  static all = []
  constructor({username}){
    this.username = username
    User.all.push(this)
  }
  static findOrCreateUser(username){
    this.findByName(username.name)|| new User(username)
  }
}