# Ionic Angular News

App to search for and display news items from a [news API](https://newsapi.org/) using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The [News API](https://newsapi.org/) is a simple HTTP REST API for searching and retrieving live articles from the web using:

1. Keyword or phrase
2. Date published
3. Source name
4. Source domain name
5. Language

## Screenshots

![Ionic page](./img/news-page.png)
![Ionic page](./img/news-detail.png)
![Ionic page](./img/contact.png)
![Ionic page](./img/about.png)

## Technologies

* [Ionic v5.8.0](https://ionicframework.com/)

* [Ionic/angular v4.5.0](https://www.npmjs.com/package/@ionic/angular)

* [News REST API used to search for news articles](https://newsapi.org/)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* Extract from `service.ts` that gets data from the API.

```typescript
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`);
  }
}
```

* Extract from `news.page.ts` function to get API data with input url `'top-headlines?country=gb'`.

```typescript
ngOnInit() {
  this.newsService.getData('top-headlines?country=gb').subscribe(data => {
    console.log(data);
    this.data = data;
  });
}
```

## Features

* Cicking on an item in the news page routes to a news detail page with more information. There is a link here to the original article.

* API data service can be modified to search for news in other countries.

## Status & To-do list

* Status: Working. Can be improved.

* To-do: Add home page menu with categories. Set maximum size of news image. Add scroll bar. Observables. Consider search bar and language menu. Colour ionic and angular buttons correctly.  

## Inspiration

Project initially inspired by [Baljeet Singh´s Youtube video 'Creating News Application With Ionic 4 and Angular'](https://www.youtube.com/watch?v=NJ9C7iY9350) but much improved upon.

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
