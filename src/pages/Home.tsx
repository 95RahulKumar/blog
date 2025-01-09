import { useDialog } from "@hooks/useDialog";
import { useDispatch, useSelector } from "react-redux";
import { PushToastMessage } from "@store/reducers/toastSlice";
import { Button } from "@mui/material";
import { RootState } from "@store/store";
const Home = () => {
  const { askConfirmation } = useDialog();
  const handleDialogOpen = () => {
  };

  const dispatch = useDispatch();
  const handlePushMessage = () => {
    dispatch(PushToastMessage({ message: "hello", type: "SUCCESS" }));
  };


  return (
    <>
      <Button variant="outlined" onClick={handleDialogOpen}>
        Open Dialog
      </Button>
      <Button variant="outlined" onClick={handlePushMessage}>
        push message
      </Button>
    </>
  );
};

export default Home;
