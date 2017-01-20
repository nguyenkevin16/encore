# Encore

[encore.audio](http://www.encore-audio.us)

[trello](https://trello.com/b/w5o51KVc/encore)

## Minimum Viable Product

Encore is a full-stack web application inspired by [SoundCloud](http://www.soundcloud.com),
built on Ruby on Rails and React.js/Redux. In two weeks, this app will satisfy
the following minimum criteria with adequate CSS styling, smooth/bug-free navigation,
and seed data:

>Minimum Features:
- [x] Hosting on Heroku
- [x] Sign Up / Sign In / Sign Out / Demo
- [x] Production README
- [x] Song CRUD
- [x] Playing songs with progress bar with continuous play
- [x] Comments
- [x] User pages

>Bonus Features
- [x] Track Wave Forms
- [ ] Playlists
- [ ] Likes
- [ ] Search

## Design Docs
- [View Wireframes][wireframes]
- [React Components][components]
- [API endpoints][api-endpoints]
- [DB schema][schema]
- [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline (9 days)

### Phase 1: Backend setup, Front End Authentication, Navbar, Splash Page, Footer Component, Heroku Deployment (2 days)
Objective: Functioning rails project with front-end auth, navbar, and heroku deployment

>Components:
- SessionFormContainer
- SessionForm
- NavbarContainer
- Navbar
- Footer

### Phase 2: Tracks Model, API, Cloudinary Hosting, and Basic User Show Page (2 days)
Objective: Tracks can be created, read, edited, and destroyed through the API and hosted via Cloudinary

>Components:
- TrackIndexContainer
- TrackIndex
- TrackIndexItem
- TrackFormContainer
- TrackForm
- UserContainer
- User

### Phase 3: Playbar (2 days)
Objective: Tracks can be streamed without interruption

>Components:
- PlaybarContainer
- Playbar

### Phase 4: User Show, Discover, Trending Pages (1 day)
Objective: Users have a show page with a track index listing, Discover and Trending components display tracks

>Components:
- UserContainer
- User
  - UserDetails
  - UserImage
- DiscoverContainer
- Discover
- DiscoverItem
- TrendingContainer
- Trending
- TrendingItem

### Phase 5: Track Show Page, Comments Functionality (1 day)
Objective: Tracks have a show page displaying comments and track information

>Components:
- TrackShowContainer
- TrackShow
- Comment

### Phase 6: Cleanup, Styles, About, Credits (1 day)
Objective: Add about and credits pages for general additional info and clean up code/styling

>Components:
- About
- Credits
