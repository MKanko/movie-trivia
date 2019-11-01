class ResultSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :point_value, :score 
  belongs_to :quiz
  belongs_to :user
  has_many :answers
end
