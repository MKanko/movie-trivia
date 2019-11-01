class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :question_number
      t.string :answer_option_a
      t.string :answer_option_b
      t.string :answer_option_c
      t.string :answer_option_d
      t.string :selected_answer
      t.string :correct_answer
      t.string :answer_context
      t.integer :score
      t.references :quiz, foreign_key: true

      t.timestamps
    end
  end
end
