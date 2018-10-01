export const global = (typeof global === 'object' && global.global === global && global) || this;

export const document = global ? global.document : false || {};
