import { Component, Input } from "@angular/core";

@Component({
  selector: "app-jquery",
  template: `
    <h1>jQuery</h1>
    <p>
      <span class="seoSummary"
        ><strong>jQuery</strong> is a
        <a href="/en-US/docs/Glossary/JavaScript">JavaScript</a>
        <a class="new" rel="nofollow" title="Page has not yet been created."
          >Library</a
        >
        that focuses on simplifying
        <a href="/en-US/docs/Glossary/DOM">DOM</a> manipulation,
        <a href="/en-US/docs/Glossary/AJAX">AJAX</a> calls, and
        <a href="/en-US/docs/Glossary/Event">Event</a> handling.</span
      >
    </p>
    <p>
      jQuery uses a format, <code>$(selector).action()</code> to assign an
      element(s) to an event. To explain it in detail,
      <code>$(selector)</code> will call jQuery to select
      <code>selector</code> element(s), and assign it to an event
      <a href="/en-US/docs/Glossary/API">API</a> called <code>.action()</code>.
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
export class JQueryComponent {}
