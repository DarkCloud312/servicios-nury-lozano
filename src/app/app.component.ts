import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private cookieMsgDissmise: string;
  private cookieDissmise: boolean = false;

  constructor(
    private modalService: NgbModal,
    private cookieService: CookieService
  ) {}

  public ngOnInit(): void {
    this.cookieDissmise = this.cookieService.check('cookieDissmise');
  }

  open(content) {
      this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title'}).result.catch(
        (error) => console.error(error)
      );
  }

  title = 'pagina-oferta-de-servicios';
}
