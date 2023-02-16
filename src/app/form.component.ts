import { Component, Input } from "@angular/core";

@Component({
  selector: "app-form",
  template: `
    <h1>Form</h1>
<p>Before starting this module, you should at least work through our <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction&nbsp;to&nbsp;HTML</a>. At this point you should find the <a href="#Introductory_guides">Introductory guides</a> easy to understand, and also be able to make use of our <a href="/en-US/docs/Learn/Forms/Basic_native_form_controls">Basic native form controls</a> guide.</p>
<p>Mastering forms however requires more than just HTML knowledge — you also need to learn some specific techniques to style form controls, and some scripting knowledge is required to handle things like validation and creating custom form controls. Therefore, before you look at the other sections listed below we'd recommend that you go away and learn some <a href="/en-US/docs/Learn/CSS">CSS</a> and <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> first.</p>
<p>The above text is a good indicator as to why we've put web forms into its own standalone module, rather than trying to mix bits of it into the HTML, CSS, and JavaScript topic areas — form elements are more complex than most other HTML elements, and they also require a close marriage of related CSS and JavaScript techniques to get the most out of them.</p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class FormComponent {}
