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
      option: '07-09 (до 25 м²)',
      price: 3500
    },
    {
      option: '12 (до 35 м²)',
      price: 3700
    },
    {
      option: '18 (до 50 м²)',
      price: 4400
    },
    {
      option: '24 (до 70 м²)',
      price: 5000
    },
    {
      option: '24 (до 70 м²)',
      price: 5000
    },
    {
      option: '30 (от 80 м²)',
      price: 5200
    }
  ];
  additionalServices = [
    {
      option: 'дод. фреономагістраль 07, 09',
      price: '500 грн за 1м'
    },
    {
      option: 'дод. фреономагістраль 12,18',
      price: '550 грн за 1м'
    },
    {
      option: 'дод. фреономагістраль 24, 30',
      price: '650 грн за 1м'
    },
    {
      option: 'штроба газоблок/цегла/бетон',
      price: '200/250/300 грн за 1м'
    },
    {
      option: '24 (до 70 м²)',
      price: 5000
    },
    {
      option: '30 (від 80 м²)',
      price: 5200
    }
  ];
  serviceGeneral = [
    {
      option: 'діагностика',
      price: 'від 500 грн'
    },
    {
      option: 'демонтаж',
      price: 'від 500 грн'
    },
    {
      option: 'заправка фреоном',
      price: 'від 150 грн за 100 грам'
    },
    {
      option: 'перевальцювання комуникацій',
      price: 'від 800 грн'
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
