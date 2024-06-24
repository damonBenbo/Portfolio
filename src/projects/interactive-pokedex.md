---
title: "Interactive Pokedex!"
summary: "Who's that Pokemon?! Be the pokemon trainer Ash Ketchum aspired to be with your very own Interactive Pokedex! This Interactive Pokedex allows you to look up information about each Pokemon's unique attributes and abilities; as well as where you can find them. Save your favorites to craft your dream team!"
image: /images/interactivepokedex.png
imageAlt: "Screenshots of Interactive Pokedex app"
tech:
  - "Python"
  - "Flask"
  - "SQLAlchemy"
  - "Jinja"
  - "BCrypt"
siteUrl: "#https://interactivepokedex.onrender.com/"
repoUrl: "#https://github.com/damonBenbo/pokedex"
---

### Problem Solved

While there are Wiki's and sites to look up information on Pokemon, I wanted to craft one that is a bit more fun! Growing up I had a Pokedex much like the original one used for my base image. By the time I was finished, we have the interactive pokedex that you see now.

### Technologies Used

The bulk of this app was made using Python and Python libraries. Flask was utilized to make the front end of the application and Jinja to create my templates to create a consistent disign throughout the website. For the backend, BCrypt was used to hash & salt users information when creating an account while SQLAlchemy was utilized to implement full CRUD in my database so users could create Pokemon teams or just to create a favorites list.

### Challenges Faced

One of the first challenges in creating any app is anticipating database tables and what kind of relationships you want among your tables. It was also challenging deciding how I wanted to setup using the PokeAPI to serve users data about the pokemon they are looking up, did I want to load my database ahead of time to reduce any further API calls? 

In the end I decided a hybrid approach that I later found out had a name, [<u>**memoization**</u>](https://en.wikipedia.org/wiki/Memoization), if a pokemon had previously been searched it would pull its info from my database, if it was a new one that has not been searched yet, it would make the request to the PokeAPI and then add the pokemons information to my database to reduce work needed in the future.

Then there was the design challenge of creating a layout that fit on top of the image of the pokedex, thus creating the interactive pokedex.

### Lessons Learned

It's important to get a minimum viable product (MVP) up and running, this helps with building a strong foundation to work around when building any application.

Python is an excellent language, and though it isn't the first thing I think of when building a front end, I'm very excited to have the experience of it in my arsenal. 

While figuring out the database schema is very important, if you working with an application in its infancy, I found that its the best to push the limits early on to anticipate your users needs.