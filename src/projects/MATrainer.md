---
title: "Martial Arts Trainer"
summary: "Augment your Martial Arts training! This Martial Arts Trainer offers a digital database to store your martial arts cirriculum for review and self-training to help achieve mastery."
image: /images/MATrainer.png
imageAlt: "Screenshots of Martial Arts Trainer app"
tech:
  - "JavaScript"
  - "React"
  - "Node"
  - "MYSQL"
  - "Express"
  - "BCrypt"
siteUrl: "#https://matrainer-e0k8.onrender.com/"
repoUrl: "#https://github.com/damonBenbo/MATrainer"
---

### Problem Solved

If you're a practitioner of Martial Arts, you know how important notes can be. With Martial Arts Trainer, this is something I wanted to address. Paper notes have their limitations; They can get lost, fade over time, or you may not remember the details of the techniques you've written down. 

With Martial Arts Trainer, you can have a digital copy of your notes, write as much as you want and be as detailed as possible, and add links to a video!

### Technologies Used

The bulk of the app is made using React for the front end which allowed me to create a responsive and reusable interface. I leveraged Node for my backend building on it with using Express to help facilitate my secure authorization with middleware as well as serving things from my database.

I created a custom API to interact with my database so users can utilize full CRUD. I wanted to fill my database with a good foundation of techniques, but ultimately, users have full control to add their own techniques and modify existing ones to match their exact needs.

### Challenges Faced

Setting up middleware to facitate users to access their profiles and accessing the users tokens was a challenge at first. I had to decide how I wanted to use the authentication either by using JWT (JSON Web Tokens) or using a token in a payload. I ultimately decided to utilize JWT as they were very easy and secure to setup.

### Lessons Learned

React is a very strong tool for building interactive and consistent front ends and can really speed up your progress. You also get props and state which can be immensly helpful when creating and updating front end interfaces.

The biggest thing I learned however is how much I love working with Node. The asyncronous nature and being able to handle multiple things at once is quite nice. I also really liked how easy it was to work with my database and handle my user authentication with middleware.