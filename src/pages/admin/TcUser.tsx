import { Button, Container, Typography } from "@mui/material";
import { z } from "zod";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import FormDrawer from "../../components/reusable/FormDrawer";
import DataTable from "../../components/reusable/DataTable";
import useClass from "../../hook/useClass";

const columns = [
  { field: "name", headerName: "Nom", flex: 1 },
  { field: "first_name", headerName: "Prenom", flex: 1 },
  { field: "username", headerName: "Nom utilisateur", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
];
const schema = z.object({
  name: z
    .string({ invalid_type_error: "only letters are allowed for this field" })
    .min(5, { message: "name should a least have 5 characters" }),
  firstName: z
    .string({ invalid_type_error: "only letters are allowed for this field" })
    .min(3),
  email: z
    .string({ invalid_type_error: "only letters are allowed for this field" })
    .min(5, { message: "email field is required" }),

  classe: z.string().min(2, { message: "classe field is required" }),
  experience: z.number({invalid_type_error: "this field can only be a integer"})
});

const TcUser = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const data  = useClass()
  const options: Option[] = data.map((data): Option => {
    return {
      label: data.name,
      value: data._id
    };
  });

  const formFields = [
    { name: "name", label: "Nom", type: "text" },
    { name: "firstName", label: "Prénom", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "experience", label: "Année d'experience", type: "number" , options: { valueAsNumber: true}},
    {
      name: "classe",
      label: "classe",
      type: "select",
      selectOptions: {
        onChange: (value: string) => setSelectValue(value),
        options: options,
        labelId: "class",
        value: selectValue,
        id: "classHello",
        props: { fullWidth: true, sx: { textAlign: "left", mb: 1 } },
      },
    },
  ];

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleSubmit = (data: FieldValues, { onClose, reset }: Submit) => {
    console.log(data);
    onClose();
    reset();
  };

  return (
    <>
      <Typography variant="h5" mt={2} mb={2}>
        Ajouter des utilisateurs des utilisateurs qui administreront la
        plateforme
      </Typography>
      <Typography variant="body1">
        programmer des évaluations pour vos classes.
      </Typography>
      <Typography variant="body1">
        Cliquez sur ce bouton pour accéder au formulaire d'ajout d'utilisateur.
        Remplissez les champs obligatoires du formulaire, tels que le nom,
        l'adresse e-mail et le mot de passe de l'utilisateur que vous voulez
        ajouter. Vous pouvez également ajouter des informations supplémentaires
        comme son numéro de téléphone ou son adresse.
      </Typography>

      <Container sx={{ textAlign: "right", marginBottom: 2, mt: 1 }}>
        <Button variant="contained" onClick={handleOpenDrawer}>
          Ajouter
        </Button>
      </Container>
      <FormDrawer
          open={drawerOpen}
          zodSchema={schema}
          onClose={() => setDrawerOpen(false)}
          formFields={formFields}
          onSubmit={handleSubmit}
          TextFieldProps={{
            sx: {
              mt: 2,
              "&:last-of-type": {
                mb: 2,
              },
            },
          }}
          boxProps={{
            sx: {
              width: "100%",
              padding: 2,
              // borderTopLeftRadius: 1, 
              m: 1,
              textAlign: "center",
            },
          }}
        />
      <DataTable rows={[]} columns={columns} />

    </>
  );
};

export default TcUser;
