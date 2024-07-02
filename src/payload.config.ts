import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import PublicUsersSchema from './collections/PublicUsers/PublicUsersSchema'
import { ProductsSchema } from './collections/Products/ProductsSchema'
import { CategoriesSchema } from './collections/categories/CategoriesSchema'
import { ProductImagesSchema } from './collections/productImages/ProductImages'
import { ProductVideosSchema } from './collections/productVideos/productVideosSchema'
import { MaterialsSchema } from './collections/materials/MaterialsSchema'
import { SizesSchema } from './collections/sizes/SizesSchema'
import { ColorsSchema } from './collections/colors/ColorsSchema'
import { collections } from './collections/collections'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => {

      config.resolve.fallback = {
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        crypto: require.resolve("crypto-browserify"),
        vm: require.resolve("vm-browserify")
      }

      return config;
    }
  },
  editor: slateEditor({}),
  collections,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  csrf: [
    // whitelist of domains to allow cookie auth from
    'http://localhost:3000',
  ],
})
