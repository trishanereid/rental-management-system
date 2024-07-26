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

export class RentalFormComponent implements OnInit {
searchRental() {
  this.http.get('http://localhost:8080/api/v4/search-rent-by-id/'+ this.inputItemId).subscribe(
    data => {
      this.rental = data;
    },
    error => {
      alert("Rental creation not successfull")
    }
  )
}
  deleteRental() {
    this.http.delete('http://localhost:8080/api/v4/delete-rental/'+ this.inputItemId).subscribe(
      data => {
        alert("Rental added Successfully")
      },
      error => {
        alert("Rental creation not successfull")
      }
    )
  }

  inputItemId: any;
  inputRentalDate: any = '';
  inputReturnDate: Date | any;
  inputDueDate: any;
  total: number | any;
  constructor(private http: HttpClient) { }

  rental = {
    rentDate: "",
    returnDate: "",
    dueDate: "",
    totalCost: ""
  }

  ngOnInit(): void {
    // this.total = this.dateDiffrernce(this.inputRentalDate, this.inputReturnDate)*50;
  }
  addRental() {
    this.http.post('http://localhost:8080/api/v4/add-rent', this.rental).subscribe(
      response => {
        alert("Rental added Successfully")
      },
      error => {
        alert("Rental creation not successfull")
      }
    );
    console.log(this.rental);
  }

  // dateDiffrernce(date1: Date, date2: Date): number {
  //   const oneDay = 24 * 60 * 60 * 1000;
  //   const difInTime = date2.getTime() - date1.getTime();
  //   this.total = this.dateDiffrernce(this.inputRentalDate, this.inputReturnDate)*50;
  //   return 10;
  // }



}
