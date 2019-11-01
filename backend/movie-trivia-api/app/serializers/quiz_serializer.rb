class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :point_value, :quiz_result
  belongs_to :movie
  belongs_to :user
  has_many :questions
end
