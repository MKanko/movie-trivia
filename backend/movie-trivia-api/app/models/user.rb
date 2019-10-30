class User < ApplicationRecord
    has_many :results
    has_one :stat 
end
