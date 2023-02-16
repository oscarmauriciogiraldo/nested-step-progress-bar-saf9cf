import { Component, Input } from "@angular/core";

@Component({
  selector: "app-invision",
  template: `
    <h1>Invision</h1>
    <p>
      100% of the Fortune 100 upgrade to InVision Enterprise to build better
      digital products, faster.
    </p>
    <h2>Unlimited potential to collaborate</h2>
    <p>
      InVision Enterprise offers unlimited documents, no user limits, customer
      success support and optional DSM Enterprise.
    </p>
    <h2>Enterprise-grade security</h2>
    <p>
      The most security-conscious financial companies trust InVision
      Enterprise’s 24/7 security team, SAML-based Single Sign-On, and private
      cloud options.
    </p>
    <h2>Advanced user management</h2>
    <p>
      Gain greater control over assigning roles and access levels to each team
      member of your team.
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
export class InvisionComponent {}
