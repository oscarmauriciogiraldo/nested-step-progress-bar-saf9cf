import { Component, Input } from "@angular/core";

@Component({
  selector: "app-animation",
  template: `
    <h1>Animation</h1>
    <p>
      <span class="seoSummary"
        ><strong>CSS animations</strong> make it possible to animate transitions
        from one CSS style configuration to another.</span
      >
      Animations consist of two components, a style describing the CSS animation
      and a set of keyframes that indicate the start and end states of the
      animation’s style, as well as possible intermediate waypoints.
    </p>
    <p>
      There are three key advantages to CSS animations over traditional
      script-driven animation techniques:
    </p>
    <ol>
      <li>
        They’re easy to use for simple animations; you can create them without
        even having to know JavaScript.
      </li>
      <li>
        The animations run well, even under moderate system load. Simple
        animations can often perform poorly in JavaScript (unless they’re well
        made). The rendering engine can use frame-skipping and other techniques
        to keep the performance as smooth as possible.
      </li>
      <li>
        Letting the browser control the animation sequence lets the browser
        optimize performance and efficiency by, for example, reducing the update
        frequency of animations running in tabs that aren't currently visible.
      </li>
    </ol>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class AnimationComponent {}
