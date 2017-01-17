# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: 'train',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484678619/track_photos/msovvennllhwvhft9muw.jpg',
  description: 'Train is an American roots rock band from San Francisco, formed in 1993. The band currently consists of Patrick Monahan (vocals), Luis Maldonado (guitar), Hector Maldonado (bass, vocals), Drew Shoals (drums), Jerry Becker (keyboards, guitar), and Jimmy Stafford (part-time lead guitar).',
)

User.create!(
  username: 'goo goo dolls',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484679152/track_photos/glivqdv6l0rmdz4ltqbo.jpg',
  description: "The Goo Goo Dolls are an American rock band formed in
    1986 in Buffalo, New York, by vocalist and guitarist John Rzeznik,
    vocalist and bassist Robby Takac, and drummer George Tutuska.
    Mike Malinin was the band's drummer from January 1995 until
    December 27, 2013 (but not made an official member until 1998).
    Although renowned for their commercially successful 1998 single
    'Iris', they have had several other notable and popular singles
    including 'Name' and 'Naked' from 1995's A Boy Named Goo. 'Slide',
    'Black Balloon', 'Dizzy', and 'Broadway' from 1998's Dizzy Up the
    Girl, 'Here Is Gone' from 2002's Gutterflower, 'Better Days',
    'Give a Little Bit', and 'Stay with You' from 2006's Let Love In
    (although 'Give A Little Bit' was originally released on the 2004
    live CD/DVD album Live in Buffalo: July 4th, 2004), and 'Home'
    from 2010's Something for the Rest of Us. The Goo Goo Dolls have
    had 19 top ten singles on various charts, and have sold more than
    12 million albums worldwide.",
)

User.create!(
  username: 'hozier',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484680416/track_photos/zg6isdfnz99fbz16mpfh.jpg',
  description: "Andrew Hozier-Byrne (born 17 March 1990), known professionally
    by the mononym Hozier, is an Irish musician, singer and songwriter from
    County Wicklow. He released his debut EP, featuring the hit single
    'Take Me' to 'Church', in 2013 and his second EP, From Eden, in 2014.
    His debut studio album, Hozier, was released in Ireland in September
    2014 and globally in October 2014.",
)

Track.create!(
  title: 'Drops of Jupiter',
  description: '"Drops of Jupiter (Tell Me)" (simply "Drops of Jupiter" on the album) is a Grammy Award-winning song written and recorded by American rock band Train.',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484344470/track_photos/q3sq2ac9qsvxluaztdcx.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484336008/track_audio/dmi0ntz1actyrlpy3tob.mp3',
  user_id: 1
)

Track.create!(
  title: 'Save Me, San Francisco',
  description: "Save Me, San Francisco is the title of California rock band Train's fifth studio album and the first of two albums recorded as a three-piece.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484345073/track_photos/vp7m2hhcejdcgnx63xyc.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484345132/track_audio/otodiocseltmh7lcgs3p.mp3',
  user_id: 1
)

Track.create!(
  title: 'Slide',
  description: '"Slide" is a song recorded by American alternative rock group The Goo Goo Dolls.',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484347004/track_photos/bkvpsexade4mkg3rb3yb.png',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484347056/track_audio/uutgymcegc0iahvtm2on.mp3',
  user_id: 2
)

Track.create!(
  title: 'Cherry Wine',
  description: "'Cherry Wine' is a song by Hozier released in February 2016 as the final single from the 2014 album Hozier.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484680474/track_photos/wpkeg3xt2xbdeeq8twxs.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484680644/track_audio/olorluiab7ue8ddymqcv.mp3',
  user_id: 3
)

Track.create!(
  title: 'Work Song',
  description: "'Work Song' is a song written and performed by Irish musician Hozier. It was released as the fourth single from his debut studio album Hozier (2014). It was released as the album's fifth single to United States rock radio on 16 March 2015.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484680474/track_photos/wpkeg3xt2xbdeeq8twxs.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484681937/track_audio/crafcdmledjxpezxr7no.mp3',
  user_id: 3
)
