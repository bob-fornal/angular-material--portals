import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';

import { MatCardModule } from '@angular/material/card';

import { HeaderFooterComponent } from "../../shared/header-footer/header-footer.component";
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-task-handler',
  standalone: true,
  imports: [
    MatCardModule,
    HeaderFooterComponent
  ],
  templateUrl: './task-handler.component.html',
  styleUrl: './task-handler.component.scss'
})
export class TaskHandlerComponent implements AfterViewInit, OnInit {
  eventId: string = '';
  taskId: string = '';

  headerPortal: any;
  footerPortal: any;

  headerComponent = new ComponentPortal(HeaderComponent);

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventId') || '';
    this.taskId = this.route.snapshot.paramMap.get('taskId') || '';
  };

  ngAfterViewInit() {
    this.headerPortal = new DomPortalOutlet(
      document.getElementById('headerPortal')!,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    const componentRef = this.headerPortal.attachComponentPortal(this.headerComponent);
    componentRef.instance.eventId = this.eventId;
    componentRef.instance.taskId = this.taskId;
  }
}
