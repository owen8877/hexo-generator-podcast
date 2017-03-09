# hexo-generator-podcast
## version 2.0.0
- Not compatible with 1.y.z! (Just to remind you that the configs are moved)

## install
```
npm install hexo-generator-podcast --save
```

## _config.yml
```yaml
# Site
title: "YOUR TITLE"
description: "YOUR DESCRIPTION"
author: AUTHOR
timezone: UTC
default_thumb: "/images/logo.jpg"

#Podcast
podcast:
    type: rss2
    path: podcast.xml
    limit: 20
    hub:
    url: https://URL/to/static/resources
    description: 
    language: zh-CN
    copyright: "COPYRIGHT"
    owner: ITUNES-OWNER
    email: ITUNES-EMAIL
    category: CATEGORY
```

## post example(in source/_posts/)
```
---
title: TITLE
subtitle: SUBTITLE
date: AUTO_GEN
tags: 
  - TAG
category: podcast # must be exactly `podcast`
media: /path/to/media # placed under //URL/to/static/resources/path/to/media
image: /path/to/episode/image # same as above, but somehow itunes doesn't support episode image as it should do
length: 6989--IN_BYTES
type: audio/mpeg
duration: XX:YY:AA
chapter:
  [
    ["00:00:00.000", "Title 1"],
    ["OTHER STARTTIME", "Another title"]
  ]
---
Some Excerpt.

<!--more-->

Content.

```

## Other
Please use rss2.
And very very much thx to [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed).
