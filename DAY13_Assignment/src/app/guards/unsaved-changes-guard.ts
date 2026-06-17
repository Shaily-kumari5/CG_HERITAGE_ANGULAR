import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard:
CanDeactivateFn<any> = (component) => {

  if(component.canDeactivate()){
    return true;
  }

  return confirm(
    'You have unsaved changes. Leave page?'
  );
};