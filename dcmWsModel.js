/** Socket Server에서 Socket Client로 명령을 요청하고자 할 때의 명령 식별 타입 */
const transmitToClientCommandType = {
  /** 단일 제어 모드 */
  SINGLE: 'SINGLE',
  /** 명령 제어 모드 */
  AUTOMATIC: 'AUTOMATIC',
  /** 시나리오 모드  */
  SCENARIO: 'SCENARIO'
};
exports.transmitToClientCommandType = transmitToClientCommandType;

/** contractCmdInfo Status 변경 Key */
const transmitToServerCommandType = {
  /** 노드 정보가 업데이트 되었을 경우 */
  NODE: 'NODE',
  /** 명령 정보가 업데이트 되었을 경우 */
  COMMAND: 'COMMAND',
  /** 현황판 데이터를 요청할 경우  */
  STAUTS: 'STAUTS',
  /**  client 인증을 하고자 할 경우 */
  CERTIFICATION: 'CERTIFICATION',
  /**  현황판 출력 데이터를 얻고자 할 경우 */
  POWER_BOARD: 'POWER_BOARD'
};
exports.transmitToServerCommandType = transmitToServerCommandType;
