class ResultSerializer
  include FastJsonapi::ObjectSerializer
  attributes :movie_title, :score, :time 
end
