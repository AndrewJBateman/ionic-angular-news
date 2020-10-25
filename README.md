# :zap: Ionic Angular News

* App to search for and display news items from a [news API](https://newsapi.org/) using the [Ionic 5 framework](https://ionicframework.com/docs).

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* The [News API](https://newsapi.org/) is a simple HTTP REST API for searching and retrieving live articles from the web using:

1. Keyword or phrase
2. Date published
3. Source name
4. Source domain name
5. Language

## :camera: Screenshots

![Ionic page](./img/news-page.png)
![Ionic page](./img/news-detail.png)
![Ionic page](./img/contact.png)
![Ionic page](./img/about.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Ionic/angular v4](https://www.npmjs.com/package/@ionic/angular)
* [News REST API used to search for news articles](https://newsapi.org/) - only works in localhost. Paid subscription required if app is deployed

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

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

## :cool: Features

* Cicking on an item in the news page routes to a news detail page with more information.
* API data service can be modified to search for news in other countries.

## :clipboard: Status & To-do list

* Status: Working.
* To-do: This app could be improvemeved but it works and has taught me the news API basics. An improved news app will be created in a new repo: 'ionic-angular-news-app'.

## :clap: Inspiration

* Project initially inspired by [Baljeet Singh´s Youtube video 'Creating News Application With Ionic 4 and Angular'](https://www.youtube.com/watch?v=NJ9C7iY9350) but much improved upon.

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
