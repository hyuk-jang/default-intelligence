'use strict';

const requestOrderInfo = {
  /** 
   * 명령 추가 삭제에 대한 옵션 내용 
   * @example
   * ADD: 명령 추가
   * CALCEL: 명령 취소
   */
  commandType: '',
  /** 
   @ Device Protocol Converter에 요청할 명령에 대한 인자값
   * @type {boolean=} true: Open, On, ... ::: false: Close, Off
   * @example
   * 1: Open, On
   * 0: Close, Off
   * undefined: Status
   */
  controlValue: undefined,
  /** Main 당 일반적으로 부를 Node ID */
  nodeId: '',
  /** 명령을 내릴 때 해당 명령의 고유 ID */
  commandId: 'Default',
  /** 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3) */
  rank: 3,
};
exports.requestOrderInfo = requestOrderInfo;

const protocolOptionInfo = {
  /** 전송 데이터가 같으나 파싱이 실패할 경우 데이터 누적을 할지 여부 */
  hasTrackingData: false
};
exports.protocolOptionInfo = protocolOptionInfo;

/** 프로토콜 파서 생성자에 넘겨줄 설정 데이터 */
const protocol_info = {
  /**
   * 파서 대분류
   * @example
   * Inverter, Connector, Weathercast, ESS, Saltern
   */
  mainCategory: '',
  /**
   * 파서 중분류
   * @example
   * Inverter --> das_1.3
   * Saltern --> xbee
   * Weathercast --> vantagepro2
   * ESS --> das_pv_led
   */
  subCategory: '',
  /**
   * 장치 ID, 보통 국번을 뜻함
   * @example
   * '001', Buffer('001')
   */
  deviceId: '',
  protocolOptionInfo
};
exports.protocol_info = protocol_info;

/** DCC를 제어하는데 있어 운영상 필요한 boolean 값 모음 */
const controlInfo = {
  /** 계속하여 연결을 수립할지 여부 */
  hasOneAndOne: false,
  /** 에러가 발생하였을 경우 다음 명령 진행을 멈출지 여부 */
  hasErrorHandling: false,
  /** 장치의 연결이 끊겼을 경우 자동으로 재접속을 수행할지 여부 */
  hasReconnect: false
};
exports.controlInfo = controlInfo;

/** 장치와의 접속 정보 */
const connect_info = {
  /**
   * 장치 대분류
   * @example
   * socket, serial, zigbee
   */
  type: '',
  /**
   * 장치 중분류
   * @type {string=} subType이 존재한다면 추가적으로 addConfigInfo가 필요함
   * @example
   * serial --> parser
   * zigbee --> xbee
   */
  subType: '',
  /**
   * @type {number=} Serial baud_rate
   * @defaultvalue 9600
   */
  baudRate: 9600,
  /**
   * @type {string|number=} 대분류가 serial, socket, zigbee일 경우에 사용
   * @example
   * serial, zigbee --> windows(COM1~), linux(...)
   * socket --> socket port
   */
  port: 0 || undefined,
  /**
   * @type {string} socket 일 경우 사용. localhost, IPv4
   */
  host: '',
  /**
   * @type {Object} subType이 존재할 경우 그에 해당하는 추가 접속 정보
   */
  addConfigInfo: {}
};
exports.connect_info = connect_info;

