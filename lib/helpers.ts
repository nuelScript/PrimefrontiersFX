import { absoluteUrl } from "./utils";

export const getCoinPrice = absoluteUrl(
  "/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cgbp%2Ceur%2Caud"
);
