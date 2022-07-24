import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: 'client-form',
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
  {path: '**', redirectTo: 'clients'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
