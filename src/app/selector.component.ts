import { Component, Input } from "@angular/core";

@Component({
  selector: "app-selector",
  template: `
    <h1>Seletor</h1>
    <p>
      You have met selectors already. A CSS selector is the first part of a CSS
      Rule. It is a pattern of elements and other terms that tell the browser
      which HTML elements should be selected to have the CSS property values
      inside the rule applied to them. The element or elements which are
      selected by the selector are referred to as the
      <em>subject of the selector</em>.
    </p>
    <p>
      <img
        alt="Some code with the h1 highlighted."
        src="https://mdn.mozillademos.org/files/16550/selector.png"
        style="border: 1px solid #cccccc; height: 218px; width: 471px;"
      />
    </p>
    <p>
      In earlier articles you met some different selectors, and learned that
      there are selectors that target the document in different ways — for
      example by selecting an element such as <code>h1</code>, or a class such
      as <code>.special</code>.
    </p>
    <p>
      In CSS, selectors are defined in the CSS Selectors specification; like any
      other part of CSS they need to have support in browsers for them to work.
      The majority of selectors that you will come across are defined in the
      <a
        class="external"
        href="https://www.w3.org/TR/selectors-3/"
        rel="noopener"
        >Level 3 Selectors specification</a
      >, which is a mature specification, therefore you will find excellent
      browser support for these selectors.
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
export class SelectorComponent {}
