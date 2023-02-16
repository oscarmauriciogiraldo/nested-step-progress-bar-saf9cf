import { Component, Input } from "@angular/core";

@Component({
  selector: "app-es6",
  template: `
    <h1>ES6</h1>
    <p>
      ECMAScript 2015&nbsp;is the sixth edition&nbsp;of the ECMAScript Language
      Specification standard. It defines the standard for the
      <a href="/en-US/docs/Web/JavaScript">JavaScript</a> implementation in
      <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, the
      engine used in Firefox and other Mozilla applications.
    </p>
    <p>
      Code-named "ES.next",&nbsp;"Harmony", or "ECMAScript 6", the first working
      draft (based on
      <a
        href="/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla"
        >ECMAScript 5.1</a
      >) was published on July 12, 2011 as "ES.next". In August 2014, the
      ECMAScript 2015 draft specification was feature frozen and went through a
      stabilization and bug fixing period. Finally, ECMA-262 Edition 6 got
      officially approved and published as a standard on June 17, 2015 by the
      ECMA General Assembly. It will also appear as the international industry
      standard ISO/IEC 16262:2016.
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
export class ES6Component {}
