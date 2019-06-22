import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

	constructor(private newsService: NewsService, private router: Router) { }

	data: any;
	data1: any;
	data2: any;
	data3: any;
	data4: any;

	ngOnInit() {
		this.newsService.getData('top-headlines?country=gb').subscribe(data => {
			console.log(data);
			this.data = data;
		});
		this.newsService.getData('top-headlines?country=fr').subscribe(data => {
			console.log(data);
			this.data1 = data;
		});
		this.newsService.getData('top-headlines?country=sp').subscribe(data => {
			console.log(data);
			this.data2 = data;
		});
		this.newsService.getData('top-headlines?country=no').subscribe(data => {
			console.log(data);
			this.data3 = data;
		});
		this.newsService.getData('top-headlines?country=jp').subscribe(data => {
			console.log(data);
			this.data4 = data;
		});
	}

	onGoToNewsDetail(article) {
		this.newsService.currentArticle = article;
		console.log('item clicked');
		this.router.navigate(['/newsdetail']);
	}
}
