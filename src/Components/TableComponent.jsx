import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Title } from "./Styled";
import PropTypes from "prop-types";

function TableComponent({
  title,
  columns,
  rows,
  filterComponent,
  maxHeight,
  isEmptyState,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ boxShadow: "none", border: "1px solid #CCCCCC", width: "1115px" }}
      elevation={2}
    >
      <TableContainer
        sx={{ maxHeight: maxHeight ? maxHeight : "60vh" }}
        id="scrollbar"
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2}>
                <Title label={title} />
              </TableCell>
              <TableCell align="right" colSpan={2}>
                {filterComponent}
              </TableCell>
            </TableRow>
            {!isEmptyState && (
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    <Title label={column.label} sx={{ fontSize: "14px" }} />
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableHead>
          {!isEmptyState ? (
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          ) : (
            isEmptyState
          )}
        </Table>
      </TableContainer>
      {!isEmptyState && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}

TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  filterComponent: PropTypes.object,
  maxHeight: PropTypes.number,
  isEmptyState: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default TableComponent;
