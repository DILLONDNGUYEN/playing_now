class User < ApplicationRecord
  
  has_many :user_playlists
  has_many :playlists , through: :user_playlists
  has_many :songs
  validates :username, presence: true, uniqueness: true
end
