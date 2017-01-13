# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'guest', password: 'password', description: 'Train is an American roots rock band from San Francisco, formed in 1993. The band currently consists of Patrick Monahan (vocals), Luis Maldonado (guitar), Hector Maldonado (bass, vocals), Drew Shoals (drums), Jerry Becker (keyboards, guitar), and Jimmy Stafford (part-time lead guitar).')
