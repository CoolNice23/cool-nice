import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalService} from "../../services/modal.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('prices', {static: true}) prices!: TemplateRef<any>;
  isPhone!: boolean;
  modalRef?: BsModalRef;
  destroy$ = new Subject();

  installServices = [
    {
      option: '7-9',
      price: 3500
    },
    {
      option: '12 на 9⌀ трубі',
      price: 4000
    },
    {
      option: '12 на 12⌀ трубі',
      price: 4500
    },
    {
      option: '18 на 12⌀ трубі',
      price: 5000
    },
    {
      option: '18 на 16⌀ трубі',
      price: 6000
    },
    {
      option: '24',
      price: 6500
    }
  ];
  installOnExistingTubes = [
    {
      option: '7-9',
      price: 2300
    },
    {
      option: '12',
      price: 2500
    },
    {
      option: '18',
      price: 3200
    },
    {
      option: '24',
      price: 4500
    }
  ]
  uninstallServices = [
    {
      option: '9',
      price: 900
    },
    {
      option: '12',
      price: 1200
    },
    {
      option: '18',
      price: 1700
    },
    {
      option: '24',
      price: 2300
    }
  ];
  additionalServices = [
    {
      option: 'Драбина',
      price: '500 грн.'
    },
    {
      option: 'Склопакет',
      price: 'від 300 грн. до 1000 грн. <br> (залежить від розміру)'
    },
    {
      option: 'Промисловий альпінізм',
      price: '3000 грн.'
    },
    {
      option: 'Вилка + дріт до 5м.',
      price: '300 грн.'
    }
  ];
  additionalTube = [
    {
      option: '6⌀ - 9⌀',
      price: 450
    },
    {
      option: '12⌀ - 6⌀',
      price: 550
    },
    {
      option: '16⌀ - 6⌀',
      price: 750
    },
    {
      option: '19⌀ - 9⌀',
      price: 900
    }
  ];

  constructor(
      private modalService: BsModalService,
      private sharedService: ModalService
  ) {
    this.isPhone = window.innerWidth <= 576;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sharedService.openPricesModal$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.openPriceModal();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  openPriceModal() {
      this.modalRef = this.modalService.show(this.prices);
  }
}
