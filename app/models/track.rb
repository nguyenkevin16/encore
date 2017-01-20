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
  has_many :comments, dependent: :destroy

  def ensure_track_img
    self.img_url ||= 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484950513/track_photos/tfyrsaosvjj5rhss2wwl.jpg'
  end
end
