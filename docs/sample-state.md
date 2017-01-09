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

  current_track: {
    title: '',
    user_id: '',
    title: '',
    track_url: '',
    description: '',
    img_url: ''
  }

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
