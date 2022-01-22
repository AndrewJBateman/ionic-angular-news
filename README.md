# :zap: Ionic Angular News

* App to search for and display news items from a [news API](https://newsapi.org/) using the [Ionic framework](https://ionicframework.com/docs).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-news?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-news?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-news?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-news?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular News](#zap-ionic-angular-news)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status](#clipboard-status)
  * [:clipboard: To-do](#clipboard-to-do)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

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

* [Ionic v6](https://ionicframework.com/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [News REST API used to search for news articles](https://newsapi.org/) - only works in localhost. Paid subscription required if app is deployed

## :floppy_disk: Setup

* Add News API key to `environment.ts` - free News API will not work if deployed
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

* Extract from `news.service.ts` that gets data from the API.

```typescript
getData(url: string): Observable<any> {
  try {
    return this.http
      .get(`${apiUrl}/${url}&apiKey=${apiKey}`)
      .pipe(map((res) => res["articles"]));
  } catch (error) {
    console.log("An error occured while fetching data: ", error);
  }
}
```

* Extract from `news.page.ts` function to get API data Observable with input url `'top-headlines?country=gb'`. Instead of using the RxJS async Observable subscribe method, the Angular async pipe now used in the template which unsubscribes itself automatically

```typescript
ngOnInit(): void {
  this.data = this.newsService.getData("top-headlines?country=gb");
}
```

## :cool: Features

* Cicking on an item in the news page routes to a news detail page with more information.
* API data service can be modified to search for news in other countries, e.g 'this.data = this.newsService.getData("top-headlines?country=fr")'.

## :clipboard: Status & To-do list

* Status: Working.
* To-do: This app could be improved - e.g. add newsArticle interface. An improved news app exists in [another repo](https://github.com/AndrewJBateman/ionic-angular-news-app).

## :clap: Inspiration

* Project initially inspired by [Baljeet Singh´s Youtube video 'Creating News Application With Ionic 4 and Angular'](https://www.youtube.com/watch?v=NJ9C7iY9350) but much improved upon. I do not recommend this video now - there are much better & more recent Ionic tutorials on Youtube - Simon Grimm or Josh Morony for example.

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
