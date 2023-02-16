import { Component, Input } from "@angular/core";

@Component({
  selector: "app-nodejs",
  template: `
    <h1>Node.js</h1>
    <p>
      <b>Node.js</b> is an
      <a href="/wiki/Open-source_software" title="Open-source software"
        >open-source</a
      >,
      <a href="/wiki/Cross-platform" class="mw-redirect" title="Cross-platform"
        >cross-platform</a
      >, <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> runtime
      environment that executes JavaScript code outside of a
      <a href="/wiki/Web_browser" title="Web browser">web browser</a>. Node.js
      lets developers use JavaScript to write command line tools and for
      <a href="/wiki/Server-side_scripting" title="Server-side scripting"
        >server-side scripting</a
      >—running scripts server-side to produce
      <a href="/wiki/Dynamic_web_page" title="Dynamic web page"
        >dynamic web page</a
      >
      content before the page is sent to the user's web browser. Consequently,
      Node.js represents a "JavaScript everywhere" paradigm,<sup
        id="cite_ref-6"
        class="reference"
        ><a href="#cite_note-6">[6]</a></sup
      >
      unifying
      <a href="/wiki/Web_application" title="Web application"
        >web-application</a
      >
      development around a single programming language, rather than different
      languages for server- and client-side scripts.
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
export class NodejsComponent {}
