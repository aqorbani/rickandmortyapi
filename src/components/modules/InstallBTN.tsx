import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const InstallBTN = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    (deferredPrompt as any).prompt();

    const { outcome } = await (deferredPrompt as any).userChoice;
    console.log("User response to the install prompt:", outcome);

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    <>
      {showInstall && (
        <Button
          onClick={handleInstallClick}
          sx={{ mt:3,
            color: "#fff",
            "&:hover": {
              borderColor: "#fff",
              bgcolor: "green",
            },
            fontWeight: "bolder", }}
        >
          Install App
        </Button>
      )}
    </>
  );
};

export default InstallBTN;
