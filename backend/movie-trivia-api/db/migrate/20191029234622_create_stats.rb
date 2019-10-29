class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.string :movies
      t.string :quizzes
      t.integer :scores
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
