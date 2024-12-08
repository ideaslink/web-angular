import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IShowcaseDTO } from '../../models/ishowcase-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  $showItems: IShowcaseDTO[] = [];
  itemcount: number = 0;

  constructor(private homeService: HomeService  ) { }

  ngOnInit(): void {
    this.homeService.getshowcasess(3).subscribe( result => {
      this.$showItems = result;
      this.itemcount = result.length;
    })
  }


}
