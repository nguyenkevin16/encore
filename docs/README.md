# Encore

[encore.audio](http://www.herokuapp.com)

## Minimum Viable Product

Encore is a full-stack web application inspired by [SoundCloud](http://www.soundcloud.com),
built on Ruby on Rails and React.js/Redux. In two weeks, this app will satisfy
the following minimum criteria with adequate CSS styling, smooth/bug-free navigation,
and seed data:

>Minimum Features:
- [ ] Hosting on Heroku
- [ ] Account creation
- [ ] Sign In / Sign Out / Demo
- [ ] Upload / Edit / Delete audio files
- [ ] Stream tracks without interruption
- [ ] User pages / Track listings
- [ ] Track comment functionality

>Bonus Features
- [ ] Track Wave Forms
- [ ] Playlists
- [ ] Likes
- [ ] Search

## Design Docs
- [View Wireframes][wireframes]
- [React Components][components]
- [API endpoints][api-endpoints]
- [DB schema][schema]
- [Sample State][sample-state]

[wireframes]: /wireframes
[components]: /component-hierarchy.md
[sample-state]: /sample-state.md
[api-endpoints]: /api-endpoints.md
[schema]: /schema.md

## Implementation Timeline (11 days)

### Phase 1: Backend setup, Front End Authentication, Navbar (1 day)
Objective: Functioning rails project with front-end auth and navbar
Components:
- SessionContainer
- SessionForm
- NavContainer
- Nav
- NavSession

### Phase 2: Tracks Model, API, and components (2.5 days)
Objective: Tracks can be created, read, edited, and destroyed through the API
Components:
- TrackIndex
- TrackIndexItem
- TrackShowContainer
- TrackShow
- TrackFormContainer
- TrackForm

### Phase 3: Playbar (2.5 days)
Objective: Tracks can be streamed without interruption
Components:
- PlaybarContainer
- Playbar
- PlayButtons
- PlayDescription
- PlayTime

### Phase 4: User Show Page (1.5 day)
Objective: Users have a show page with a track index listing
Components:
- UserShowContainer
- UserHeader
- UserSidebar

### Phase 5: User Show Page (1.5 day)
Objective: Users have a show page with a track index listing
Components:
- UserShowContainer
- UserHeader
- UserSidebar

### Phase 6: Splash Page (1 day)
Objective: Root splash page renders gif or greeting component
Components:
- Splash
- GreetingContainer
- Greeting

### Phase 7: Footer / More Styling (1 day)
Objective: Add footer component and links for style/perfect
Components:
- Footer
