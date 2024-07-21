import { CdkPortal, ComponentPortal, DomPortal, DomPortalOutlet, Portal } from '@angular/cdk/portal';
import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, TemplateRef, ViewChild } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-web-component',
  standalone: true,
  imports: [PortalModule],
  templateUrl: './web-component.component.html',
  styleUrl: './web-component.component.scss'
})
export class WebComponentComponent implements AfterViewInit {
  private host!: DomPortalOutlet;

  @ViewChild(CdkPortal)
  private portal!: CdkPortal;
  
  private component: any = {
    tag: 'current-date',
    location: '/assets/components/current-date.js',
    loaded: false,
  };

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.init();
  }

  ngAfterViewInit(): void {
    this.host = new DomPortalOutlet(
      document.querySelector('.dom-content')!,
      this.cfr,
      this.appRef,
      this.injector,
    );
    this.host.attach(this.portal);
  }

  init = async (): Promise<void> => {
    await this.load();
    const container: any = document.querySelector('.dom-content');
    const element = document.createElement(this.component.tag);
    element.setAttribute('data-date', 'today');
    container.appendChild(element);
  };

  load = () => {
    const promises: Array<any> = [];
    promises.push(this.loadScript(this.component.tag));
    return Promise.all(promises);
  };

  loadScript = (name: string) => {
    return new Promise((resolve, reject) => {
      if (this.component.loaded === true) {
        resolve({ script: name, loaded: true, status: 'Already loaded.' });
      } else {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.component.location;
        script.onload = () => {
          this.component.loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  };
}
