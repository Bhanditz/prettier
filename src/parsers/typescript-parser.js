"use strict"

function parseWithTypeScript(text) {
  // Inline the require to avoid loading all the JS if we don't use it
  const parser = require("typescript-eslint-parser");
  return parser.parse(text, {
    loc: true,
    range: true,
    tokens: true,
    attachComment: true,
    ecmaFeatures: {
      jsx: true
    }
  });
}

module.exports = parseWithTypeScript;
