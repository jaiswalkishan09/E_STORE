import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email:string='';
  message:string='';
  listings={} as any;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.listings=fakeListings.find(listing=>listing.id===id);
    this.message=`Hey is this ${this.listings.name.toLowerCase()} is still available?`;
  }
  sendmessage():void
  {
      alert("yout message has been sent");
      this.router.navigateByUrl('/listings');
  }


}
