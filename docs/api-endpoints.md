# API Endpoints

## HTML

Root
  - GET / - react entry point

## JSON

Users
  - POST /api/users
    * required data: username, password
  - PATCH /api/users
  - GET /api/users/:user_id
    * required params: user_id

Session
  - POST /api/session
    * required data: username, password
  - DELETE /api/session

Tracks
  - GET /api/tracks
    * returns all tracks
  - POST /api/tracks
    * required data: title, track_url, user_id
  - GET /api/tracks/:id
    * required params: track_id
  - PATCH /api/tracks/:id
    * required params: track_id
  - DELETE /api/tracks/:id
    * required params: track_id

Comments
  - POST /api/comments
    * required data: body, track_id, user_id
  - DELETE /api/comments/:comment_id
    * required params: comment_id
