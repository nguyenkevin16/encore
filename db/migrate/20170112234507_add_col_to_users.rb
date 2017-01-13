class AddColToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_url, :string
    add_column :users, :description, :text
  end
end
