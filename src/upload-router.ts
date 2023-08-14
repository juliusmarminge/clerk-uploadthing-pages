import type { NextApiRequest, NextApiResponse } from "next";

import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing({
  errorFormatter(err) {
    console.log(err);
    return { message: err.message };
  },
});

import { getAuth } from "@clerk/nextjs/server";

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      // This code runs on your server before upload
      const { userId } = getAuth(req);

      console.log("userId", userId);

      // If you throw, the user will not be able to upload
      if (!userId) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
