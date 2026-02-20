import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { blogType } from './blogType'
import { productType } from './productType'
import { orderType } from './orderType'
import { brandType } from './brandType'
import { authorType } from './authorType'
import { addressType } from './addressType'
import { blogCategoryType } from './blogCategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,
    blockContentType,
    blogType,
    productType,
    orderType,
    brandType,
    blogCategoryType,
    authorType,
    addressType],
}
