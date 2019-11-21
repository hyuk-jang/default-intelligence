/** Socket Server에서 Socket Client로 명령을 요청하고자 할 때의 명령 식별 타입 */
const transmitToClientCommandType = {
  /** 명령 */
  CMD: 'CMD',
  /** 단일 제어 모드 */
  SINGLE: 'SINGLE',
  /** 명령 제어 모드 */
  AUTOMATIC: 'AUTOMATIC',
  /** 시나리오 모드  */
  SCENARIO: 'SCENARIO',
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
  POWER_BOARD: 'POWER_BOARD',
};
exports.transmitToServerCommandType = transmitToServerCommandType;

/** Web Server Node Pick Key */
const wsNodePickKey = {
  /** 데이터 메인 저장소 */
  FOR_MAIN_STORAGE: {
    /** DB상에서 고유한 Node ID */
    node_real_id: 'nri',
    /** Main 당 일반적으로 부를 Node ID */
    node_id: 'ni',
    /** Main 당 일반적으로 부를 Node Name */
    node_name: 'nn',
    /** 표기 단위(℃, %, m/s, ppm, ...) */
    data_unit: 'du',
    /** 센서 여부 (데이터가 수치로 표기되면 센서, 아니면 장치), DB에 센서라면 sensor_data에 저장, 장치라면 device_data에 저장 */
    is_sensor: 'is',
    /** Node Numbering 번호 (001, 002, ...) */
    n_target_code: 'ntc',
    /** Node 실제 데이터 Key로 DeviceProtocolConverter Data Key에 사용 */
    nd_target_id: 'ndti',
    /** Node 장치 실체적 이름 */
    nd_target_name: 'ndtn',
    /** Node Unique Key 로 사용되는 ID */
    nc_target_id: 'ncti',
    /** 대분류 장치 명 */
    nc_target_name: 'nctn',
    /** Main Sequence */
    main_seq: 'ms',
    /** 노드 데이터 */
    data: 'd',
  },
  FOR_BROWSER: {
    /** Main 당 일반적으로 부를 Node ID */
    node_id: 'ni',
    /** Main 당 일반적으로 부를 Node Name */
    node_name: 'nn',
    /** Node 장치 실체적 이름 */
    nd_target_name: 'ndtn',
    /** 노드 데이터 */
    data: 'd',
  },
};
exports.wsNodePickKey = wsNodePickKey;

/** Web Server Node Pick Key */
const wsPlaceRelationPickKey = {
  /** 데이터 메인 저장소 */
  FOR_MAIN_STORAGE: {
    /** Main Sequence */
    main_seq: 'ms',
    /** 지역 이름 */
    m_name: 'mn',
    /** 노드 정보 시퀀스*/
    node_seq: 'ns',
    /** Node ID */
    node_id: 'ni',
    /** Node Detail Name */
    node_name: 'nn',
    /** 센서 여부 */
    is_sensor: 'is',
    place_id: 'pi',
    place_real_id: 'pri',
    place_name: 'pn',
    /** 장소 번호 */
    p_target_code: 'ptc',
    /** 장소 명 */
    p_target_name: 'ptn',
    /** 장소 Def id */
    pd_target_id: 'pdti',
    /** 장소 Def 이름 */
    pd_target_name: 'pdtn',
    /** 장소 Class ID */
    pc_target_id: 'pcti',
    /** 장소 Class Name */
    pc_target_name: 'pctn',
  },
  FOR_BROWSER: {
    /** Node ID */
    node_id: 'ni',
    /** Node Detail Name */
    node_name: 'nn',
    /** 센서 여부 */
    is_sensor: 'is',
    /** 장소 Def id */
    pd_target_id: 'pdti',
    /** 장소 Def 이름 */
    pd_target_name: 'pdtn',
    /** 장소 Detail 이름 */
    place_name: 'pn',
  },
};
exports.wsPlaceRelationPickKey = wsPlaceRelationPickKey;
