class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :question
      t.string :selected_answer
      t.string :correct_answer
      t.string :answer_context
      t.references :result, foreign_key: true

      t.timestamps
    end
  end
end
