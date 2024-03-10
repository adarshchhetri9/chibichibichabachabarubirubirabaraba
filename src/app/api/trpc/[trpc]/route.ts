import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = async (req: Request) => {
  try {
    const response = await fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({}),
    });

    if (!response.ok) {
      throw new Error(`Server responded with error: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error handling TRPC request:", error);
    // You can also send a custom error response to the client here
    return new Response("Internal Server Error", { status: 500 });
  }
};

export { handler as GET, handler as POST };
