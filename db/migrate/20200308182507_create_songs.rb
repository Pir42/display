class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.integer :duration
      t.integer :bpm
      t.json :chords

      t.timestamps
    end
  end
end
