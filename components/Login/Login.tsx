"use client";

import {
  Authenticator,
  ThemeProvider as AmplifyThemeProvider,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { AmplifyLoginConfig } from "@/components/Login/LoginConfig";

function CustomAuthenticator() {
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);

  return <Authenticator components={AmplifyLoginConfig.components} />;
}

export default function LoginCard() {
  return (
    <AmplifyThemeProvider theme={AmplifyLoginConfig.theme}>
      <Authenticator.Provider>
        <CustomAuthenticator />
      </Authenticator.Provider>
    </AmplifyThemeProvider>
  );
}