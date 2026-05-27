import { ColumnType, GridOptions } from "../models/grid-model";

export class GridSortingUtil {


    public static sortGrid(columnKey: string, gridOptions: GridOptions, factor: number): void {
        const columnType =
            gridOptions.columns?.[columnKey].type;



        gridOptions.gridData?.sort((a, b) =>
            this.sortCompare(a[columnKey], b[columnKey], columnType, factor)
        );
    }

    public static updateSortState(
        columnKey: string,
        currentColumn: string | null,
        currentDirection: 'asc' | 'desc'
    ): {
        sortColumn: string;
        sortDirection: 'asc' | 'desc';
    } {

        if (currentColumn === columnKey) {
            return {
                sortColumn: columnKey,
                sortDirection:
                    currentDirection === 'asc'
                        ? 'desc'
                        : 'asc'
            };
        }

        return {
            sortColumn: columnKey,
            sortDirection: 'asc'
        };
    }

    private static sortCompare(a: any, b: any, type: ColumnType | undefined, factor: number): number {
        const emptyResult = this.compareEmpty(a, b);

        if (emptyResult !== null) {
            return emptyResult;
        }

        switch (type) {

            case ColumnType.number:
                return this.compareNumber(a, b, factor);

            case ColumnType.boolean:
                return this.compareBoolean(a, b, factor);

            case ColumnType.date:
            case ColumnType.datetime:
                return this.compareDate(a, b, factor);

            case ColumnType.string:
            default:
                return this.compareString(a, b, factor);
        }
    }

    private static compareEmpty(a: any, b: any): number | null {

        const aEmpty = this.isEmpty(a);
        const bEmpty = this.isEmpty(b);

        if (aEmpty && !bEmpty) return -1;
        if (!aEmpty && bEmpty) return 1;
        if (aEmpty && bEmpty) return 0;

        return null;
    }

    private static isEmpty(value: any): boolean {

        return (
            value === null ||
            value === undefined ||
            value === ''
        );
    }

    private static compareString(a: any, b: any, factor: number): number {

        return String(a).localeCompare(String(b), undefined, {
            numeric: true,
            sensitivity: 'base'
        }
        ) * factor;
    }

    private static compareNumber(a: any, b: any, factor: number): number {
        return (
            (Number(a) - Number(b))
            * factor
        );
    }

    private static compareBoolean(a: any, b: any, factor: number): number {
        return (Number(a) - Number(b)) * factor;
    }

    private static compareDate(a: any, b: any, factor: number): number {
        return (
            new Date(a).getTime() - new Date(b).getTime()
        ) * factor;
    }
}