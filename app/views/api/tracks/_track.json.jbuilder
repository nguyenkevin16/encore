json.extract! track, :id, :title, :track_url, :user_id, :img_url, :description

json.user track.user, :username, :id
