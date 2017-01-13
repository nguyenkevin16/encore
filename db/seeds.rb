# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: 'guest',
  password: 'password',
  description: 'Train is an American roots rock band from San Francisco, formed in 1993. The band currently consists of Patrick Monahan (vocals), Luis Maldonado (guitar), Hector Maldonado (bass, vocals), Drew Shoals (drums), Jerry Becker (keyboards, guitar), and Jimmy Stafford (part-time lead guitar).')

Track.create!(
  title: 'I Want You Back',
  description: 'Jackson 5',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484344439/track_photos/uyn8o41we302cknd9chp.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484333205/track_audio/urejde2e2yuzuexnqey5.mp3',
  user_id: 1
)

Track.create!(
  title: 'Drops of Jupiter',
  description: 'Train',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484344470/track_photos/q3sq2ac9qsvxluaztdcx.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484336008/track_audio/dmi0ntz1actyrlpy3tob.mp3',
  user_id: 1
)

Track.create!(
  title: 'Save Me, San Francisco',
  description: 'Train',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484345073/track_photos/vp7m2hhcejdcgnx63xyc.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484345132/track_audio/otodiocseltmh7lcgs3p.mp3',
  user_id: 1
)

Track.create!(
  title: 'Slide',
  description: 'Goo Goo Dolls',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484347004/track_photos/bkvpsexade4mkg3rb3yb.png',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484347056/track_audio/uutgymcegc0iahvtm2on.mp3',
  user_id: 1
)

Track.create!(
  title: 'Dancing in the Moonlight',
  description: 'King Harvest',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484347815/track_photos/vcq42qxfdiu9ccfnbs6o.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484347830/track_audio/m74vleqjmst1jekdklni.mp3',
  user_id: 1
)
