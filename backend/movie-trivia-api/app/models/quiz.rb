class Quiz < ApplicationRecord
    has_many :results
    has_many :questions
    belongs_to :movie 
end
