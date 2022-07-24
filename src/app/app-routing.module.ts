import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StepperComponent} from "./components/stepper/stepper.component";
import {ClientFormGuard} from "./guards/client-form.guard";
import {WizardPages} from "./types/enums";

export const routes: Routes = [
  {
    path: 'client-form',
    component: StepperComponent,
    children: [
      {
        path: 'address',
        data: {
          step: WizardPages.Address
        },
        canActivate: [ClientFormGuard],
        loadChildren: () => import('./features/address/address.module').then(m => m.AddressModule)
      },
      {
        path: 'client',
        data: {
          step: WizardPages.Client
        },
        canActivate: [ClientFormGuard],
        loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'identity',
        data: {
          step: WizardPages.Identity
        },
        canActivate: [ClientFormGuard],
        loadChildren: () => import('./features/identity/identity.module').then(m => m.IdentityModule)
      },
      {
        path: '**',
        redirectTo: 'client'
      }
    ]
  },
  {
    path: 'clients',
    children: [
      {
        path: '',
        loadChildren: () => import('./features/list/list.module').then(m => m.ListModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./features/single-client/single-client.module').then(m => m.SingleClientModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'clients'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
