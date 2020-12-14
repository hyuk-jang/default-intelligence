/** Device Boilerplate 와 Web Socket 간 원할한 통신을 위한 문서 규격 */

/**
 * @desc Socket Client (Device Client Manager)
 * @typedef {Object} transDataToServerInfo
 * @property {string} commandType 전송 타입, [node: node 정보, command: 명령 정보] --> transmitToServerCommandType
 * @property {nodeInfo[]|contractCmdInfo[]|Buffer} data 데이터
 * @example
 * commandType: node --> nodeInfo[]
 * commandType: command --> complexCmdIntegratedStorage
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
 * SINGLE: reqSingleCmdInfo 1개 arg 사용
 * AUTOMATIC: savedCommandId, wrapCmdType 2개 arg 사용
 * SCENARIO: scenarioId, wrapCmdType 2개 arg 사용
 */

// 각 노드의 갱신 데이터의 차를 비교하여 동일 데이터라면 전송 X
/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msInfo Main Storage List에서 각각의 거점 별 모든 정보를 가지고 있을 객체 정보
 * @property {msFieldInfo} msFieldInfo 거점 정보
 * @property {CAMERA[]=} msCameraList 거점 정보
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
 * @property {number} member_seq MEMBER 시퀀스
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
 */

/**
 * @desc Socket Server (Web Server)
 * @typedef {Object} msDataInfo Main Storage 에서 쓰일 거점 Data 정보
 * @property {wsModeInfo} modeInfo dataLoggerInfo List
 * @property {dataLoggerInfo[]} dataLoggerList dataLoggerInfo List
 * @property {nodeInfo[]} nodeList nodeInfo List
 * @property {V_DV_PLACE_RELATION[]} placeRelList nodeInfo List
 * @property {contractCmdInfo[]} contractCmdList 간단한 명령 정보
 * @property {wsSvgImgInfo[]} svgImgList 진행 중인 이미지 목록
 * @property {DV_CONTROL_CMD_HISTORY[]} controlEventHistoryRows 실행중인 제어 이력 정보
 * @property {{user: sessionUserInfo, timer: setTimeout, socket: net.Socket, reqCmdInfo: defaultFormatToRequest}[]} reqCmdList 사용자가 요청 중인 명령
 * @property {Buffer} statusBoard 현황판 발전 데이터
 * 이하 필요 시 추가
 */

/**
 * @typedef {Object} wsModeInfo 간단한 명령 정보
 * @property {string} algorithmId 알고리즘 ID
 * @property {operationConfig[]=} operationConfigList 초기 1회에 한해서 보내줌. 구동 모드 목록
 * @example
 * controlModeInfo.id ==> 'MANUAL', 'SCENARIO', 'POWER_OPTIMIZE', ... ETC
 * cmdStrategy ==> 'MANUAL', 'OVERLAP_COUNT'
 */

/**
 * @typedef {Object} contractCmdInfo 간단한 명령 정보
 * @property {string=} wrapCmdUUID 통합 명령 UUID
 * @property {string=} wrapCmdFormat 'SINGLE', 'FLOW' 'SET', 'MEASURE
 * @property {string=} wrapCmdType 'CONTROL', 'RESTORE' 'CANCEL' --> 명령 추가, 명령 삭제
 * @property {string=} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string=} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {string=} wrapCmdStep WAIT, PROCESS, COMPLETE, CANCELING, END ...
 */

/**
 * @typedef {Object} wsSvgImgInfo SVG 에서 추가적으로 이미지를 보여줄 정보
 * @property {string} wrapCmdId 래핑 명령 Id
 * @property {string} cmdId 명령 Id
 * @property {string} imgId 보여줄 이미지 Id
 */

/**
 * @typedef {Object} wsExecCmdInfo 명령 정보
 * @property {string} wrapCmdId 저장된 CMD ID
 * @property {string} wrapCmdType 'CONTROL', 'RESTORE' 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {number=} rank
 * @property {csCmdGoalContraintInfo[]=} goalContainerList 유일 키로 해당 명령 고유 ID
 */

