import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalNewLeaveComponent } from '../../shared/modal-new-leave/modal-new-leave.component';
import { UsersService } from '../users.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  @ViewChild('mdlNewLeave') private mdlNewLeave: ModalNewLeaveComponent;
  items: any = [];
  total = 0;
  offset = 0;
  page = 1;
  pageSizeItems: any = [10, 20, 30, 40, 50, 100];
  pageSize = 20;

  constructor(private userService: UsersService, private alertService: AlertService) {
  }

  async ngOnInit() {
    await this.getLeaves();
  }

  async getLeaves() {
    try {
      const rs: any = await this.userService.getLeaves(this.pageSize, this.offset);
      if (rs.ok) {
        this.items = rs.rows;
        this.total = rs.total;
      }
    } catch (e) {
      console.log(e);
      this.alertService.error();
    }
  }

  openModal() {
    this.mdlNewLeave.open();
  }

  onPageChange(event: number) {
    const _currentPage = +event;
    // tslint:disable-next-line:variable-name
    let _offset = 0;
    if (_currentPage > 1) {
      _offset = (_currentPage - 1) * this.pageSize;
    }

    this.offset = _offset;

  }
}
