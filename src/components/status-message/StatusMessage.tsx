import { ToastColors, ToasterProps, ToastMessage } from "@typings/common";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { v4 as uuidv4 } from 'uuid';
import "./statusMessage.scss";
import { Snackbar } from "@mui/material";
export const StatusMessage = () => {
  const [scheduler, setScheduler] = useState<Array<ToasterProps>>([]);
  const { message } = useSelector((state: RootState) => state.toastMessage);

  useEffect(() => {
    const createNewToast = (message: ToastMessage) => {
        const newToast: ToasterProps = {
            id: uuidv4(),
            message: message,
            visible: true,
            duration: 3000,
            onHide: () => removeToast(newToast.id),
        };
        setScheduler((prevState) => [newToast, ...prevState]);
    };
    if (message) {
      createNewToast(message);
    }
  }, [message]);

  const removeToast = (id: string) => {
    setScheduler((prevState) => prevState.filter((toast) => toast.id !== id));
  };

  return (
    <>
      {scheduler.map((toast, index) => (
        <div className="container"  key={toast.id}>
          <AlertComponent
            {...toast}
            style={{ top: index * 70 }}
          />
        </div>
      ))}
    </>
  );
};

type AlertProps = {
  id: string;
  message: ToastMessage;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
};
export const AlertComponent = ({
  id,
  message,
  visible,
  duration = 8000,
  onHide,
  style,
}: AlertProps & { style?: object }) => {
  function getBackgroundColorOnTypeMessage(message: ToastMessage): string {
    switch (message.type) {
      case "WARNING":
        return ToastColors.WARNING;
      case "SUCCESS":
        return ToastColors.SUCCESS;
      case "ERROR":
        return ToastColors.ERROR;
      case "FAILURE":
        return ToastColors.FAILURE;
      case "INFO":
        return ToastColors.INFO;
      default:
        return ToastColors.DEFAULT;
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  const hideToast = () => {
    onHide && onHide();
  };

  return (
    <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'right'}}
        open={true}
        color="primary"
        message={message?.message} />
  );
};
