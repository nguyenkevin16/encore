# Component Hierarchy

## Persistent Components

NavContainer
  - Nav
    * NavSession - buttons to session forms
    * NavUser - dropdown for user links
    * NavLogo - button to homepage
    * NavSearch(bonus)

FooterContainer
  - Footer
    * FooterConnectLinks (github, linkedIn)
    * FooterWebpageLinks (about)

## Main Page Components

Splash
  - GreetingContainer
    * Greeting
  - SplashAddContainer
    * 3 x SplashAdd

HomeContainer
  - HomeTrackComponent

UserShowContainer
  - UserHeader
  - UserSidebar
  - TrackIndex
    * TrackIndexItem

TrackShowContainer
  - UserHeader
  - UserSidebar
  - TrackShow
    * CommentIndex
      - CommentIndexItem

## Pop-Up Components

PlaybarContainer
  - Playbar
    * PlayButtons
    * PlayProgressBar
    * PlayDescription
    * PlayTime

SessionContainer
  - SessionForm

TrackFormContainer
  - TrackForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Splash" |
| "/sign-up" | "SessionContainer" |
| "/sign-in" | "SessionContainer" |
| "/home" | "HomeContainer" |
| "/discover" | "HomeContainer" |
| "/home/user/:userId" | "UserShowContainer" |
| "/home/user/:userId/create" | "TrackFormContainer" |
| "/home/track/:trackId" | "TrackShowContainer" |
