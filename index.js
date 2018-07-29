/** Device Client Manager 생성자 설정 옵션 Jsdoc */
require('./dcmConfig');
const dcmConfigModel = require('./dcmConfigModel');

/** Device Client Manager와 Web Server 간의 Socket 통신을 위한 문서  */
require('./dcmWs');
const dcmWsModel = require('./dcmWsModel');

/** Device Client Controller  */
require('./dccControllerConstructor');
require('./dccOperation');
const dccFlagModel = require('./dccFlagModel');

/** Device Protocol Converter */
require('./dpcOperation');
require('./dpcProtocol');

/** Web Server */
require('./wsOperation');
require('./wsScheme');

module.exports = {
  dcmConfigModel,
  dccFlagModel,
  dcmWsModel
};
