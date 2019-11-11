class Stat < ApplicationRecord
    belongs_to :user

    def update_user_stat
        result = self.user.results.last
        self.point_total += result.score
        self.save    
    end 
end


# declare variable equal to the above the use that variable to access the attributes needed from that object
    # to update the user stat attributes