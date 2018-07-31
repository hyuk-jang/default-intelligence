/** Socket Server에서 Socket Client로 명령을 요청하고자 할 때의 명령 식별 타입 */
const transmitToClientCommandType = {
  /** 단일 제어 모드 */
  SINGLE: 'single',
  /** 명령 제어 모드 */
  AUTOMATIC: 'automatic',
  /** 시나리오 모드  */
  SCENARIO: 'scenario'
};
exports.transmitToClientCommandType = transmitToClientCommandType;

/** simpleOrderInfo Status 변경 Key */
const transmitToServerCommandType = {
  /** 노드 정보가 업데이트 되었을 경우 */
  NODE: 'node',
  /** 명령 정보가 업데이트 되었을 경우 */
  COMMAND: 'command',
  /** 현황판 데이터를 요청할 경우  */
  STAUTS: 'status',
  /**  client 인증을 하고자 할 경우 */
  CERTIFICATION: 'certification'
};
exports.transmitToServerCommandType = transmitToServerCommandType;
