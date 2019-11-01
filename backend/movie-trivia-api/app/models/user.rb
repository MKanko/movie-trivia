class User < ApplicationRecord
    has_many :quizzes
    has_one :stat 
end
