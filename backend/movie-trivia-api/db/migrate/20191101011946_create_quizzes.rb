class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.integer :point_value
      t.boolean :quiz_result, default: false

      t.timestamps
    end
  end
end
