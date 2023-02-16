import { Component, Input } from "@angular/core";

@Component({
  selector: "app-semantic-elements",
  template: `
    <h1>Semantic Elements</h1>
    <p>
      In HTML, for example, the
      <a
        href="/en-US/docs/Web/HTML/Element/h1"
        title="REDIRECT Heading elements [en-US]"
        ><code>&lt;h1&gt;</code></a
      >
      element is a semantic element, which gives the text it wraps around the
      role (or meaning) of "a top level heading on your page."
    </p>
    <p>
      By default, most browser's
      <a href="/en-US/docs/Web/CSS/Cascade#User-agent_stylesheets"
        >user agent stylesheet</a
      >
      will style an
      <a
        href="/en-US/docs/Web/HTML/Element/h1"
        title="REDIRECT Heading elements [en-US]"
        ><code>&lt;h1&gt;</code></a
      >
      with a large font size to make it <em>look </em>like a heading (although
      you could style it to look like anything you wanted).
    </p>
    <p>
      On the other hand, you could make any element <em>look</em> like a top
      level heading. Consider the following:
    </p>
    <p>
      This will render it to look like a top level heading, but it has no
      semantic value, so it will not get any extra benefits as described above.
      It is therefore a good idea to use the right HTML element for the right
      job.
    </p>
    <p>
      HTML should be coded to represent the <em>data</em> that will be populated
      and not based on its default presentation styling. Presentation (how it
      should look), is the sole responsibility of
      <a href="/en-US/docs/Web/CSS">CSS</a>.
    </p>
    <p>Some of the benefits from writing semantic markup are as follows:</p>
    <ul>
      <li>
        Search engines will consider its contents as important keywords to
        influence the page's search rankings (see
        <a
          href="/en-US/docs/Glossary/SEO"
          class="glossaryLink"
          title="SEO: SEO (Search Engine Optimization) is the process of making a website more visible in search results, also termed improving search rankings."
          >SEO</a
        >)
      </li>
      <li>
        Screen readers can use it as a signpost to help visually impaired users
        navigate a page
      </li>
      <li>
        Finding blocks of meaningful code is significantly easier than searching
        though endless <code>div</code>s with or without semantic or namespaced
        classes
      </li>
      <li>Suggests to the developer the type of data that will be populated</li>
      <li>Semantic naming mirrors proper custom element/component naming</li>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      pre[class*="language-"] {
        font-size: 18px;
        font-size: 1rem;
        background: #eee;
        border: 0 solid #3d7e9a;
        color: #333;
        margin-top: 0;
        margin-bottom: 20px;
        padding: 15px;
        position: relative;
        font-family: consolas, monaco, "Andale Mono", monospace;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        overflow: auto;
        direction: ltr !important;
        text-align: left !important;
        border-left-width: 5px !important;
        border-right-width: 0 !important;
        -moz-tab-size: 4;
        tab-size: 4;
        -moz-hyphens: none;
        -webkit-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }
    `
  ]
})
export class SemanticElementsComponent {}
