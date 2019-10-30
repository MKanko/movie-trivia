class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :movie_title, :questions, :time_limit 
end
