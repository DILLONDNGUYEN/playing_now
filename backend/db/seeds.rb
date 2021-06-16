# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(username: 'dillon')

song = Song.create(name: 'Happy Birthday', artist: 'family', genre: 'pop')

playlist = Playlist.create(name: 'Birthday party', owner: user)

user.playlists << playlist

PlaylistSong.create(playlist: playlist, song: song)