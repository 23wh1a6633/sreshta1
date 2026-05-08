import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { getRouter } from "./router";
import "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

const handler = createStartHandler({
  createRouter: getRouter,
  handler: defaultStreamHandler,
});

export default {
  async fetch(request: Request, env: any, ctx: any) {
    console.log(`Server fetch: ${request.url}`);
    try {
      const response = await handler(request, env, ctx);
      console.log(`Server response status: ${response.status}`);
      return response;
    } catch (error) {
      console.error("Server error:", error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
