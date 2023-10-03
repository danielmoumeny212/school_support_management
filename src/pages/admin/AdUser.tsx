import { Message, Note } from "@mui/icons-material";
import { Button, Container, IconButton, Typography } from "@mui/material";
import DataTable from "../../components/reusable/DataTable";


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

const AdUser = () => {
  return (
    <>
      <Typography variant="h5" mt={2} mb={2}>
        Ajouter des utilisateurs des utilisateurs qui administreront la plateforme 
      </Typography>
      <Typography variant="body1">
        programmer des évaluations pour vos classes.
      </Typography>
      <Typography variant="body1" >
        Cliquez sur ce bouton pour accéder au formulaire d'ajout d'utilisateur.
        Remplissez les champs obligatoires du formulaire, tels que le nom,
        l'adresse e-mail et le mot de passe de l'utilisateur que vous voulez
        ajouter. Vous pouvez également ajouter des informations supplémentaires
        comme son numéro de téléphone ou son adresse.
      </Typography>

      <Container sx={{ textAlign: "right", marginBottom: 2, mt: 1}}>
      <Button variant="contained">
          Ajouter
       </Button>
      </Container>
      <DataTable rows={[]}  columns={columns} />
    </>
  );
};

export default AdUser;
