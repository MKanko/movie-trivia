class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :rating, :string, :default => 'Level 1'
  end
end
