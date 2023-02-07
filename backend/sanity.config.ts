import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Docs',

  projectId: 'ogr2kt3n',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
