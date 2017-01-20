```js
{
  session: {
    current_user: {
      id: 1,
      username: '',
      description: '',
      avatar_url: '',  
    },
    errors: []
  },

  <!-- For discover/homepage or User Show Page -->
  tracks: {
    {
      0: {
        title: '',
        user_id: '',
        track_url: '',
        description: '',
        img_url: '',
      },

      1: {
        id: 1,
        title: '',
        user_id: '',
        track_url: '',
        description: '',
        img_url: '',
        user: {},
        comments: []
      },

      ...
    }
  }

  <!-- For use of persistent playbar -->
  playbar: {
    track: {
      title: '',
      user_id: '',
      title: '',
      track_url: '',
      description: '',
      img_url: ''
    },
    display: true,
  }

  <!-- For user show page only -->
  user: {
    id: 1,
    username: '',
    description: '',
    avatar_url: '',
    tracks: [],
  }
}
```
