import toast, { ToastPosition } from "react-hot-toast";

type ToastResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

type ToastOptions = {
  loadingMessage?: string;
  successCallback?: () => void;
  errorCallback?: () => void;
  position?: ToastPosition;
};

type ToastStyle = {
  minWidth: string;
  backgroundColor: string;
  color: string;
  border: string;
};

const defaultStyle: ToastStyle = {
  minWidth: "250px",
  backgroundColor: "#1F2937",
  color: "#F3F4F6",
  border: "1px solid #374151",
};

export const useToast = (defaultPosition: ToastPosition = "top-right") => {
  const promiseToast = async <T>(
    promise: Promise<ToastResponse<T>>,
    options: ToastOptions = {}
  ) => {
    const {
      loadingMessage = "Cargando...",
      successCallback,
      errorCallback,
      position = defaultPosition,
    } = options;

    return toast.promise<ToastResponse<T>>(
      promise,
      {
        loading: loadingMessage,
        success: (result: ToastResponse<T>) => {
          if (result.success) {
            successCallback?.();
            return result.message;
          }
          throw new Error(result.message);
        },
        error: (err: unknown) => {
          errorCallback?.();
          if (err instanceof Error) {
            return err.message;
          }
          return "Ha ocurrido un error. Por favor, intenta nuevamente.";
        },
      },
      {
        position,
        style: defaultStyle,
        success: {
          duration: 5000,
          iconTheme: {
            primary: "#10B981",
            secondary: "#F3F4F6",
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: "#EF4444",
            secondary: "#F3F4F6",
          },
        },
      }
    );
  };

  const successToast = (
    message: string,
    position: ToastPosition = defaultPosition
  ) => {
    toast.success(message, {
      position,
      style: defaultStyle,
      iconTheme: {
        primary: "#10B981",
        secondary: "#F3F4F6",
      },
    });
  };

  const errorToast = (
    message: string,
    position: ToastPosition = defaultPosition
  ) => {
    toast.error(message, {
      position,
      style: defaultStyle,
      iconTheme: {
        primary: "#EF4444",
        secondary: "#F3F4F6",
      },
    });
  };

  return {
    promiseToast,
    successToast,
    errorToast,
  };
};
