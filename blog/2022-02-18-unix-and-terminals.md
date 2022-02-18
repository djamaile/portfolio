---
slug: unix-and-terminals-part-one
title: Unix terminals and shells (Part one)
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [linux, unix, terminals]
---

So, what are terminals actually and why do we need them? The concept of a terminal is that when we hook it up to a computer the computer can then send text characters in sequence to the terminal which can display character by character on the screen. Also, when a user types a character that charcater would be send from the terminal to the computer.

<!--truncate-->

:::note

This post is based on [this Brian wills video series](https://www.youtube.com/watch?v=07Q9oqNLXB4&list=PLFAC320731F539902).
It's mainly written for me study and that's why this is not published on other platforms. But feel free to use it as well.

:::

As the text is going in both directions the format was ASCII text. Let's look closer at the process.
process <-> terminal character device file <-> computer

In UNIX systems a process may communicate with the terminal through a file or to be specific a terminal character device file. For example, when a user types something that data gets send from the terminal to the computer and the OS will take that data and put it in the input buffer of the assiociated character device file.

The terminal character device file has a echo'ing mode which means that when the user type something the user would see that on his screen.

in UNIX we have processes that when they are started they expect inherit from their parent to open file descriptors (0 or 1). File descriptor zero we call standard in (stdin) and file descriptor one we call standard out (stdout).

process (0 / 1) -> write <- read terminal character device.

### Terminal emulators

Today we emulate terminals in software and thats why we call them terminal emulators. In UNIX systems the graphical user interface runs as a ordinary program, it's not a component of the Linux kernal.

When running a graphical environment in Linux the program which controls your screen and which gets the input directly from the mouse and the keyboard is called an X Window System server. When you then run a program which has a graphical interface like a web browser, these programs send their content to the X Window System server and the server is responsible for displaying those windows on the screen.

<!-- <insert diagram here> -->

Going back to terminal emulators, a terminal emulator is a program which sends window content to a X Window system server to display on screen. One thing to solve is how programs can interact with terminal emulators as if they were actual terminals. For this there is a mechanism called pseudo terminal device files.

<!-- <insert diagram here> -->

There are two files one called the slave and the other the master. The program which is imitating a terminal, reads and writes from the master and the program who actually wishes to use this fake terminal reads and writes from the slave.

### Character device files

Lastly to find your device files, you can look at:

```sh
/dev/pts/ (directory of pseudo-terminal-slaves)
/dev/tty ('controlling' terminal file)
/dev/ttyN ('virtual console' terminal files)
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
