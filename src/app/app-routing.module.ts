import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StepperComponent} from "./components/stepper/stepper.component";

export const routes: Routes = [
  {
    path: 'client-form',
    component: StepperComponent,
    children: [
      {
        path: 'address',
        loadChildren: () => import('./features/address/address.module').then(m => m.AddressModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'identity',
        loadChildren: () => import('./features/identity/identity.module').then(m => m.IdentityModule)
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
        path: '',
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
