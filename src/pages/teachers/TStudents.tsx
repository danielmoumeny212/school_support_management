import { IconButton } from '@mui/material';
import { Note, Message } from '@mui/icons-material';
import { useSelector } from "react-redux";
import{ useEffect, useState } from 'react';
import { Stack, Typography } from "@mui/material"


const columns = [
  { field: 'name', headerName: 'Nom', flex: 1 },
  { field: 'first_name', headerName: 'Prenom', flex: 1 },
  { field: 'username', headerName: "Nom utilisateur", flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  {
    field: 'actions',
    headerName: 'Actions',
    align: 'center',
    sortable: false,
    flex: 1,
    renderCell: () => (
      <>
        <IconButton>
          <Note />
        </IconButton>
        <IconButton>
          <Message />
        </IconButton>
      </>
    ),
  },
];


const TStudents = () => {
  return (
    <div>TStudents</div>
  )
}

export default TStudents