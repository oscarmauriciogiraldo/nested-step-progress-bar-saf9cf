import { Component, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(StepProgressBarComponent)
  private stepProgressBar: StepProgressBarComponent;

  steps = [
    {
      id: "html",
      text: "HTML",
      children: [
        {
          id: "html-intro",
          text: "Introductory"
        },
        {
          id: "html-inter",
          text: "Intermediate"
        },
        {
          id: "html-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "css",
      text: "CSS",
      children: [
        {
          id: "css-intro",
          text: "Introductory"
        },
        {
          id: "css-inter",
          text: "Intermediate"
        },
        {
          id: "css-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "js",
      text: "JS",
      children: [
        {
          id: "js-intro",
          text: "Introductory"
        },
        {
          id: "js-inter",
          text: "Intermediate"
        },
        {
          id: "js-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "photoshop",
      text: "PhotoShop"
    },
    {
      id: "sketch",
      text: "Sketch"
    },
    {
      id: "invision",
      text: "InVision"
    }
  ];
  routes = {
    "": "/start",
    "html-intro": "/html/semantic-elements",
    "html-inter": "/html/form",
    "html-adv": "/html/svg",
    "css-intro": "/css/selector",
    "css-inter": "/css/responsive-design",
    "css-adv": "/css/scss",
    "js-intro": "/js/jquery",
    "js-inter": "/js/es6",
    "js-adv": "/js/nodejs",
    "photoshop": "/photoshop",
    "sketch": "/sketch",
    "invision": "/invision",
    "*": "/end"
  };
  currentId = "";
  current = "";

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.stepProgressBar.current)  { // not setting step progress bar
          this.current = Object.keys(this.routes).find(key => this.routes[key] === event.url);
        }
      }
    });
  }

  setCurrent() {
    this.current = this.currentId;
    setTimeout(() => {
      this.router.navigate([this.routes[this.stepProgressBar.current]]);
    }, 0);
  }

  previous() {
    this.current = this.stepProgressBar.previousStep();
    setTimeout(() => {
      this.router.navigate([this.routes[this.stepProgressBar.current]]);
    }, 0);
  }

  next() {
    this.current = this.stepProgressBar.nextStep();
    setTimeout(() => {
      this.router.navigate([this.routes[this.stepProgressBar.current]]);
    }, 0);
  }
}
