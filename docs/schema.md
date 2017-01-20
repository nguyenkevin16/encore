# Schema

## users
column name     | data type  | details
----------------|------------|-----------------------
id              | integer    | not null, primary key
username        | string     | not null, indexed, unique
session_token   | string     | not null, indexed, unique
password_digest | string     | not null
description     | text       |
avatar_url      | string     |
created_at      | datetime   | not null
updated_at      | datetime   | not null

## tracks
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
user_id     | integer    | not null, foreign key, indexed
title       | string     | not null
track_url   | string     | not null
description | string     |
img_url     | string     |
created_at  | datetime   | not null
updated_at  | datetime   | not null

## comments
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
track_id    | integer    | not null, foreign key, indexed
user_id     | integer    | not null, foreign key, indexed
body        | text       | not null
created_at  | datetime   | not null
updated_at  | datetime   | not null
