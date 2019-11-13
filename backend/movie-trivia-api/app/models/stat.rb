class Stat < ApplicationRecord
    belongs_to :user

    def update_user_stat
        result = self.user.results.last
        self.point_total += result.score
        self.save    
    end 
    
end


# declare variable and set it equal users last result, then use that variable to access the attributes 
# needed from that object (user.result.last) to update the user stat attributes