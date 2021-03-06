import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
import {Urls} from '../objects/urls.enum';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  static extraHeight = 64;
  isFirstEvent = true;
  isHomePage = true;

  activeUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  newUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  static compareHeights(scrollPosition, elementTop, elementHeight) {
    return scrollPosition + RoutingService.extraHeight < elementTop + elementHeight && scrollPosition > elementTop;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === Urls.PROJECTS || event.url === Urls.ABOUT || event.url === Urls.CONTACTS) {
          this.loading.next(true);
        }
        window.scrollTo(0, 0);
        setTimeout(() => {
          // at least on next tick
          // 1s delay is a reasonable time for page to render (internet speed has no effect)
          // having tested lifecycle and event listeners for page to load, they all fire too early
          this.activeUrl.next(event.url);
          this.doScroll();
          this.loading.next(false);
        }, 1000);
      }
    });
  }

  routeTo(url: string) {
    this.newUrl.next(url);
    if (url && this.activeUrl.getValue() !== url) {
      this.activeUrl.next(url);
      window.history.replaceState(null, null, url);
      this.doScroll();
      if (!this.isHomePage) {
        this.router.navigateByUrl(url);
      }
    }
  }

  private doScroll() {
    if (!this.isHomePage) {
      return;
    }
    switch (this.activeUrl.getValue()) {
      case Urls.PROJECTS:
        setTimeout(() => {
          const projectsElement = document.getElementById('projects');
          if (projectsElement) {
            window.scrollTo({top: projectsElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case Urls.ABOUT:
        setTimeout(() => {
          const aboutElement = document.getElementById('about');
          if (aboutElement) {
            window.scrollTo({top: aboutElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case Urls.CONTACTS:
        setTimeout(() => {
          const contactsElement = document.getElementById('contacts');
          if (contactsElement) {
            window.scrollTo({top: contactsElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      default:
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.isFirstEvent = false;
        break;
    }
  }
}
