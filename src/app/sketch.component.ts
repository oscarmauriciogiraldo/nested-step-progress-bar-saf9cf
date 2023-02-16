import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sketch",
  template: `
    <h1>Sketch</h1>
    <p>
      Create, prototype, collaborate, and bring your ideas to life with the
      design platform used by over one million people — from freelancers, to the
      world’s largest teams.
    </p>
    <h2>Work fast, create beautifully</h2>
    <p>
      Your best work happens when tools stay out of the way. With an intuitive
      interface, thoughtful features and all the power of a native macOS app,
      you can stay focused on designing incredible products.
    </p>
    <h2>Open up the design process</h2>
    <p>
      Whether you work with a couple of clients and collaborators, or you’re
      part of a growing team, we’ve made sharing work, getting feedback, testing
      ideas, and handing off designs to developers easy.
    </p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class SketchComponent {}
