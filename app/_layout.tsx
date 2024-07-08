import { Stack } from "expo-router";
import { OAuthStrategy, WixProvider } from "@wix/sdk-react";

export default function RootLayout() {
  return (
    <WixProvider auth={OAuthStrategy({ clientId: "2fb39349-3744-4242-920d-9ccd74af3229" })}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </WixProvider>
  );
}
