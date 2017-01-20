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
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484866936/track_photos/mmeeymjgsorhyqoyvmwx.jpg',
  description: 'Train is an American roots rock band from San Francisco,
    formed in 1993. The band currently consists of Patrick Monahan
    (vocals), Luis Maldonado (guitar), Hector Maldonado (bass, vocals),
    Drew Shoals (drums), Jerry Becker (keyboards, guitar), and Jimmy
    Stafford (part-time lead guitar).',
)

User.create!(
  username: 'goo goo dolls',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867050/track_photos/zylxlvmbuke87sybbdpj.jpg',
  description: "The Goo Goo Dolls are an American rock band formed in
    1986 in Buffalo, New York, by vocalist and guitarist John Rzeznik,
    vocalist and bassist Robby Takac, and drummer George Tutuska."
)

User.create!(
  username: 'hozier',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867108/track_photos/fmiwigb2meyib8ioxl4d.jpg',
  description: "Andrew Hozier-Byrne (born 17 March 1990), known professionally
    by the mononym Hozier, is an Irish musician, singer and songwriter from
    County Wicklow. He released his debut EP, featuring the hit single
    'Take Me' to 'Church', in 2013 and his second EP, From Eden, in 2014.
    His debut studio album, Hozier, was released in Ireland in September
    2014 and globally in October 2014.",
)

User.create!(
  username: 'chris stapleton',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484869212/track_photos/nvtqc7muj8ajvhgrpvkt.jpg',
  description: 'Christopher Alvin "Chris" Stapleton (born April 15,
    1978) is an American musician and songwriter. He is an established
    songwriter with six number-one songs including the five-week number-one
    "Never Wanted Nothing More" recorded by Kenny Chesney, "Love\'s
    Gonna Make It Alright" recorded by George Strait, and "Come Back Song"
    recorded by Darius Rucker.',
)

User.create!(
  username: 'atmosphere',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484870245/track_photos/lhtsqpirc3lmljkendcs.jpg',
  description: 'Atmosphere is an American hip hop duo from Minneapolis,
    Minnesota, consisting of rapper Slug (Sean Daley) and DJ/producer
    Ant (Anthony Davis). Since its formation in 1989, the group has
    released eight studio albums and ten extended plays.',
)

User.create!(
  username: 'daughter',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484870995/track_photos/s6jn0eyqzbydjk7l5tsj.jpg',
  description: 'Daughter are an indie folk band from England. Fronted
    by North London native Elena Tonra (born 15 January 1990), they
    were formed in 2010 after the addition of Swiss-born guitarist Igor
    Haefeli and drummer Remi Aguilella from France. They have released
    four EPs, three singles and two albums, and are currently signed to
    Glassnote (North America) and 4AD (Europe). After playing the
    local London circuit, they toured supporting Ben Howard around
    Europe and have since played headlining tours around North America,
    Europe and Australia.',
)

User.create!(
  username: 'jack johnson',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484872235/track_photos/ou2xfmevikk8nabt3bu5.jpg',
  description: 'Jack Hody Johnson (born May 18, 1975) is an American
    singer-songwriter, musician, actor, record producer, documentary
    filmmaker and a former professional surfer. Johnson is known
    primarily for his work in the soft rock and acoustic genres.',
)

User.create!(
  username: 'third eye blind',
  password: 'password',
  avatar_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484873578/track_photos/rpnvnduia0kr2yxcitfo.jpg',
  description: 'Third Eye Blind is an American rock band formed in San
    Francisco in 1993. The songwriting duo of Stephan Jenkins and Kevin
    Cadogan signed the band\'s first major label recording contract with
    Elektra Records in 1996, which was later reported as the largest
    publishing deal ever for an unsigned artist.'
)

