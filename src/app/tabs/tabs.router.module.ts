import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
	{
		path: "tabs",
		component: TabsPage,
		children: [
			{
				path: "news",
				loadChildren: () =>
					import("../news/news.module").then((m) => m.NewsPageModule),
			},
			{
				path: "contact",
				loadChildren: () =>
					import("../contact/contact.module").then((m) => m.ContactPageModule),
			},
			{
				path: "about",
				loadChildren: () =>
					import("../about/about.module").then((m) => m.AboutPageModule),
			},
			{
				path: "newsdetail",
				loadChildren: () =>
					import("../newsdetail/newsdetail.module").then(
						(m) => m.NewsDetailPageModule
					)
			},
			{
				path: "",
				redirectTo: "/tabs/news",
				pathMatch: "full",
			},
		],
	},
	{
		path: "",
		redirectTo: "/tabs/news",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsPageRoutingModule {}
