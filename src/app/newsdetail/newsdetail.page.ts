import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-newsdetail',
	templateUrl: './newsdetail.page.html',
	styleUrls: ['./newsdetail.page.scss'],
})
export class NewsDetailPage implements OnInit {
	article;
	constructor(private newsService: NewsService) { }

	ngOnInit() {
		this.article = this.newsService.currentArticle;
		console.log(this.newsService.currentArticle);
	}

}
