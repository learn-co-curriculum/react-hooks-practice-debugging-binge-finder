# Debugging Practice: Binge-Finder

## Instructions

You and your team just crushed a project for one of your clients with time to
spare! (Or so you thought) As you were getting ready to celebrate one of your
teammates expressed his frustration with the project and QUIT! He decided to
leave you with a little gift before his departure...

You now have a project with an unknown amount of bugs and your client is coming
in for a presentation tonight _insert panicked emoji_ Review the code that your
team has written to discover and kill all the bugs in your application for a
smooth presentation. Finish off with a round of celebratory drinks!

## Setup

- Clone this repository and cd into it.
- Run `npm install` to install your dependencies.
- Run `npm start` and the project will be running on `localhost:3000`.

## Deliverables

1. A user should be able to click on a show and have the details show up on the
   left.

2. A user should be able to search for a show.

3. A user should be able to filter the list of shows by their rating.

4. A user should be able to display seasons and episodes when a show is
   selected.

## BONUS

LAZY LOADING!! Your initial fetch only grabbed the most popular 240 shows on the
API. Implement lazy loading to have your application do another fetch once it
gets to the bottom of the screen.

**TIP**: change your fetch to reflect the page numbers example:

[http://api.tvmaze.com/shows?page=1](http://api.tvmaze.com/shows?page=1)
