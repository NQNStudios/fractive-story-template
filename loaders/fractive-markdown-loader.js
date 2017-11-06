module.exports = function(markdown) {
  var Compiler = require('../fractive/lib/Compiler.js');

  return Compiler.Compiler.RenderText(markdown);
};
