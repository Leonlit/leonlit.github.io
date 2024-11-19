example archetypes
```
---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
layout: 'post'
thumbnail: "images/assignment_manager_0.png"
youtube: "0RKpf3rK57I"
github: "https://github.com/example/repo"
demo: "https://example.com/demo"
---

```