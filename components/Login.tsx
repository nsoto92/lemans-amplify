"use client";

import {
  Authenticator,
  ThemeProvider as AmplifyThemeProvider,
} from "@aws-amplify/ui-react";
import { AmplifyLoginConfig } from "@/components/LoginConfig";

export default function LoginCard() {
  return (
    <AmplifyThemeProvider theme={AmplifyLoginConfig.theme}>
      <Authenticator.Provider>
        <Authenticator hideSignUp components={AmplifyLoginConfig.components} />
      </Authenticator.Provider>
    </AmplifyThemeProvider>
  );
}