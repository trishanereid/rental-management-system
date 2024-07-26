import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../header/header.component";

interface Item {
  itemId: number;
  name: string;
  rentalPerDay: number;
  finePerDay: number;
  availability: string;
}

@Component({
  selector: 'app-hardware-item-management',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, HeaderComponent],
  templateUrl: './hardware-item-management.component.html',
  styleUrl: './hardware-item-management.component.css'
})
export class HardwareItemManagementComponent implements OnInit {

  constructor(private http: HttpClient) { }
  selectedItem: Item | null = null;
  isModalOpen: any;
  searchItemId: any;
  itemList: Item[] = [];

  ngOnInit(): void {
    this.loadItemTble();
  }

  searchItemById() {
    this.http.get<Item>('http://localhost:8080/api/v4/search-item-by-id/'+ this.searchItemId).subscribe(
      data => {
        this.viewItemDetails(data);
      },
      error => {
        console.error(error);
      }
    )
  }

  closeItemDetails() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }

  viewItemDetails(item: Item) {
    this.searchItemId = item;
    this.isModalOpen = true;
  }

  updateItem(arg0: Item | null) {
    throw new Error('Method not implemented.');
  }
  deleteItem(arg0: Item | null) {
    throw new Error('Method not implemented.');
  }
  rentItem(arg0: Item | null) {
    throw new Error('Method not implemented.');
  }

  loadItemTble() {
    this.http.get<Item[]>('http://localhost:8080/api/v4/get-all-items').subscribe(
      data => {
        this.itemList = data;
      },
      error => {
        console.error('Error fetching itemList', error);
      }
    )
    console.log(this.itemList);
  }

}
