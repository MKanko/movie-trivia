class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  belongs_to :movie
  has_many :results
  has_many :questions
end
