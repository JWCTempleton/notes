import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "@notes/core/example";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `Hello world Linked to ${Resource.Uploads.name}.`,
  };
};
