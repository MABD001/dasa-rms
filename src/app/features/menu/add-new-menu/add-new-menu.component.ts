import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewMenuRequest } from './add-new-menu-request.model';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-menu.component.html',
  styleUrl: './add-new-menu.component.css',
  providers: [MenuService]
})
export class AddNewMenuComponent implements OnDestroy{
  model: AddNewMenuRequest;
  private AddNewMenuSubscription?: Subscription;
  router!: Router;
  constructor(private menuService: MenuService,router:Router){
    this.router = router;
    this.model = {
      description: ''
    };
  }
  returnToMenu(){
      this.router.navigate(['/menu']);

  }
  onFormSubmit(){
    this.AddNewMenuSubscription = this.menuService.addMenu(this.model.description).subscribe({
      next:(response) => {
        console.log(response);
        this.returnToMenu();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.AddNewMenuSubscription?.unsubscribe();
  }

}
