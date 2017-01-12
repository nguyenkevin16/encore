# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  track_url   :string           not null
#  img_url     :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ActiveRecord::Base
  validates :title, :track_url, :user, presence: true

  belongs_to :user
end

# TODO: Testing
# Track.create!(title: 'title', track_url: 'track_url', user_id: 1)
