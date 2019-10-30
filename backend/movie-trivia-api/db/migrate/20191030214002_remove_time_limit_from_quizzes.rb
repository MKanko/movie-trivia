class RemoveTimeLimitFromQuizzes < ActiveRecord::Migration[5.2]
  def change
    remove_column :quizzes, :time_limit, :string
  end
end
