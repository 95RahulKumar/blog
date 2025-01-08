import { useDialog } from "@hooks/useDialog";
import { useDispatch } from "react-redux";
import { PushToastMessage } from "@store/reducers/toastSlice";
import { Button } from "@mui/material";
const Home = () => {
  const { askConfirmation } = useDialog();
  const handleDialogOpen = () => {
    askConfirmation("Confirmation", "Are you Sure ?", 1);
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
