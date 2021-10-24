import { Component, OnInit } from '@angular/core';
import { FlowerResponse } from '../interfaces/flower.interface';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  flowers: FlowerResponse[] = [];

  constructor(private flowerService: FlowerService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.flowerService.findAll().subscribe((data) => {
      this.flowers = data.body;
    });
  }
}
