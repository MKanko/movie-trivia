class AddQuestionNumberToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :question_number, :integer
  end
end
