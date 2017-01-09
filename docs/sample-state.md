{
  session: {
    current_user: {
      username: '',
      email: '',
      description: '',
      img_url: '',  
    }
  },

  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createTrack: { errors: [] },
    createComment { errors: [] },
  }

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
        title: '',
        user_id: '',
        track_url: '',
        description: '',
        img_url: '',
      },

      ...
    }
  }

  <!-- For use of persistent playbar -->
  current_track: {
    title: '',
    user_id: '',
    title: '',
    track_url: '',
    description: '',
    img_url: ''
  }

  <!-- For current track show page only -->
  comments: {
    0: {
      track_id: '',
      author_id: '',
      body: '',
    },

    1: {
      track_id: '',
      author_id: '',
      body: '',
    }

    ...
  }
}
