# hexo-generator-podcast
## install
```
npm install hexo-generator-podcast --save
```

## _config.yml
```
# Site
title: "YOUR TITLE"
subtitle: "YOUR SUBTITLE"
description: "YOUR DESCRIPTION"
author: AUTHOR
language: zh-CN
timezone: UTC
copyright: "COPYRIGHT"
owner: ITUNES-OWNER
email: ITUNES-EMAIL
category: Music
default_thumb: "/images/logo.jpg"

#Podcast
podcast:
    type: rss2
    path: podcast.xml
    limit: 20
    hub:
```

## post example(in source/_posts/)
```
---
title: TITLE
subtitle: SUBTITLE
date: AUTO_GEN
tags: 德沃夏克, Dvorak
category: podcast
media: /path/to/media
length: 6989--IN_BYTES
type: audio/mpeg
duration: XX:YY:AA
---
Some Excerpt.

<!--more-->

Content.

```

## Other
Please use rss2.
And very very much thx to [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed).