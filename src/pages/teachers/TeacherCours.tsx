import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Container,
  Typography,
  Link,
} from "@mui/material";
import { fetchSupport, getStatus, addSupport, getSupports } from "../../features/supportSlice";
import { RootState } from "../../app/store";
import DataTable from "../../components/reusable/DataTable";
import useClass from "../../hook/useClass";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import FormDrawer from "../../components/reusable/FormDrawer";
import classService from "../../services/classService";

const columns = [
  { field: "className", headerName: "Classe", flex: 1 },
  {
    field: "name",
    headerName: "Nom du support",
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Link
          href={`http://localhost:5000/uploads/${params.row.file}`}
          target="_blank"
        >
          {params.row.name}
        </Link>
      );
    },
  },
  { field: "description", headerName: "description", flex: 1 },
];
const fileSchema = z.object({
  0: z.object({
    name: z.string(),
    size: z.number().max(5242880, "Le fichier doit être inférieur à 5 Mo").min(1, "Le fichier est requis"),
    type: z.string().regex(/^application\/(pdf|msword|vnd\.ms-powerpoint)$/, "Le fichier doit être de type PDF, Word, HTML ou PowerPoint"),
    lastModified: z.number(),
    lastModifiedDate: z.date(),
    webkitRelativePath: z.string().optional()
  })
});
const schema = z.object({
  support: z.string().min(1,{message: "Champ obligatoire"}),
  description: z.string().min(1,{message: "Champ obligatoire"}),
  file: fileSchema,
  classId: z.string().min(1,{message: "Champ obligatoire"}),
});


const TeacherCours = () => {
  const classrooms = useClass(); 
  const [selectValue, setSelectValue] = useState("");


  const options: Option[] = classrooms.map((data): Option => {
    return {
      label: data.name,
      value: data._id
    };
  });
  const formFields = [
    {name: "support", label: "Nom du Support", type: "text"}, 
    {name: "description", label: "Description", type: "text"},
    {name: "file", label: "", type: "file", fileInput: true},
    {name: "classId", label: "La Class Correspondante", type: "select", selectOptions: {
      onChange: (value: string) => setSelectValue(value),
      options,
      labelId: "classId",
      value: selectValue,
      id: "classIds", 
      props: { fullWidth: true, sx: { textAlign: "left", mb: 1 } },
    }}
  ]
  const { name, firstName, id: userId} = useSelector((state:RootState) => state.user);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const supports = useSelector(getSupports); 
  const supportStatus = useSelector(getStatus); 
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  useEffect(() => {
      dispatch(fetchSupport());
  }, [dispatch])
   
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleSubmit = (data: FieldValues, { onClose, reset }: Submit) => {
    const  { file:{0: cFile} , ...others} = data;
    const fileData = new FormData(); 
    const filename = Date.now() + cFile.name; 
    fileData.append("name", filename);
    fileData.append("file",cFile);
    let support: Support = {
      name: others.support,
      description: others.description,
      file: filename, 
      class: others.classId, 
      teacher: userId!, 
    }
    
    const  request = classService.uploadFile(fileData);
    const supportI = {
      classId: others.classId,
      support
    }
    request.then(
      (res) => {
       if (res.status === 200) {
          dispatch(addSupport(supportI))
       }
      }
    ).catch((error) => {

    })
    onClose();
    reset();
  };
  return (
    <>
    <Typography variant="h5" mt={2} mb={2}>
        Fournisser des supports a vos etudiants
      </Typography>
      <Typography variant="body1">
        {`${name} ${firstName}`} fournissez  du support à vos étudiants.
      </Typography>
      <Typography variant="body1">
        Vous pouvez ajouter des ressources utiles , de type PDF , word, pdf
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
              width:400 ,
              padding: 2,
              // borderTopLeftRadius: 1, 
              m: 1,
              textAlign: "center",
            },
          }}
        />

      {supportStatus === "loading" &&
         <DataTable rows={[]} columns={columns} loading={true}/>
      }
      {supportStatus === "succeeded" && 
         <DataTable rows={supports} columns={columns} getRowId={(row) => row._id} />
     }
    
    </>
  )
}

export default TeacherCours