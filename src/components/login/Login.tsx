import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  useTheme,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { AuthStateEnum } from "@typings/user-typing";
import { Register } from "@components/register/Register";
type LoginProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type Inputs = {
  email: string;
  password: string;
};

export const Login = ({ open, setOpen }: LoginProps) => {
  const theme = useTheme(); // Get access to the theme
  const [authState, setAuthState] = useState<AuthStateEnum>();
  const textColor = { color: theme.palette.mode === "dark" ? "#fff" : "#444" };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(()=>{
    setAuthState(AuthStateEnum.LOGIN);
  },[])

  console.log('open',open,'authState',authState);
  
  return (
    <>
      {open && (
        <>
        {authState === AuthStateEnum.LOGIN && (
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
                Login
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
                  className="basis-2/3 justify-end	"
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
            <div
              onClick={() => setOpen(false)}
              className="w-4 h-4 absolute top-[10px] right-[20px] cursor-pointer"
            >
              <CloseIcon />
            </div>

            <span onClick={() => setAuthState(AuthStateEnum.REGISTER)} className="fsr-14 inter float-end cursor-pointer">
                  New to blog?
                  <span className="ml-2" style={{ color: '#266FDC' }}>
                    Create an account
                  </span>
                </span>

          </DialogContent>
        </Dialog>
      )}

      {/* Register */}
      {authState === AuthStateEnum.REGISTER && <Register setOpen={setOpen} setAuthState={setAuthState}/>}
        </>
      )}
      
    </>
  );
};
