import { Button } from "@mui/material";
import FormDrawer from "../../components/reusable/FormDrawer";
import * as React from "react";
import { FieldValues } from "react-hook-form";

import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  firstName: z
    .string({ invalid_type_error: "Amount field is required" })
    .min(3),
  email: z
    .string({ invalid_type_error: "Categorie field is required" })
    .min(5, { message: "Categorie field is required" }),
});

const AdHome = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const formFields = [
    { name: "name", label: "Nom", type: "text" },
    { name: "firstName", label: "Prénom", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSubmit = (data: FieldValues, {onClose, reset}:Submit) => {
    console.log(data);
    onClose();
  };

  return (
    <div>
      <Button onClick={handleOpenDrawer}>Ouvrir le tiroir</Button>
      <FormDrawer
        open={drawerOpen}
        zodSchema={schema}
        onClose={handleCloseDrawer}
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
            width: 500,
            padding: 2,
            m: 1,
            textAlign: "center",
          },
        }}
        formFields={formFields}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdHome;
