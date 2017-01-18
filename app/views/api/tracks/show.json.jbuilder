json.partial! './api/tracks/track', track: @track

json.comments @track.comments do |comment|
  json.extract! comment, :body, :user
end
