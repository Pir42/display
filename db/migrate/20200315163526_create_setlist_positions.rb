class CreateSetlistPositions < ActiveRecord::Migration[6.0]
  def change
    create_table :setlist_positions do |t|
      t.references :song, null: false, foreign_key: true
      t.references :setlist, null: false, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
