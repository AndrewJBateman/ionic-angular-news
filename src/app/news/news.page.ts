import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	articles: any;
	page = 1;
	// constructor is called before the ngOnInit(), to set up dependency injection..
	constructor(private newsService: NewsService, private router: Router) { }

	ngOnInit() {
		this.newsService
			.getData(
				`top-headlines?country=us&category=business&pageSize=5&page=${
					this.page
				}`
			)
			.subscribe(data => {
					console.log(data);
					this.data = data;
				},
				(err) => {
					console.log('The error is: ', err);
				}

		);
	}

	onGoToNewsDetail(article) {
		this.newsService.currentArticle = article;
		this.router.navigate(['/newsdetail']);
	}

	loadMoreNews(event) {
		this.page++;
		console.log(event);
		this.newsService
			.getData(
				`top-headlines?country=us&category=business&pageSize=5&page=${
					this.page
				}`
			)
			.subscribe(data => {
				// console.log(data);
				// this.data = data;
				for (const article of data['articles']) {
					this.data.articles.push(article);
				}
				event.target.complete();
				console.log(this.data);
			});
	}

}
