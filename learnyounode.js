const learnyounode = require('workshopper-adventure-hu')({
  appDir: __dirname,
  languages: ['hu', 'en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no', 'it'],
  header: require('workshopper-adventure-hu/default/header'),
  footer: require('workshopper-adventure-hu/default/footer'),
  fail: require('workshopper-adventure-hu/default/fail'),
  pass: require('workshopper-adventure-hu/default/pass')
})

learnyounode.addAll([
  'HELLO WORLD',
  'BABY STEPS',
  'MY FIRST I/O!',
  'MY FIRST ASYNC I/O!',
  'FILTERED LS',
  'MAKE IT MODULAR',
  'HTTP CLIENT',
  'HTTP COLLECT',
  'JUGGLING ASYNC',
  'TIME SERVER',
  'HTTP FILE SERVER',
  'HTTP UPPERCASERER',
  'HTTP JSON API SERVER'
])

module.exports = learnyounode
