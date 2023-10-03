import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";

import Button from "@mui/material/Button";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ZodTypeAny } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SelectProps,
  Typography,
  TypographyProps,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import SelectInput from "./SelectInput";

type Anchor = "right";

type FormField = {
  name: string;
  label: string;
  type: string;
  options?: {};
  fileInput?: boolean;
  selectOptions?: {
    options: Option[];
    id: string;
    value: string;
    props?: SelectProps;
    onChange: (value: string) => void;
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
  formFields: FormField[];
  onSubmit: (data: FieldValues, {}: Submit) => void;
  drawerProps?: SwipeableDrawerProps;
  TextFieldProps?: TextFieldProps;
  boxProps?: BoxProps;
  TypograpyProps?: TypographyProps;
  zodSchema: ZodTypeAny;
};
const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));


export default function FormDrawer({
  open,
  onClose,
  formFields,
  onSubmit,
  zodSchema,
  drawerProps,
  TextFieldProps,
  TypograpyProps,
  boxProps,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: zodResolver(zodSchema) });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onClose();
    };

  const onSubmited = (data: FieldValues) => {
    const options: Submit = { onClose, reset };
    onSubmit(data, options);
    console.log(errors);
  };

  const form = (
    <>
      <Box role="presentation" {...boxProps}>
        <form onSubmit={handleSubmit(onSubmited)}>
          {formFields.map(
            ({ name, label, type, options, selectOptions, fileInput }) => (
              <div key={name}>
                {type === "select" && selectOptions ? (
                  <SelectInput
                    otherProps={selectOptions?.props!}
                    register={register(name, options)}
                    {...selectOptions?.props!}
                    value={selectOptions?.value!}
                    id={selectOptions?.id!}
                    labelId={label}
                    onChange={(e) =>
                      selectOptions?.onChange(e.target.value as string)
                    }
                    options={selectOptions?.options!}
                  />
                ) : fileInput ? (
                  <div>
                    <input
                      type="file"
                      {...register(name, { required: true })}
                      accept=".pdf, .doc, .docx"
                    />
                    {errors[name] && (
                      <Typography variant="body2" color="error">
                        {errors[name]?.message as React.ReactNode}
                      </Typography>
                    )}
                  </div>
                ) : (
                  <TextField
                    label={label}
                    type={type}
                    {...TextFieldProps}
                    fullWidth
                    {...register(name)}
                  />
                )}
                {errors[name] && (
                  <Typography variant="body2" color="error" {...TypograpyProps}>
                    {errors[name]?.message as React.ReactNode}
                  </Typography>
                )}
              </div>
            )
          )}
          <Button
            variant="contained"
            sx={{ width: "60%" }}
            disabled={!isValid}
            type="submit"
          >
            Ajouter
          </Button>
          {/* </Box> */}
        </form>
      </Box>
    </>
  );

  return (
    <SwipeableDrawer
      anchor={isMobile ? "bottom" : "right"}
      {...drawerProps}
      open={open}
      onClose={toggleDrawer("right", false)}
      onOpen={toggleDrawer("right", true)}
    >
      {isMobile && <Puller />}
      {form}
    </SwipeableDrawer>
  );
}
