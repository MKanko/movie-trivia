class StatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :movies, :quizzes, :scores
end