Track.create!(
  title: 'Drops of Jupiter',
  description: '"Drops of Jupiter (Tell Me)" (simply "Drops of Jupiter" on the album) is a Grammy Award-winning song written and recorded by American rock band Train.',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867437/track_photos/wxrqbzfe7uswilpwi2fc.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484867413/track_audio/jnivn2ivzyqdwciurxzb.mp3',
  user_id: 1
)

Track.create!(
  title: 'Save Me, San Francisco',
  description: "Save Me, San Francisco is the title of California rock band Train's fifth studio album and the first of two albums recorded as a three-piece.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867504/track_photos/q5nkbw0t19vfknh4jfhv.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484867490/track_audio/vedbutw6kxwwbqx64iq9.mp3',
  user_id: 1
)

Track.create!(
  title: 'Calling All Angels',
  description: "'Calling All Angels' is the title of a 2003 song by the rock band Train. It was included on the band's third studio album, My Private Nation, and produced by Brendan O'Brien.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867610/track_photos/xk8f3iusegoh3mmm2knq.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484867593/track_audio/pkoadyujp08mgtwnp9wr.mp3',
  user_id: 1
)

Track.create!(
  title: 'Slide',
  description: '"Slide" is a song recorded by American alternative rock group The Goo Goo Dolls.',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867891/track_photos/hyzhr1mo9iaw7g9uvhmt.png',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484867867/track_audio/vbf6aknelrxupyio9o61.mp3',
  user_id: 2
)

Track.create!(
  title: 'So Alive',
  description: 'Boxes is the eleventh studio album by American rock band Goo Goo Dolls. It was released on May 6, 2016, through Warner Bros. Records.',
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484867989/track_photos/jwgwlwz7h8p2tvhkevq8.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484867974/track_audio/odqt21qfjulyhkce5twn.mp3',
  user_id: 2
)

Track.create!(
  title: 'Name',
  description: "'Name' is an alternative rock song by the American rock band Goo Goo Dolls. It was released in September 1995 as the third single from the album A Boy Named Goo.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868252/track_photos/uweo9mywe0rhrogpnkza.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868166/track_audio/ivhiz1sk4rbtiiunk0cg.mp3',
  user_id: 2
)

Track.create!(
  title: 'Iris',
  description: "'Iris' is a song by American alternative rock band Goo Goo Dolls. Originally written for the soundtrack of 1998 film City of Angels, the song was later included on the band's sixth album Dizzy Up the Girl.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868374/track_photos/epr8fa31efntulxwwj65.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868341/track_audio/unumfjwigvysiagsl9bq.mp3',
  user_id: 2
)

Track.create!(
  title: 'Cherry Wine',
  description: "'Cherry Wine' is a song by Hozier released in February 2016 as the final single from the 2014 album Hozier.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868616/track_photos/mmv6qecljqows2g0ejxw.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868606/track_audio/fjm2nla9nfbzkln237zn.mp3',
  user_id: 3
)

Track.create!(
  title: 'Work Song',
  description: "'Work Song' is a song written and performed by Irish musician Hozier. It was released as the fourth single from his debut studio album Hozier (2014). It was released as the album's fifth single to United States rock radio on 16 March 2015.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868710/track_photos/nzi0gsvi3ozta8yam73o.png',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868678/track_audio/hk7exyrve3tw7gguwnwi.mp3',
  user_id: 3
)

Track.create!(
  title: 'Take Me to Church',
  description: "'Take Me to Church' is a song by Irish musician Hozier for his debut extended play (EP) Take Me to Church (2013), as well as his self-titled debut album (2014).",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868801/track_photos/v1lnhzyiib3nrkmr6vei.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868772/track_audio/i9l8uhhp6tjh671mh6cw.mp3',
  user_id: 3
)

Track.create!(
  title: 'Jackie and Wilson',
  description: "'Jackie and Wilson' was released as the sixth single from the self-titled album, 'Hozier', on 29 September 2015.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484868886/track_photos/xj8zjeq2t6rrzowshtp5.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484868869/track_audio/kek0hvpju26fozpml1hk.mp3',
  user_id: 3
)

