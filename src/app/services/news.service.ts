import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
	providedIn: 'root'
})

export class NewsService {
	currentArticle: any;

	constructor(private http: HttpClient) {}

	getData(url) {
		return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
	}
}
