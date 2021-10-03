---
slug: small-react-ion-from-kanji-to-hiragana
title: 'Small React(ion): From Kanji to Hiragana!'
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [typescript, javascript, react]
---

I am starting a series talking about my small React applications. To begin, we start with this small application I wrote about 7 months ago. If you just want to see the code, here you go: https://github.com/djamaile/kanji-to-hiragana/

<!--truncate-->

### Background

A couple of months ago I was studying Japanese. I was about to graduate (I just did!) and I wanted to celebrate that with a trip to Japan. Unfortunately, that trip got canceled. But we still have this cool program!

I first started with learning hiragana and hiragana is the Japanese alphabet. After that, I started learning katakana which is also an alphabet but it is only used to describe western words/names. Then I started learning kanji. Kanji are characters to describe nouns, adjectives, adverbs, and verbs. In short, kanji are characters for words we could also describe in hiragana.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ks6twc0c71qy3spy0jqa.gif)

Example: Hello world (English) -> Hello せかい (Hiragana) -> Hello 世界 (Kanji)

Note: There are probably way better resources to explain this so, I suggest hitting up Google if you are more interested in this.

So, I was studying Japanese with Anki. Anki is a software program where we can use flashcards. Sometimes I would get cards with kanji on them and I would have no idea how to pronounce the word. The back of the flashcard would only tell the English translation and not show the full word in hiragana.

Furthermore, knowing the hiragana in the kanji could not only help with pronunciation but also help me better remembering the kanji. So, I wanted to translate the words with kanji in them to hiragana. Well for that I needed an API of some sort. Surprisingly I found one from https://labs.goo.ne.jp/. I can't exactly remember how I found but it did have the required API!

### Application

So, I started writing my React application with this simple idea: I want to input kanji and get only hiragana back.

First, I checked if the given input was Japanese and this can be done with simple regex. If the input was not Japanese then an error would show up and alarm the user.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zeq4hddm8exdckyrth70.png)

Second, the actual translation from kanji to hiragana. When I was building this I very much into hooks. So, I made a custom hook for the translation. In the hook, we would use the function above to check if the input is Japanese. After the check, I take the input and send a request to the API and store the result.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/q230d7xsp4o38t7c5z69.png)

Lastly, I put two text boxes on the homepage and imported the hook. The application was done and it worked! I do have the mention that they are probably caveats, because of how complicated kanji is. But for the time I used it, it worked well!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/cof70w5wgezbk6ayzeea.gif)

### Future

Well, I stopped using it, because I eventually found better Anki decks. But if someone has an idea or wants to contribute please let me know!