Track.create!(
  title: 'Tennessee Whiskey',
  description: "\"Tennessee Whiskey\" is the title of a country song written by Dean Dillon and Linda Hargrove. It was originally recorded by American country music artist David Allan Coe for his album of the same name Tennessee Whiskey, whose version peaked at number 77 on the Billboard Hot Country Singles chart in 1981.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484869543/track_photos/m5gnovlzoo8ujnokehw4.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484869487/track_audio/mqox3hz0mhj5qskylskt.mp3',
  user_id: 4
)

Track.create!(
  title: 'Fire Away',
  description: "Traveller is the debut studio album by American country music artist Chris Stapleton. The album was produced by Dave Cobb and was released on May 5, 2015, through Mercury Nashville.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484869543/track_photos/m5gnovlzoo8ujnokehw4.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484869698/track_audio/kvttnwfb0jvxuu3pwp8v.mp3',
  user_id: 4
)

Track.create!(
  title: 'Traveller',
  description: "Described by music critics as an old-school country, Southern rock record, Traveller received critical acclaim and earned Stapleton several awards.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484869543/track_photos/m5gnovlzoo8ujnokehw4.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484869810/track_audio/edadilfakbh72omrh16m.mp3',
  user_id: 4
)

Track.create!(
  title: 'Sunshine',
  description: "The song \"Sunshine\", from the Bad Summer EP, was released as a single. Despite not having a music video or any promotion, the song became popular among the band's core fan base, eventually becoming a staple in live shows. Later, in 2015, the group released a music video through Rhymesayers Entertainment.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484870100/track_photos/jjx3xb6hljlewicdspcs.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484870070/track_audio/py2q71fqxffqkfpkyldv.mp3',
  user_id: 5
)

Track.create!(
  title: 'Yesterday',
  description: "Likely Atmosphere's most commonly known album of the 21st century, it has gained wide attention from a vast audience, featuring Slug's story-telling-rap style songs such as \"Yesterday\", a song symbolizing Slug's relationship with his father.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484870437/track_photos/ecmj1ilyernntfm6gg8v.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484870366/track_audio/getwhwju3v1bwbocgyr9.mp3',
  user_id: 5
)

Track.create!(
  title: 'Smother',
  description: "Their first single proper, \"Smother\", was released in October of 2012. It was playlisted by both BBC Radio 1 and 6Music, while being awarded Single of the Week by long-time supporter Huw Stephens.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484871150/track_photos/qh720glao6hrb2pxobtk.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484871123/track_audio/tbbpvov0qplxuxwbfakj.mp3',
  user_id: 6
)

Track.create!(
  title: 'Landfill',
  description: "",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484871307/track_photos/olxaq6b4omajfg04ay8h.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484871285/track_audio/rxcfhx3nhbt9dojzjs34.mp3',
  user_id: 6
)

Track.create!(
  title: 'Medicine',
  description: "",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484871484/track_photos/hnpi8omfsnmizdhvj4zi.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484871433/track_audio/ixndsv6sqihlrnxwq6sd.mp3',
  user_id: 6
)

Track.create!(
  title: 'Youth',
  description: "The band's song \"Youth\" was played in an advertisement for the Tour de France on ITV4; as well as in a commercial by Norwegian airline company Widerøe.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484871547/track_photos/sm9gmjlqup8eysysxjkx.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484871532/track_audio/zedgloyutvbvj7gnai3h.mp3',
  user_id: 6
)

Track.create!(
  title: 'Angel',
  description: "Jack Johnson explained to the Sun newspaper January 25, 2008 that he originally wrote and recorded \"Angel\" as a Christmas present for his wife Kim: \"She likes the song. What keeps me writing love songs is her reaction to them when I play them to her.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484872588/track_photos/yf1apdy6aqvvzwrlz0cf.png',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484872201/Jack_Johnson_Angel_go4ei9.mp3',
  user_id: 7
)

