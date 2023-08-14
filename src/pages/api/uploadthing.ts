import { createNextPageApiHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "../../upload-router";

const handler = createNextPageApiHandler({
  router: ourFileRouter,
});

export default handler;
