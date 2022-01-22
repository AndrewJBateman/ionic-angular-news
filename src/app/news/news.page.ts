import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  constructor(private newsService: NewsService, private router: Router) {}

  data: Observable<any>;

  ngOnInit(): void {
    this.data = this.newsService.getData("top-headlines?country=gb");
  }

  onGoToNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(["/newsdetail"]);
  }
}
