class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :rating 
end
