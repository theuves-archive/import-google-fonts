module.exports = function importGoogleFonts(inject, protocol, fonts) {
  fonts = fonts.map(encodeURI).join('|')
  protocol = protocol || 'https'

  const url = `${protocol}://fonts.googleapis.com/css?family=${fonts}`

  inject`@import url('${url}');`
}