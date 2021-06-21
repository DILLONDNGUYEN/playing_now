class User{
  static all = []
  constructor({username, id}){
    this.username = username
    this.id =id
    User.all.push(this)
  }
  static findOrCreateUser(user){
    this.findByName(user.name)|| new User(user)
  }
  static findByName(name){
    return this.all.find(user=> user.name === name)
  }
}