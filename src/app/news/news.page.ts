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
	data5: any;
	data6: any;
	ngOnInit() {
		this.newsService.getData('top-headlines?country=in').subscribe(data => {
			console.log(data);
			this.data = data;
		});
		this.newsService.getData('top-headlines?country=us').subscribe(data => {
			console.log(data);
			this.data1 = data;
		});
		this.newsService.getData('top-headlines?country=au').subscribe(data => {
			console.log(data);
			this.data2 = data;
		});
		this.newsService.getData('top-headlines?country=ca').subscribe(data => {
			console.log(data);
			this.data3 = data;
		});
		this.newsService.getData('top-headlines?country=ie').subscribe(data => {
			console.log(data);
			this.data4 = data;
		});
		this.newsService.getData('top-headlines?country=gv').subscribe(data => {
			console.log(data);
			this.data5 = data;
		});
		this.newsService.getData('top-headlines?country=nz').subscribe(data => {
			console.log(data);
			this.data6 = data;
		});
	}

	onGoToNewsDetail(article) {
		this.newsService.currentArticle = article;
		this.router.navigate(['/newsdetail']);
	}
}
