/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { StoreInformation } from '../StoreInformation';
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const StoreTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState(['']);

  useEffect(() => {
    Axios.get('http://localhost:3000/user')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Paper sx={{ width: '95%', m: '3em' }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader arial-label="sticky table">
            <TableHead>
              {/* MAIN HEADER */}
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Identifiers & Names
                </TableCell>
                <TableCell align="center" colSpan={5}>
                  Contact Details & Store Informations
                </TableCell>
                <TableCell align="center" colSpan={6}>
                  EDIT & DELETE
                </TableCell>
              </TableRow>
              {/* SUB HEADER */}
              <TableRow>
                <TableCell align="center" colSpan={1}>
                  Id
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Address
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Store Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Contact
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Price
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Edit
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell colSpan={2}>{user.id}</TableCell>
                    <TableCell colSpan={2}>{user.name}</TableCell>
                    <TableCell colSpan={2}>{user.address}</TableCell>
                    <TableCell colSpan={2}>{user.storename}</TableCell>
                    <TableCell colSpan={2}>{user.contact}</TableCell>
                    <TableCell colSpan={2}>{user.minimumprice}</TableCell>
                    <TableCell colSpan={2}>
                      <EditButton />
                    </TableCell>
                    <TableCell colSpan={2}>
                      {' '}
                      <DeleteButton />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={StoreInformation.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default StoreTable;
