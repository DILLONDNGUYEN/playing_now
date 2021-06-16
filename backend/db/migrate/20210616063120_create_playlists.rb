class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :description
      t.references :owner, foreign_key: {to_table: :users, on_delete: :cascade}

      t.timestamps
    end
  end
end
