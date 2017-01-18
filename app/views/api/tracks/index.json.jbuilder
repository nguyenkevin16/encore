@tracks.each do |track|
  json.set! track.id do
    json.partial! 'api/tracks/track', track: track

    json.comments track.comments do |comment|
      json.extract! comment, :body, :id
      json.extract! comment.user, :username
    end
  end
end
