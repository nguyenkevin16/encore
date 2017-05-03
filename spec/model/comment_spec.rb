require 'rails_helper'

RSpec.describe Comment, type: :model do 
  
  describe 'validations' do 
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:track) }  
  end
end