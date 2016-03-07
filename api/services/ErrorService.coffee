
SYSTEM_ERROR_CODE = 'SYSTEM_ERROR'

ERROR_STATUS =
  ERROR_TEST: 'TEST'
  # Validation
  MISSING_PARAM_name: 'Missing param name'
  # bla bla bla

_ = require 'lodash'
_(ERROR_STATUS).forEach (message, code) ->
  if code is SYSTEM_ERROR_CODE
    exports[code] = (err) ->
      if err && err.code && err.error
        err
      if err
        sails.log.error err
      message = ERROR_STATUS[SYSTEM_ERROR_CODE]
      result = code: SYSTEM_ERROR_CODE, error: message
  else
    exports[SYSTEM_ERROR_CODE] = code: code, message: message
