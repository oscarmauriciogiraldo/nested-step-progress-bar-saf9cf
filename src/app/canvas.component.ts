import { Component, Input } from "@angular/core";

@Component({
  selector: "app-canvas",
  template: `
    <h1>Canvas</h1>
    <p>
      <a href="/en-US/docs/Web/HTML/Element/canvas" title="HTML/Canvas"
        ><strong><code>&lt;canvas&gt;</code></strong></a
      >
      is an <a href="/en-US/docs/Web/HTML" title="HTML">HTML</a> element which
      can be used to draw graphics via scripting (usually
      <a href="/en-US/docs/Glossary/JavaScript" title="JavaScript">JavaScript</a
      >). This can, for instance, be used to draw graphs, combine photos, or
      create simple (and
      <a
        href="/en-US/docs/Web/API/Canvas_API/A_basic_ray-caster"
        title="A_Basic_RayCaster"
        >not so simple</a
      >) animations. The images on this page show examples of
      <a href="/en-US/docs/Web/HTML/Element/canvas" title="HTML/Canvas"
        ><strong><code>&lt;canvas&gt;</code></strong></a
      >
      implementations which will be created in this tutorial.
    </p>
    <p>
      The Canvas API largely focuses on 2D graphics. The
      <a href="/en-US/docs/Web/WebGL">WebGL API</a>, which also uses the
      <code>&lt;canvas&gt;</code> element, draws hardware-accelerated 2D and 3D
      graphics.
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
export class CanvasComponent {}
