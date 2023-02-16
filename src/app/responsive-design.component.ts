import { Component, Input } from "@angular/core";

@Component({
  selector: "app-responsive-design",
  template: `
    <h1>Responsive Design</h1>
    <p>
      In the early days of web design, pages were built to target a particular
      screen size. If the user had a larger or smaller screen than the designer
      expected results ranged from unwanted scrollbars to overly long line
      lengths, and poor use of space. As more diverse screen sizes became
      available, the concept of <em>responsive web design</em> (RWD) appeared, a
      set of practices that allows web pages to alter their layout and
      appearance to suit different screen widths, resolutions, etc. It is an
      idea that changed the way we design for a multi-device web, and in this
      article, we'll help you understand the main techniques you need to know to
      master it.
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
export class ResponsiveDesignComponent {}
