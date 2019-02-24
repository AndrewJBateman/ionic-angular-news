import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
      .getNews('everything?q=bitcoin')
      .subscribe(
        (res) => {
          this.news = res;
        },
        (err) => {
          console.log('The error is :', err)
        }

    )
  }

  itemSelected(news) {
    this.newsService.newsItem = news;
    this.router.navigate(['/newsdetail']);
  }

}
