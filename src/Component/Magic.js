import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const magic = new Magic("pk_live_7D365EBAFE7CFE11", {
  extensions: [new OAuthExtension()],
});
