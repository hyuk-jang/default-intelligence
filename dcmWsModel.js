/** simpleOrderInfo Status 변경 Key */
const transmitCommandType = {
  /** 노드 정보가 업데이트 되었을 경우 */
  NODE: 'node',
  /** 명령 정보가 업데이트 되었을 경우 */
  COMMAND: 'command',
  /** 현황판 데이터를 요청할 경우  */
  STAUTS: 'status',
  /**  client 인증을 하고자 할 경우 */
  CERTIFICATION: 'certification'
};
exports.transmitCommandType = transmitCommandType;
