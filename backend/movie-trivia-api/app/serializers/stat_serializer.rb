class StatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :movie_history, :quiz_history, :rating, :point_total
end
