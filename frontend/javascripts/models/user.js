class User{
  static all = []
  constructor({name, id}){
    this.name = name
    this.id = id
    User.all.push(this)
  }
}