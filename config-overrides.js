/* config-overrides.js */
const { override, addDecoratorsLegacy, addLessLoader } = require('customize-cra')

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    addLessLoader({
      javascriptEnabled: true,
    })
  ),
}
