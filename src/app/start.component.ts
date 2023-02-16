import { Component, Input } from "@angular/core";

@Component({
  selector: "app-start",
  template: `
    <h1 id="Subjects_covered">Frontend Fundamentals</h1>
    <p>The broad subjects covered are:</p>
    <ul>
      <li>Basic setup and learning how to learn</li>
      <li>
        Web standards and best practices (such as accessibility and
        cross-browser compatibility)
      </li>
      <li>HTML, the language that gives web content structure and meaning</li>
      <li>CSS, the language used to style web pages</li>
      <li>
        JavaScript, the scripting language used to create dynamic functionality
        on the web
      </li>
    </ul>
    <p>
      The different sections are designed to be worked through in order, but
      each one is also self-contained. If you, for example, already know HTML
      well, you can quite happily skip ahead to the CSS section.
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
export class StartComponent {}
