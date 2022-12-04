---
# try also 'default' to start simple
theme: ./

# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false
# info: |
#   ## Slidev Starter Template
#   Presentation slides for developers.
#   Learn more at [Sli.dev](https://sli.dev)

# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported'
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'shiki'
# show line numbers in code blocks
lineNumbers: true
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: 'buid'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'build'

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
routerMode: 'history'
# aspect ratio for the slides
aspectRatio: '16/9'
# real width of the canvas, unit in px
canvasWidth: 980

# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  logoHeader: '/logo.jpeg'
  # eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
  # eventUrl: 'https://vuejs.amsterdam/'
  # twitter: '@hieubq90'
  # twitterUrl: 'https://twitter.com/hieubq90'

# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080


# default frontmatter applies to all slides
defaults:
  layout: 'default'
  # ...

layout: intro

# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: false

# use UnoCSS
css: unocss
---

# Slidev forked from the Penguin Theme

🐧 slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: presenter
presenterImage: '/logo.jpg'
---

# Bùi Quang Hiếu

FE Tech Lead Engineer at <a  href="https://vinbigdata.com/" favicon="http://www.google.com/s2/favicons?domain=vinbigdata.com" >VinBigdata</a>

- Hanoi Capital, Vietnam
- I often write at <a href="https://dev.to/hieubq90"> dev.to/@hieubq90</a>
- Blog & Portfolio <a href="https://hieubq90.space">hieubq90.space</a>
- Say hi at <a href="https://twitter.com/hieubq90"><logos-twitter mr-1 />@hieubq90</a>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>                                      | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |


---
layout: text-image
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
caption: 'I am a penguin'
---

# This is a peguin

Arepa ipsum dolor amet jalabola! aenean sit tequeños se prendio esta chamito;? Nisl nojoda eu amet in? Nisl cuál es la guachafita ni lava ni presta la batea háblame cloro gravida sifrino macundal panita; Sed háblame cloro nunc empanada ac coroto Na webona vladimil parchita? 

- Cacique panita sit Se prendio la labia gravida Praesent tequeño. 
- Qué paso mi pana?! elit parchita molleja aguacate vergación, háblame mollejúo chamito est burda mauris morbi;

---
layout: text-image
reverse: true
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
---

# This is a reverse peguin

Arepa ipsum dolor amet jalabola! aenean sit tequeños se prendio esta mierdaa menool ladilla chamito;? Nisl nojoda eu amet in? Nisl cuál es la guachafita ni lava ni presta la batea háblame cloro gravida sifrino macundal panita; Sed háblame cloro nunc empanada ac coroto Na webona vladimil parchita? Cacique ladilla sit Se prendio el peo labia gravida Praesent tequeño. Qué paso mi pana?! elit parchita molleja aguacate vergación, háblame mollejúo chamito est burda mauris morbi;

---
layout: new-section

---

# New wild section appeared

![penguin-work](https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif)

---
eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
eventUrl: 'https://vuejs.amsterdam/'
twitter: '@alvarosabu'
twitterUrl: 'https://twitter.com/alvarosabu'

---

# Code

Use code snippets and get the highlighting directly!

```ts
// main.ts

import { createApp } from 'vue';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
  // Global Options go here
});

export const app = createApp(App);

app.use(VueDynamicForms);
```
--- 
layout: two-cols
--- 
Awiwiiw

```ts
// main.ts

import { createApp } from 'vue';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
  // Global Options go here
});

export const app = createApp(App);

app.use(VueDynamicForms);
```

::right::

```vue
<template>
  <div>
    <TheToolbar />
    <slot />
  </div>
</template>
```

---
layout: text-window

---

# Consoles

Use code snippets and get the highlighting directly into a nice looking window!

::window::

```ts
// main.ts

import { createApp } from 'vue';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
  // Global Options go here
});

export const app = createApp(App);

app.use(VueDynamicForms);
```
---
layout: text-window
reverse: true
logoHeader: '/logo.svg'
eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
eventUrl: 'https://vuejs.amsterdam/'
twitter: '@alvarosabu'
twitterUrl: 'https://twitter.com/alvarosabu'
---

# Embedded stuff

Use window to show a live demo of any page, or even a sub component!

::window::

<div class="overflow-hidden relative w-full aspect-16-9">
<iframe height="300" style="width: 100%;" scrolling="no" title="Text Clock" src="https://codepen.io/searleb/embed/pvQaJB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/searleb/pen/pvQaJB">
  Text Clock</a> by Bill Searle (<a href="https://codepen.io/searleb">@searleb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>
---
class: 'grid text-center align-self-center justify-self-center'
---

# Gracias totales

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
