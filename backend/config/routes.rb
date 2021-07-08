Rails.application.routes.draw do
  resources :songs
  resources :playlists
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/playlistssongs', to:'playlists#show_playlist_songs'
  post '/songtoplaylist', to:'add_song_to_playlist'

end
