import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-rental-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, HeaderComponent],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css'
})

export class RentalFormComponent  implements OnInit{

  inputItemId: any;
  inputRentalDate: Date | any;
  inputReturnDate: Date | any;
  inputDueDate: any;
  total: number|any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.total = this.dateDiffrernce(this.inputRentalDate, this.inputReturnDate)*50;
  }


  addRental() {
    
  }

  dateDiffrernce(date1: Date, date2: Date): number {
    // const oneDay = 24 * 60 * 60 * 1000;
    // const difInTime = date2.getTime() - date1.getTime();
    this.total = this.dateDiffrernce(this.inputRentalDate, this.inputReturnDate)*50;
    return 10;
  }

  

}
