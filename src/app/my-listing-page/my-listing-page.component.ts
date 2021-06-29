import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {

  listings:Listing[]=[];
  l:any;
  constructor() { }

  ngOnInit(): void {
    this.listings=fakeMyListings;
  }
  onDeleteClick(id:string)
  {
    this.l=fakeMyListings.find(listing=>listing.id===id);
    alert(`${this.l.name.toLowerCase()} was deleted`)
  }

}
