import { Component, Input } from "@angular/core";

@Component({
  selector: "app-scss",
  template: `
    <h1>SCSS</h1>
    <p>
      Scss is <strong>S</strong>assy <strong>C</strong>ascading
      <strong>S</strong>tyle <strong>S</strong>heets
    </p>

    <p>Scss can be separated by a semicolon and run on the same line</p>

    <p>
      <u>SCSS is a preprocessor&nbsp;</u>which lets you use features that aren’t
      a part of the wider CSS standard yet, and provides better workflows for
      maintaining your stylesheets.
    </p>

    <p>
      With SCSS preprocessor, you can reduce the amount of times you repeat
      yourself and ensure you’re writing clean, maintainable code for the
      future.
    </p>

    <p>Scss can take css code and work.&nbsp;</p>

    <p>
      SCSS&nbsp;is fully compatible with the syntax of CSS, while still
      supporting the full power of Sass.
    </p>

    Scss is an extension of the syntax of CSS. This means that every valid CSS
    stylesheet is a valid SCSS file with the same meaning. In addition, SCSS
    understands most CSS hacks and vendor-specific syntax, such as&nbsp;IE's
    old&nbsp;filtersyntax. This syntax is enhanced with the Sass features
    described below. Files using this syntax have the&nbsp;.scss&nbsp;extension.

    <p>
      Dry (dont repeat yourself) code is much better then wet code (write every
      time).&nbsp;
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
export class SCSSComponent {}