/**
 * @typedef {Object} wsNodeInfo 웹에서 사용되는 노드 정보
 * @property {number} node_seq node ID (Sequence)
 * @property {string} nri [node_real_id] DB상에서 고유한 Node ID
 * @property {string} ni [node_id] Main 당 일반적으로 부를 Node ID
 * @property {string} nn [node_name] Main 당 일반적으로 부를 Node Name
 * @property {string} du [data_unit] 표기 단위(℃, %, m/s, ppm, ...)
 * @property {number} is [is_sensor] 센서 여부 (데이터가 수치로 표기되면 센서, 아니면 장치), DB에 센서라면 sensor_data에 저장, 장치라면 device_data에 저장
 * @property {string} ntc [n_target_code] Node Numbering 번호 (001, 002, ...)
 * @property {string} ndti [nd_target_id] Node 실제 데이터 Key로 DeviceProtocolConverter Data Key에 사용
 * @property {string} ndtn [nd_target_name] Node 장치 실체적 이름
 * @property {string} ncti [nc_target_id] Node Unique Key 로 사용되는 ID
 * @property {string} nctn [nc_target_name] 대분류 장치 명
 * @property {number} ms [main_seq] Main Sequence
 * @property {number} d [data] 노드 데이터
 * @property {function():dataLoggerInfo} getDataLogger 연결된 Data Logger 가져오기
 * @property {boolean=} isSubmitDBW dbw 로 데이터를 전송 여부
 */

/**
 * @typedef {Object} wsPlaceRelInfo 웹에서 사용되는 노드 정보
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} place_def_seq 장소 개요 정보 시퀀스
 * @property {number} place_class_seq 장소 대분류 시퀀스
 * @property {number} ns [node_seq] 노드 정보 시퀀스
 * @property {string} ni [node_id]
 * @property {string} nn [node_name]
 * @property {number} is [is_sensor] 센서 여부(0: Device, 1: Sensor)
 * @property {number} ms [main_seq] Main Sequence
 * @property {string} mn [m_name] 지역 이름
 * @property {string} uuid uuid
 * @property {string} pi [place_id]
 * @property {string} pri [place_real_id]
 * @property {string} pn [place_name]
 * @property {string} ptc [p_target_code] 장소 번호
 * @property {string} ptn [p_target_name] 장소 명
 * @property {number} depth 장소 상대적 위치
 * @property {string} place_info 장소 상세 정보
 * @property {string} chart_color 차트 색상
 * @property {number} chart_sort_rank 차트 정렬 순위
 * @property {string} pd_target_prefix 장소 접두사
 * @property {string} pdti [pd_target_id] 장소 개요 id
 * @property {string} pdtn [pd_target_name] 이름
 * @property {string} pcti [pc_target_id] 장소 id
 * @property {string} pctn [pc_target_name] 장소 대분류 명
 *
 */

/**
 * @typedef {Object} wsExecCommandInfo 간단한 명령 정보
 * @property {string} savedCommandId 저장된 CMD ID
 * @property {string} wrapCmdType 'CONTROL', 'RESTORE' 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {csCmdGoalContraintInfo[]=} goalContainerList 유일 키로 해당 명령 고유 ID
 */

/**
 * @typedef {Object} detailNodeInfo
 * @property {string} classId
 * @property {string} className
 * @property {string} defId
 * @property {string} defName
 * @property {number} isSensor
 * @property {string} targetCode
 * @property {string} nodeId
 * @property {number} dlIdx
 * @property {number} dIdx
 * @property {string} nodeType
 * @property {mModbusInfo} modbusInfo
 * @property {*} data
 */

/**
 * @typedef {Object} detailDataloggerInfo
 * @property {string} className
 * @property {string} prefix
 * @property {string} dataLoggerId
 * @property {string} serialNumber
 * @property {detailNodeInfo[]} modbusStorage
 * @property {string[]} nodeList
 */

module;
