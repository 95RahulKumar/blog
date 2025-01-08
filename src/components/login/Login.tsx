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
import schema from "./loginScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHttp } from "@hooks/useHttp";
import { useDispatch } from "react-redux";
import { PushToastMessage } from "@store/reducers/toastSlice";
type LoginProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type UserDetails = {
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
    reset,
    formState: {errors, isDirty,isValid },
  } = useForm<UserDetails>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

 const http = useHttp();
 const dispatch = useDispatch()
  const onSubmit: SubmitHandler<UserDetails> = async (userDetails:UserDetails) => {
    console.log(userDetails)
    const res = await http.request('post','/login',null,userDetails);
    console.log(res);
    if(res.status== 200){
      setOpen(false)
      reset()
    }else{
      dispatch(PushToastMessage({message:'Something went wrong',type:'ERROR'}))
    }
  };

  const handleCloseDialog = () =>{
    setOpen(false);
    reset()
  }
  useEffect(()=>{
    setAuthState(AuthStateEnum.LOGIN);
  },[])
  
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
              <div className="field mt-3 flex justify-between items-center">
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
              { errors.email && (<Typography color="error" variant="caption">
      {errors.email.message}
    </Typography>)}
              <div className="field mt-3 mb-1 flex justify-between items-center">
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
                  id="password"
                  name="password"
                />
              </div>
              { errors.password && ( <Typography color="error" variant="caption">
      {errors.password.message}
    </Typography>)}
              <DialogActions>
                <Button
                  disabled={!(isDirty&&isValid)}
                  variant="outlined"
                  type="submit"
                  // onClick={() => setOpen(false)}
                >
                  Submit
                </Button>
              </DialogActions>
            </form>
            <div
              onClick={handleCloseDialog}
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
