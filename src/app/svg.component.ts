import { Component, Input } from "@angular/core";

@Component({
  selector: "app-svg",
  template: `
    <h1>SVG</h1>
<p class="summary" style="border-top-width: 0; padding-top: 0;"><span class="seoSummary"><strong>Scalable Vector Graphics (SVG)</strong>&nbsp;are&nbsp;an <a href="/en-US/docs/XML">XML</a>-based markup language for describing two-dimensional based <a class="external" href="https://en.wikipedia.org/wiki/Vector_graphics" rel="noopener">vector graphics</a>.</span> As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including <a href="/en-US/docs/CSS">CSS</a>, <a href="/en-US/docs/DOM">DOM</a>, <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, and <a href="/en-US/docs/Web/SVG/SVG_animation_with_SMIL">SMIL</a>. SVG is, essentially, to graphics what <a href="/en-US/docs/Web/HTML">HTML</a> is to text.</p>
<p>SVG images and their related behaviors are defined in <span class="seoSummary"><a href="/en-US/docs/XML">XML</a></span> text files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text editor or with drawing software.</p>
<p>Compared to classic bitmapped image formats such as <a href="/en-US/docs/Glossary/JPEG">JPEG</a> or <a href="/en-US/docs/Glossary/PNG">PNG</a>, SVG-format vector images can be rendered at any size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so. With proper libraries, SVG files can even be localized on-the-fly.</p>
<p>SVG has been&nbsp;developed by the <a class="external" href="https://www.w3.org/" rel="noopener">World Wide Web Consortium (W3C)</a> since 1999.</p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class SVGComponent {}
