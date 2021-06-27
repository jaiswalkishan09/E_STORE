import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-deatail',
  templateUrl: './listing-deatail.component.html',
  styleUrls: ['./listing-deatail.component.css']
})
export class ListingDeatailComponent implements OnInit {
   listings:any;
  

  constructor(private route:ActivatedRoute) { 
    
  }
  

  ngOnInit(): void {
    
    const id=this.route.snapshot.paramMap.get('id');
    this.listings=fakeListings.find(listing =>listing.id===id);
  }

}
