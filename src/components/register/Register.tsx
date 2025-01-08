import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, useTheme } from '@mui/material'
import { AuthStateEnum } from '@typings/user-typing'
import React, { Dispatch, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import CloseIcon from "@mui/icons-material/Close";
type Inputs = {
    email: string;
    password: string;
  };
type registerProps = {
    setOpen:Dispatch<SetStateAction<boolean>>,
    setAuthState:Dispatch<SetStateAction<AuthStateEnum | undefined>>
}
export const Register = ({setOpen,setAuthState}:registerProps) => {
  const theme =  useTheme()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


      const textColor = { color: theme.palette.mode === "dark" ? "#fff" : "#444" };
      

      function handleCloseClk() {
        setAuthState(AuthStateEnum.LOGIN);
        setOpen(false);
      }

  return (
    <Dialog
    open={true}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title"></DialogTitle>

    <DialogContent>
      <form className="max-w-[300px]" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="text-center font-semibold text-[20px] -mt-2 mb-2"
          style={textColor}
        >
           Register
        </div>
        <div className="field mt-5 mb-4 flex justify-between items-center">
          <label
            className="field-label basis-1/3"
            htmlFor="email"
            style={textColor}
          >
            Email:
          </label>

          <TextField
            className="basis-2/3 justify-end	"
            {...register("email")}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="field mt-5 mb-4 flex justify-between items-center">
          <label
            className="field-label basis-1/3"
            htmlFor="email"
            style={textColor}
          >
            Password:
          </label>
          <TextField
            className="basis-2/3 justify-end"
            {...register("password")}
            type="password"
            id="email"
          />
        </div>

        <DialogActions>
          <Button
            variant="outlined"
            type="submit"
            onClick={() => setOpen(false)}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
      <div onClick={handleCloseClk} className="w-4 h-4 absolute top-[10px] right-[20px] cursor-pointer">
          <CloseIcon />
        </div>

        <span onClick={() => setAuthState(AuthStateEnum.LOGIN)} className="fsr-14 inter float-end cursor-pointer" style={{ color: '#266FDC' }}>
          Back to login
        </span>

     
    </DialogContent>
  </Dialog>
  )
}
