import { Component, Input } from "@angular/core";

@Component({
  selector: "app-end",
  template: `
    <h1 id="Subjects_covered">Congratulations</h1>
    <h3>You have reviewed all the necessary skills.</h3>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class EndComponent {}
