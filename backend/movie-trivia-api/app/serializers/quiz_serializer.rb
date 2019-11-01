class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :point_value, :quiz_result
end
