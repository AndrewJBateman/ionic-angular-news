import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
	{ path: 'newsdetail', loadChildren: './newsdetail/newsdetail.module#NewsDetailPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
