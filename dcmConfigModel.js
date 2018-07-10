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
  /** true 일 경우 Echo Server 구동 */
  dbInfo,
  /** 장치와의 연결 성공 */
  deviceControllerList: [defaultControlConfig]
};
exports.defaultManagerConfig = defaultManagerConfig;