Track.create!(
  title: 'Do You Remember',
  description: "It's just a simple love song with some personal moments I wasn't afraid to share. Just kind of silly things like me locking my bike to my wife's - who wasn't even my girlfriend back then, but just this girl I was trying to get - so she couldn't ride off after class. It's just stuff I thought might make people laugh and feel good.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484872638/track_photos/tv1aluyuhumqm5v903gu.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484872198/Jack_Johnson_-_Do_You_Remember_tukiae.mp3',
  user_id: 7
)

Track.create!(
  title: 'Breakdown',
  description: "\"Breakdown\" is a song written by Jack Johnson, Dan Nakamura & Paul Huston and sung by Jack Johnson. It is the eleventh track on the album In Between Dreams which was released in February 2005.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484872638/track_photos/tv1aluyuhumqm5v903gu.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484872200/Jack_Johnson_-_Breakdown_qq3gxd.mp3',
  user_id: 7
)

Track.create!(
  title: 'Banana Pancakes',
  description: "\"It's a wakeup in the morning and make breakfast with your family kind of song. It started when my wife was busy doing something and I wanted to distract her.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484872638/track_photos/tv1aluyuhumqm5v903gu.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484872200/Jack_Johnson_-_banana_pancakes_e0jj90.mp3',
  user_id: 7
)

Track.create!(
  title: 'Semi-Charmed Life',
  description: "\"Semi-Charmed Life\" is a song by American alternative rock band Third Eye Blind. It was released in June 1997 as the lead single from their self-titled debut album. It was a major hit of the 1990s, reaching number 4 in the U.S., number 1 on the Modern Rock Tracks, number 2 in Canada, and making the Top 40 in the UK. VH1 has named the song as the 34th best of the 1990s.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484873648/track_photos/qiqiov15lxqfmn7mtbey.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484873248/Third_Eye_Blind_-_Semi-Charmed_Life_HQ_Official_k32apo.mp3',
  user_id: 8
)

Track.create!(
  title: 'Never Let You Go',
  description: "\"Never Let You Go\" is a song by American rock band Third Eye Blind. It was released in January 2000 as the second single from their second album, Blue. The song peaked at number 14 on the US Billboard Hot 100 and also spent three weeks at number-one in Canada.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484873786/track_photos/uqq5oolun8r5a45nmf5c.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484873254/Third_Eye_Blind_-_Never_Let_You_Go_r1yqdp.mp3',
  user_id: 8
)

Track.create!(
  title: 'Jumper',
  description: "\"Jumper\" is a song by the American rock band Third Eye Blind and written by vocalist Stephan Jenkins. It was released in May 1998 as the fifth and final single from their self titled album. The song reached number 5 on the U.S. Billboard Hot 100 chart The song also peaked number 9 on the U.S. Modern Rock Tracks chart.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484873831/track_photos/yrmoyznluobkogq9gwzx.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484873249/Third_Eye_Blind_-_Jumper_Complete_Official_Music_Video_eec5nc.mp3',
  user_id: 8
)

Track.create!(
  title: 'How\'s It Gonna Be',
  description: "\"How's It Going to Be\" is a song by the American rock band Third Eye Blind. It was released in November 1997 as the third single from their self-titled debut album. The song deals with the trauma of the ending of a relationship and how the transition from friends to acquaintances is a brutal one. It reached number nine on the US Billboard Hot 100 chart, to become the band's second consecutive top 10 single, following \"Semi-Charmed Life\". In the UK, the single peaked at number 51.",
  img_url: 'https://res.cloudinary.com/nguyenkevin16/image/upload/v1484873901/track_photos/abvloskrb7uce2yijcgz.jpg',
  track_url: 'https://res.cloudinary.com/nguyenkevin16/video/upload/v1484873240/Hows_It_Gonna_Be_-_Third_Eye_Blind_idtcbv.mp3',
  user_id: 8
)
