import { buildConfig } from "payload/config";
import path from "path";

import { Users } from "./src/collections/Users";
import { Posts } from "./src/collections/Posts";
import { Media } from "./src/collections/Media";
import { Pages } from "./src/collections/Pages";
import { Products } from "./src/collections/Products";
import { Projects } from "./src/collections/Projects";
import { Services } from "./src/collections/Services";

export default buildConfig({
  serverURL: "https://kotacom-562158d58493.herokuapp.com",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Posts, Media, Pages, Products, Projects, Services],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
