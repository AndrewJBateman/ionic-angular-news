import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()

export class NewsService {
	newsItem: any;

	constructor(private httpClient: HttpClient) {

	}

	getNews(url) {
		var completeUrl = `${environment.API_URL}/${url}&apiKey=${environment.API_KEY}`;
		console.log('complete url: ', completeUrl);
		return this.httpClient.get(completeUrl);
	}

}