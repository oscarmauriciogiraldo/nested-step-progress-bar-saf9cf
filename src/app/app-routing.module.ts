import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartComponent } from "./start.component";
import { SemanticElementsComponent } from "./semantic-elements.component";
import { FormComponent } from "./form.component";
import { SVGComponent } from "./svg.component";
import { CanvasComponent } from "./canvas.component";
import { SelectorComponent } from "./selector.component";
import { ResponsiveDesignComponent } from "./responsive-design.component";
import { SCSSComponent } from "./scss.component";
import { AnimationComponent } from "./animation.component";
import { JQueryComponent } from "./jquery.component";
import { ES6Component } from "./es6.component";
import { NodejsComponent } from "./nodejs.component";
import { PhotoshopComponent } from "./photoshop.component";
import { SketchComponent } from "./sketch.component";
import { InvisionComponent } from "./invision.component";
import { EndComponent } from "./end.component";

const routes: Routes = [
  { path: "start", component: StartComponent },
  {
    path: "html",
    children: [
      { path: "semantic-elements", component: SemanticElementsComponent },
      { path: "form", component: FormComponent },
      { path: "svg", component: SVGComponent },
      { path: "canvas", component: CanvasComponent },
      { path: "", redirectTo: "semantic-elements", pathMatch: "full" }
    ]
  },
  {
    path: "css",
    children: [
      { path: "selector", component: SelectorComponent },
      { path: "responsive-design", component: ResponsiveDesignComponent },
      { path: "scss", component: SCSSComponent },
      { path: "animation", component: AnimationComponent },
      { path: "", redirectTo: "selector", pathMatch: "full" }
    ]
  },
  {
    path: "js",
    children: [
      { path: "jquery", component: JQueryComponent },
      { path: "es6", component: ES6Component },
      { path: "nodejs", component: NodejsComponent },
      { path: "", redirectTo: "jquery", pathMatch: "full" }
    ]
  },
  { path: "photoshop", component: PhotoshopComponent },
  { path: "sketch", component: SketchComponent },
  { path: "invision", component: InvisionComponent },
  { path: "end", component: EndComponent },
  { path: "", redirectTo: "start", pathMatch: "full" },
  { path: "**", component: StartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
