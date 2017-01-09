# API Endpoints

## HTML

Root
  - GET / - react entry point

## JSON

Users
  - POST /api/users
    * required data: username, password, email
  - PATCH /api/users
  - GET /api/users/:user_id
    * required params: user_id
    * returned data: username, email, description, img_url

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
    * returned data: title, track_url, description, img_url
  - PATCH /api/tracks/:id
  - DELETE /api/tracks/:id

Comments
  - GET /api/tracks/:id/comments
  - POST /api/comments
  - DELETE /api/comments/:comment_id
