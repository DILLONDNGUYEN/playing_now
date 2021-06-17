class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title 
      t.integer :popularity
      t.string :artists
      t.string :album_name
      t.integer :duration

      t.timestamps
    end
  end
end
