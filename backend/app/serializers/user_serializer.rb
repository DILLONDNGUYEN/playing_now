class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :username, :playlists

  def playlists
    self.object.playlists.map do |p|
      {id: p.id, name: p.name, description: p.description, songs: p.songs}
    end
  end  
  
end
