class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.string :movie_history
      t.string :quiz_history
      t.string :rating
      t.integer :point_total

      t.timestamps
    end
  end
end
