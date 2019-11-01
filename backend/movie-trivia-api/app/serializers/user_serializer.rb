class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :rating
  has_many :results
  has_one :stat
end
