class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :update, :destroy]

  # GET /playlists
  def index
    @playlists = Playlist.all

    render json: @playlists
  end

  # GET /playlists/1
  def show
    render json: @playlist
  end

  # POST /playlists
  def create
    @playlist = Playlist.new(playlist_params)
    #@playlist = Playlist.find_or_create_by(playlist_params)
    if @playlist.save
      render json: @playlist, status: :created, location: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  def show_playlist_songs
   # binding.pry
    p = Playlist.find(params[:playlist_id])
    playlist_songs = p.playlist_songs
    songs = playlist_songs.map { |song| Song.find(song.song_id)}

    render json: songs
  end

  def add_song_to_playlist
    pid = params[:playlist_id]
    sid = params[:song_id]
    playlist = Playlist.find(pid)
    #  binding.pry
    songs_in_playlist = playlist.playlist_songs
    songs_in_playlist.each{ |s|
      # binding.pry
      # next if s.song_id == sid
      PlaylistSong.find_or_create_by(playlist_id: pid, song_id: sid)
    }
    
    #  binding.pry
    playlist.save
    render json: playlist  
  end

  def push_song_to_playlist
    @playlist = Playlist.find_by(id: params[:playlist_id])
    @song = Song.find_by(id: params[:song_id])
    @playlist.songs << @song

    render json: song
  end

  # PATCH/PUT /playlists/1
  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlists/1
  def destroy
    @playlist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def playlist_params
      params.require(:playlist).permit(:name, :description, :user_id)
    end
end
