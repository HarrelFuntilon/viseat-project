/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditButton from './EditButton';

interface StoreColumn {
  id:
    | 'identifier'
    | 'name'
    | 'storename'
    | 'address'
    | 'contact'
    | 'minprice'
    | 'edit'
    | 'delete';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const Storecolumns: StoreColumn[] = [
  { id: 'identifier', label: 'Id', minWidth: 25 },
  { id: 'name', label: 'Name', minWidth: 80 },
  { id: 'storename', label: 'Store\u00a0Name', minWidth: 80 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 80,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'contact',
    label: 'Contact',
    minWidth: 80,
  },
  {
    id: 'minprice',
    label: 'Minimum Price',
    minWidth: 80,
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'edit',
    label: 'EDIT',
    minWidth: 30,
  },
  {
    id: 'delete',
    label: 'DELETE',
    minWidth: 30,
  },
];

interface StoreData {
  identifier: number;
  name: string;
  storename: string;
  address: string;
  contact: number;
  minprice: number;
}

interface UserColumn {
  id: 'identifier' | 'name' | 'storename' | 'username' | 'password';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const UserColummns: UserColumn[] = [
  { id: 'identifier', label: 'Id', minWidth: 25 },
  { id: 'name', label: 'Name', minWidth: 25 },
  { id: 'storename', label: 'Store\u00a0Name', minWidth: 80 },
  { id: 'username', label: 'Username', minWidth: 25 },
  { id: 'password', label: 'Password', minWidth: 25 },
];

interface UserData {
  identifier: number;
  name: string;
  storename: string;
  username: string;
  password: string;
}

function createStoreData(
  identifier: number,
  name: string,
  storename: string,
  address: string,
  contact: number,
  minprice: number,
): StoreData {
  return { identifier, name, storename, address, contact, minprice };
}
function createUserData(
  identifier: number,
  name: string,
  storename: string,
  username: string,
  password: string,
): UserData {
  return { identifier, name, storename, username, password };
}
const userRows = [
  createUserData(1, 'Michael', 'Michael Eateries', 'mark22', '*****'),
];
const storeRows = [
  createStoreData(
    1,
    'Michael',
    'Michael Eateries',
    'Northwood CA.',
    1231,
    1000,
  ),
  createStoreData(
    2,
    'Michael',
    'Michael Eateries',
    'Northwood CA.',
    1231,
    1000,
  ),
];

export default function ColumnGroupingTable({ dataType }: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = dataType === 'Users' ? UserColummns : Storecolumns;
  const rows = dataType === 'Users' ? userRows : storeRows;

  return (
    <Paper sx={{ width: '95%', m: '3em' }}>
      <TableContainer sx={{ maxHeight: '500px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Identifiers & Names
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Contact Details & Store Informations
              </TableCell>
              <TableCell align="center" colSpan={4}>
                EDIT & DELETE
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.identifier}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];

                      // Add a check for the column.id to determine if it's a column where you want to add buttons
                      if (column.id === 'edit' || column.id === 'delete') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {/* Assuming you have a Button component */}
                            <EditButton />
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format != null && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
