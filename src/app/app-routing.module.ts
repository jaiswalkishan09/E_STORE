import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDeatailComponent } from './listing-deatail/listing-deatail.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/listings' ,pathMatch:'full'},
  {path:'listings', component:ListingPageComponent , pathMatch: 'full'},
  {path:'listings/:id', component:ListingDeatailComponent},
  {path:'contact/:id',component:ContactPageComponent},
  {path:'edit-listing/:id',component:EditListingPageComponent},
  {path:'my-listing',component:MyListingPageComponent},
  {path:'new-listings', component:NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
