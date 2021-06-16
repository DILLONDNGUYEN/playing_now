class CreatePlaylistSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :playlist_songs do |t|
      t.references :playlist, null: false, foreign_key: {on_delete: :cascade}
      t.references :song, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
