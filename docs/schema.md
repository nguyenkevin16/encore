# Schema

## users
column name     | data type  | details
----------------|------------|-----------------------
id              | integer    | not null, primary key
username        | string     | not null, indexed, unique
session_token   | string     | not null, indexed, unique
password_digest | string     | not null
email           | string     | not null
description     | text       |
user_img        | attachment |

## tracks
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
user_id     | integer    | not null, foreign key, indexed
title       | string     | not null
track_url   | string     | not null
description | string     |
track_img   | attachment |

## comments
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
track_id    | integer    | not null, foreign key, indexed
author_id   | integer    | not null, foreign key, indexed
body        | text       | not null
