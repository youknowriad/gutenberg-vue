/**
 * External dependencies
 */
import * as query from './query';

export { query };
export { createBlock, switchToBlockType } from './factory';
export { default as parse } from './parser';
export { default as serialize } from './serializer';
export { getCategories } from './categories';
export {
  registerBlockType,
  unregisterBlockType,
  setUnknownTypeHandler,
  getUnknownTypeHandler,
  getBlockType,
  getBlockTypes,
} from './registration';
