class AddMovieToQuizzes < ActiveRecord::Migration[5.2]
  def change
    add_reference :quizzes, :movie, foreign_key: true
  end
end