/** 어떤 Event가 발생했을 경우 File에 저장할 지 옵션  */
const logOption = {
  /**
   * Device에서 Data외의 이벤트가 발생시
   * @example
   * dcConnect --> 장치 연결,
   * dcDisconnect --> 장치 연결 해제
   */
  hasDcEvent: false,
  /**
   * 장치로 명령을 내리는 도중에 발생한 Error
   * @example
   * E_TIMEOUT --> Error Timeout
   * E_DATA_PART --> 데이터가 수신 되었으나 일부분만 수신된 경우
   * E_UNHANDLING_DATA --> 데이터가 수신 되었으나 Commander가 아무런 조치를 하지 않은 경우
   * E_INCORRECT_DATA --> 데이터의 오류
   * E_RETRY_MAX --> 명령 재시도 횟수 초과
   * E_NON_CMD --> 유효한 명령 아님
   */
  hasDcError: false,
  /**
   * 명령 수행 여부에 참고가 되는 사항
   * @example
   * COMMANDSET_EXECUTION_START --> 명령 집합 요청 시작
   * COMMANDSET_EXECUTION_TERMINATE --> 명령 집합의 모든 명령 수행 완료
   * COMMANDSET_DELETE --> 명령 집합 삭제 성공
   * COMMANDSET_MOVE_DELAYSET --> 명령 집합 지연 집합으로 이동
   * ONE_AND_ONE_COMUNICATION --> 장치와 1:1 통신이 설정 되었을 경우
   */
  hasDcMessage: false,
  /** 장치에 전송한 데이터 */
  hasTransferCommand: false,
  /** 사용자가 요청한 행동
   * @example
   * DONE --> 성공, 다음 명령 수행
   * WAIT --> 더 많은 데이터가 필요하니 기달려라
   * ERROR --> 데이터에 문제가 있다
   * RETRY --> 명령을 재전송 해달라
   * NEXT --> 다음 명령으로 가라.(강제)
   */
  hasCommanderResponse: false,
  /** 수신받은 데이터 */
  hasReceiveData: false
};
exports.logOption = logOption;

/** deviceInfo 생성 자료 구조 */
const deviceInfo = {
  /**
   *  Device Controller를 대표하는 ID
   */
  target_id: '',
  /**
   *  DB에 저장할 경우 분류 단위
   * @example
   * Inverter --> 인버터
   * Saltern --> 염전 장치
   * Weathercast --> 기상 장치
   */
  target_category: '',

  /** 별명 */
  target_name: '',
  logOption,
  controlInfo,
  connect_info,
  protocol_info
};
exports.deviceInfo = deviceInfo;

/** deviceInfo 생성 자료 구조 */
const defaultControlConfig = {
  /** true 일 경우 Echo Server 구동 */
  hasDev: false,
  /** 장치와의 연결 성공 */
  deviceInfo
};
exports.defaultControlConfig = defaultControlConfig;

/** mariaDB Connection Info */
const dbInfo = {
  /** 접속 주소 구동 */
  host: 'localhost',
  /** user ID */
  user: 'root',
  /** user password */
  password: '',
  /** 사용할 port */
  port: 3306,
  /** 사용할 database */
  database: ''
};
exports.dbInfo = dbInfo;

/** deviceInfo 생성 자료 구조 */
const defaultManagerConfig = {
  /** DB 설정 정보 */
  dbInfo,
  /** 장치와의 연결 성공 */
  deviceControllerList: [defaultControlConfig]
};
exports.defaultManagerConfig = defaultManagerConfig;


/** 센서 장치를 가져올 컨트롤러 생성 정보 */
const defaultDataLoggerConfig = {
  /** 가져올 Main ID */
  main_seq: 0,
  /**
   * 계측 주기 (1, 60, 600, 3600, ...)
   * @default 60
   * @example
   * 1 --> 1초마다
   * 60 --> 1분마다
   * 600 --> 10분마다
   * 3600 --> 1시간마다
   */
  searchInterval: 60,
  /** DB 설정 정보 */
  dbInfo,
};
exports.defaultDataLoggerConfig = defaultDataLoggerConfig;

