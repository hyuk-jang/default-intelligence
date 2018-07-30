/** Device Boilerplate 와 Web Socket 간 원할한 통신을 위한 문서 규격 */

/**
 * @desc Socket Client (Device Client Manager)
 * @typedef {Object} transDataToServerInfo
 * @property {string} commandType 전송 타입, [node: node 정보, command: 명령 정보]
 * @property {nodeInfo[]|simpleOrderInfo[]|Buffer} data 데이터
 * @example
 * commandType: node --> nodeInfo[]
 * commandType: command --> combinedOrderStorage
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} transDataToClientInfo
 * @property {string} commandType 전송 타입, [node: node 정보, command: 명령 정보]
 * @property {nodeInfo[]|combinedOrderStorage} data 데이터
 * @example
 * commandType: node --> nodeInfo[]
 * commandType: command --> combinedOrderStorage
 */

// 각 노드의 갱신 데이터의 차를 비교하여 동일 데이터라면 전송 X
/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msInfo Main Storage List에서 각각의 거점 별 모든 정보를 가지고 있을 객체 정보
 * @property {msFieldInfo} msFieldInfo 거점 정보
 * @property {net.Socket} msClient 거점 Socket Client 객체
 * @property {msDataInfo} msDataInfo 거점 데이터 저장소 객체
 * @property {Session[]} msSessionList 로그인 한 Session 리스트
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msFieldInfo Main Storage 에서 쓰일 DB Main(거점) 정보
 * @property {number} main_seq MAIN SEQ
 * @property {number} weather_location_seq 기상청 위치 정보 SEQ
 * @property {string} uuid UUID
 * @property {string} name UPSAS 이름
 * @property {string} address 주소
 * @property {string} ip ip
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msDataInfo Main Storage 에서 쓰일 거점 Data 정보
 * @property {dataLoggerInfo[]} dataLoggerList dataLoggerInfo List
 * @property {nodeInfo[]} nodeList nodeInfo List
 * @property {simpleOrderInfo[]} simpleOrderList 간단한 명령 정보
 * @property {Buffer} statusBoard 현황판 발전 데이터
 * 이하 필요 시 추가
 */

/**
 * @typedef {Object} simpleOrderInfo 간단한 명령 정보
 * @property {string} orderCommandType CONTROL, CANCEL, MEASURE [requestOrderCommandType]
 * @property {string} orderStatus waitingList, proceedingList, runningList [combinedOrderType]
 * @property {string} uuid 유일 키로 해당 명령 고유 ID
 * @property {string} commandId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} commandName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 */

module;
