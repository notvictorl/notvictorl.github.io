---
title: Music Quiz
date: 2024-06-25
tags:
  - js
  - nodejs
---
![[music-quiz.png]]

[GitHub](https://github.com/fetf/music-quiz)

> Discord bot that plays music and allows you to guess the song and artist in chat.

I built the discord bot with a friend ([Richard](https://github.com/RichardSba)) in Node.js to create a better version of the game based on similar music quizzes we have played before.

Some notable difficulties and achievements were:

1. **Implementation of command handler to better manage increasing size of code and distribute functionality.** Instead of terribly organized if/else statements, command handler was implemented but also required global variables and functions tied to objects, which made use of multi-paradigm properties I learned in class.

2. **Extensive use of Regex for the best possible open-response guessing experience.** A lot of titles include featured artists, alternative titles, mixed languages, or movie titles, so I had to adjust to a lot of different types of song titles and allow for the commonly known correct title(s) to be guessed. Additionally, minor spelling mistakes were allowed to give points for typos or alternate word spellings (British English).

3. **A LOT of work to get the right audio, song title, and artist.** Bugs kept popping up when playing music quiz games where the one of the song info was incorrect, so a lot of work was done to make sure the right audio plays and for that song the bot is checking for the right artist and right song title with a proper album cover. Otherwise, it's a huge gameplay bug.

---
Our go to song:
<iframe style="border-radius:11px" src="https://open.spotify.com/embed/track/1000nHvUdawXuUHgBod4Wv?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; fullscreen; picture-in-picture" loading="lazy"></iframe>