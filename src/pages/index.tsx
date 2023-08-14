import { UploadButton } from "@uploadthing/react";
import { UserButton } from "@clerk/nextjs";

import { OurFileRouter } from "../upload-router";

export default function Example() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>Your page's content can go here.</div>
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
}
