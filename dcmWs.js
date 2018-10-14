/** Device Boilerplate 와 Web Socket 간 원할한 통신을 위한 문서 규격 */

/**
 * @desc Socket Client (Device Client Manager)
 * @typedef {Object} transDataToServerInfo
 * @property {string} commandType 전송 타입, [node: node 정보, command: 명령 정보] --> transmitToServerCommandType
 * @property {nodeInfo[]|simpleOrderInfo[]|Buffer} data 데이터
 * @example
 * commandType: node --> nodeInfo[]
 * commandType: command --> combinedOrderStorage
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} transCommandToClient 웹서버 html에서 사용자의 요청에 따라 Socket Client로 명령을 보내기 위한 형식
 * @property {string} commandType 명령 종류 (SINGLE, AUTOMATIC, SCENARIO) --> executeCommandType
 * @property {Object} data 각 메소드에서 사용될 데이터 포맷. commandType 따라 형태라 상이함
 * @example cmdType
 * SINGLE: 장치 단일 제어. executeSingleControl 메소드 사용
 * AUTOMATIC: 명령 제어. executeSavedCommand 메소드 사용
 * SCENARIO: 시연용으로 제작된 명령 제어. executeScenario 사용
 * @example data
 * SINGLE: requestSingleOrderInfo 1개 arg 사용
 * AUTOMATIC: savedCommandId, requestCommandType 2개 arg 사용
 * SCENARIO: scenarioId, requestCommandType 2개 arg 사용
 */

// 각 노드의 갱신 데이터의 차를 비교하여 동일 데이터라면 전송 X
/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msInfo Main Storage List에서 각각의 거점 별 모든 정보를 가지고 있을 객체 정보
 * @property {msFieldInfo} msFieldInfo 거점 정보
 * @property {net.Socket} msClient 거점 Socket Client 객체
 * @property {msDataInfo} msDataInfo 거점 데이터 저장소 객체
 * @property {msUserInfo[]} msUserList 해당 정보를 확인할 자격을 가진 user 정보
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msUserInfo socketIO URL에 접속한 사용자를 기억하기 위한 정보
 * @property {string} sessionID 세션 ID (현재 접속한 브라우저 req.sessionID)
 * @property {sessionUserInfo} sessionUserInfo 사용자 정보 (현재 접속한 브라우저 req.user)
 * @property {net.Socket} socketClient 브라우저에 접속한 socketIO client 객체
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} sessionUserInfo MEMBER table에서 특정 key 기반으로 가져온 req.user에 저장된 사용자 정보
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} user_id 아이디
 * @property {string} name 이름
 * @property {string} nick_name 별칭
 * @property {string} grade 회원 등급
 * @property {string} address 주소
 * @property {string} tel 전화번호
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
 * @property {string} map map File Name
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msDataInfo Main Storage 에서 쓰일 거점 Data 정보
 * @property {dataLoggerInfo[]} dataLoggerList dataLoggerInfo List
 * @property {nodeInfo[]} nodeList nodeInfo List
 * @property {placeInfo[]} placeList nodeInfo List
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
