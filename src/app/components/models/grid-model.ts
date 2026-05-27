import { TemplateRef } from "@angular/core";

export interface GridOptions {
    columns?: { [key: string]: { displayName: string; type: ColumnType } };
    gridData?: any[];
    showButtonColumn?: boolean;
}

export enum ColumnType {
    string,
    number,
    boolean,
    date,
    datetime,
    gender
} 