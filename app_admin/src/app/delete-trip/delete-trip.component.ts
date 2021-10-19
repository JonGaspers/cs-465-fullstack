import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  submitted = false;


  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  //retrieve stashed tripId
  tripCode = localStorage.getItem("tripCode");


  ngOnInit() {
    if(!this.tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    };

    console.log('DeleteTripComponent#onInit found tripcode ' + this.tripCode);
  }

  async onSubmit() {
    console.log('Deleting Trip with TripCode: ' + this.tripCode);
    try {
      const del = await this.tripService.deleteTrip(this.tripCode);
      console.log(del);
    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['']);
    /* setTimeout(() => {
      this.router.navigate(['']);
    }, 500); */
  }
}
