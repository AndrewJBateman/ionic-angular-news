import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'news',
				children: [
					{
						path: '',
						loadChildren: '../news/news.module#NewsPageModule'
					}
				]
			},
			{
				path: 'contact',
				children: [
					{
						path: '',
						loadChildren: '../contact/contact.module#ContactPageModule'
					}
				]
			},
 			{
				path: 'about',
				children: [
					{
						path: '',
						loadChildren: '../about/about.module#AboutPageModule'
					}
				]
			},
			{
				path: 'newsdetail',
				children: [
					{
						path: '',
						loadChildren: '../newsdetail/newsdetail.module#NewsDetailPageModule'
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/news',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/news',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
