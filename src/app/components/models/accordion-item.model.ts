import { TemplateRef } from "@angular/core";

 

  export interface AccordionItem {

    title: string;
  
    content?: string;
  
    template?: TemplateRef<unknown>;
  
    expanded?: boolean;
  
  }