# Component Hierarchy

## Persistent Components

NavbarContainer
  - Navbar
    * NavbarLeft - links to different pages
    * NavbarRight - buttons to session modals
      - NavbarRightLoggedIn
      - NavbarRightLoggedOut

FooterContainer
  - Footer
    * FooterLinks - links to github, linkedIn, about, credits
    * FooterLogo - display component
    * About
    * Credits

## Main Page Components

Welcome
  - Welcome
    * WelcomeDescriptions
    * WelcomeMessage
    * TrendingContainer
    * Trending
    * TrendingItem

UserContainer
  - User
    * UserDetails
    * UserImage
    * TrackIndexContainer
      - TrackIndex
      - TrackIndexItem

DiscoverContainer
  - Discover
  - DiscoverItem

TrackShowContainer
  - TrackShow
    * Comment

## Pop-Up Components

PlaybarContainer
  - Playbar

SessionContainer
  - SessionForm

TrackFormContainer
  - TrackForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "AppContainer" |
| "/"   | "WelcomePage" |
| "/discover" | "DiscoverContainer" |
| "/users/:userId" | "UserContainer" |
| "/about" | "About" |
| "/credits" | "Credits" |
