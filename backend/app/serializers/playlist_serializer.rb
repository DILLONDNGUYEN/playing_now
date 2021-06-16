class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :songs
  
end
