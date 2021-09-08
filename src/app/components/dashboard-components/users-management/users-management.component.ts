import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UsermanagementService } from 'src/app/services/usermanagement.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'role'];
  usersList: User[];
  filteredusersList: User[];
  constructor(public usersService: UsermanagementService) { }

  ngOnInit(): void {
    this.usersService.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    )
      .subscribe((rides) => {
        this.filteredusersList = this.usersList = rides
      });
  }
  onChangeRole(newValue:string, key:string): void {
    this.usersService.update(key, {role: newValue})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredusersList = this.usersList.filter((user) =>
      [user.firstName, user.lastName].join(" ").toLowerCase().includes(filterValue) || user.uid.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue) || user.role.toLowerCase().includes(filterValue)
    );
  }
}
