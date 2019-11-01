class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.string :questions
      t.string :time_limit
      t.references :movie, foreign_key: true

      t.timestamps
    end
  end
end
