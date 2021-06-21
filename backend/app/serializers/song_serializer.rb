class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artists, :duration, :popularity, :album_name
  
end
