import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  scroll(el: string) {
    const element = document.getElementById(el)!;
    element.scrollIntoView();
  }

  openPricesModal() {
    this.modalService.triggerOpenPricesModal();
  }
}
