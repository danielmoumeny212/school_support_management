import { DataGrid } from "@mui/x-data-grid";

interface DataTableProps {
  rows: any;
  columns: any;
  getRowId?: (row: any) => number;
  loading?: boolean;
  others?: any;
}

export default function DataTable({
  rows,
  columns,
  getRowId,
  loading,
}: DataTableProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        loading={loading}
      />
    </div>
  );
}
