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
  description: 'By the Jackson 5',
  img_url: '',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484333205/track_audio/urejde2e2yuzuexnqey5.mp3',
  user_id: 1
)

Track.create!(
  title: 'Drops of Jupiter',
  description: 'By Train',
  img_url: '',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484336008/track_audio/dmi0ntz1actyrlpy3tob.mp3',
  user_id: 1
)
