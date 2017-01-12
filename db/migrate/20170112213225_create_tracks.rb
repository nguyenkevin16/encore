class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :track_url, null: false
      t.string :img_url
      t.text :description

      t.timestamps null: false
    end

    add_index :tracks, :user_id
  end
end
