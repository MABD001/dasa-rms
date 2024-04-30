import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablesService } from '../tables.service';
import { Subscription } from 'rxjs';
import { AddNewTableRequest } from './addNewTable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-table.component.html',
  styleUrl: './add-new-table.component.css',
  providers:[TablesService]
})
export class AddNewTableComponent implements OnDestroy{
  model: AddNewTableRequest;
  private AddNewTableSubscription?: Subscription;
  router:Router;
  constructor(private tableService: TablesService,router:Router){
    this.router = router;
    this.model = {
      description: ""
    };
  }
  returnToTablesList(){
    this.router.navigate(['/tables']);

}
  onFormSubmit(){
    this.AddNewTableSubscription = this.tableService.addNew(this.model.description).subscribe({
      next:(response) => {
        console.log(response);
        this.returnToTablesList()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.AddNewTableSubscription?.unsubscribe();
  }

}