/** DataLogger 정보 */
const dataLoggerInfo = {
  /** Data Logger Sequence */
  data_logger_seq: 0,
  /** Data Logger Definition Sequence */
  data_logger_def_seq: 0,
  /**
   * DB상에서 고유한 Logger ID
   * Data Logger Unique ID (Prefix + Main_Seq + Logger Code
   * @example
   * Main Seq: 3, Logger Prefix: DV, Code: 003 --> DV_3_003
   */
  dl_real_id: '',
  /**
   * Main당 일반적으로 부를 Logger ID
   * Data Logger ID (Prefix + Logger Code)
   * @example
   * Logger Prefix: DV, Code: 003 --> DV_003
   */
  dl_id: '',
  /** Data Logger 고유 코드(protocol_info 에 보통 국번으로 들어감) */
  target_id: '',
  /** 장치 이름 */
  target_alias: '',
  /** Data Logger Numbering 번호 (001, 002, ...) */
  target_code: '',
  connect_info,
  protocol_info,
};
exports.dataLoggerInfo = dataLoggerInfo;

/** 센서 정보 */
const nodeInfo = {
  /** node ID (Sequence) */
  node_seq: 0,
  /**
   * DB상에서 고유한 Node ID
   * Node Unique ID (Prefix + Main_Seq + Node Code
   * @example
   * Main Seq: 3, Node Def Prefix: WD, Code: 003 --> WD_3_003
   */
  node_real_id: '',
  /**
   * Main 당 일반적으로 부를 Node ID
   * Node Unique ID (Prefix + Node Code)
   * @example
   * Node Def Prefix: WD, Code: 003 --> WD_3_003
   */
  node_id: '',
  /**
   * Main 당 일반적으로 부를 Node Name
   * @example
   * Node Def Name: 수문, Code: 003 --> 수문 003
   */
  node_name: '',
  /** Node Numbering 번호 (001, 002, ...) */
  target_code: '',
  /**
   * Data Logger에서 수집한 데이터 군 중에서 해당 센서 데이터가 위치하는 인덱스
   * @default 0
   * @example
   * Data Logger Data --> {temp: [36.5, 35.1, 37.5], solar: [851, 768, 956]}
   * sc_target_id: temp 일 경우 --> 36.5 
   */
  data_logger_index: 0,
  /**
   * Node 실제 데이터 Key로 DeviceProtocolConverter Data Key에 사용
   * @desc data Unique Key
   * @example
   * temperature, moduleFrontTemperature, waterLevel, ...
   */
  nd_target_id: '',
  /**
   * Node Unique Key 로 사용되는 ID
   * @desc sc_target_id 와 data_logger_index를 이용하여 센서 데이터 결정
   * @example
   * temp, solar, lux, ws, reh, ...
   */
  nc_target_id: '',
  /**
   * 표기 단위
   * @example
   * ℃, %, m/s, ppm, ...
   */
  nc_data_unit: '',
  /** 
   * Node가 센서인지 장치 인지 여부
   * @desc DB에 센서라면 sensor_data에 저장, 장치라면 device_data에 저장
   */
  nc_is_sensor: 0,
  /** DB상에서 고유한 Logger ID */
  dl_real_id: '',
  /** Main당 일반적으로 부를 Logger ID */
  dl_id: '',
  /** Node Definition Table Sequence */
  node_def_seq: 0,
  /** Node Class Sequence */
  node_class_seq: 0,
  /** Main Sequence */
  main_seq: 0,
  /** Data Logger Sequence */
  data_logger_seq: 0,
  /** 노드 데이터를 입력 받을 Key */
  data: null

};
exports.nodeInfo = nodeInfo;


/** 센서 장치를 가져올 컨트롤러 생성 정보 */
const dataLoggerConfig = {
  /** 가져올 Main ID */
  hasDev: false,
  deviceInfo,
  dataLoggerInfo,
  nodeList: [nodeInfo],
};
exports.dataLoggerConfig = dataLoggerConfig;


/** dataLogger 들을 총 관리하는 객체 설정 변수 */
const integratedDataLoggerConfig = {
  dbInfo,
  dataLoggerList: [dataLoggerConfig]
};
exports.integratedDataLoggerConfig = integratedDataLoggerConfig;