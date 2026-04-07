import { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    // @ts-ignore
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    // @ts-ignore
    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCallbackResponse = async (response: any) => {
    const res = await fetch("/api/auth/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: response.credential }),
    });
    const data = await res.json();
    console.log(data);
  };

  return <div id="googleBtn"></div>;
};

export default GoogleLoginButton;
