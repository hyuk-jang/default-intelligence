/**
 * @desc 자식들은 m접두어를 붙임
 * @typedef {Object} mDeviceMap
 * @property {mDrawInfo} drawInfo
 * @property {mSetInfo} setInfo
 * @property {mRelationInfo} relationInfo
 * @property {mControlInfo} controlInfo
 * @property {mConfigInfo} configInfo
 */

/******************** 정의 시작  **********************/
/**
 * @typedef {Object} mdSvgPlaceInfo Map Define Svg Place
 * @property {mPlaceModelInfo} placeInfo svg 포지션 정보
 * @property {svgModelInfo} svgModelInfo Svg 리소스 정보
 */

/**
 * @typedef {Object} mdPlaceInfo
 * @property {string} placeId
 * @property {string} placeName
 * @property {string[]} nodeList
 * @property {number[]} point 최종 적으로 나올 좌표 정보
 * @property {mSvgModelResource} svgModelResource
 * @property {SVG} svgEleBg SVG 생성 엘리먼트 정보
 */

/**
 * @typedef {Object} mdNodeInfo
 * @property {string} ncId Node Class Target Id (1 Depth)
 * @property {string} ndName Node Define Target Name (2 Depth) 화면에 표시해 줄때
 * @property {string} nodeId Node Id (3 Depth)
 * @property {string} nodeName Node Name (3 Depth)
 * @property {string|number} nodeData 노드 현재 데이터
 * @property {number} isSensor 센서 여부
 * @property {string} dataUnit 데이터 단위
 * @property {number[]} axisScale
 * @property {number[]} moveScale
 * @property {number[]} point 최종 적으로 나올 좌표 정보
 * @property {string} placeIdList node를 소유하고 있는 Place Id 목록
 * @property {string} placeNameList node를 소유하고 있는 Place Name 목록
 * @property {mdPlaceInfo=} mdPlaceInfo placeId에 관련된 mdPlaceInfo
 * @property {mSvgModelResource} svgModelResource
 * @property {SVG} svgEleBg SVG 생성 엘리먼트 정보
 * @property {SVG.<Tspan>} svgEleName SVG 생성 엘리먼트 정보
 * @property {SVG.<Tspan>} svgEleData SVG 생성 엘리먼트 정보
 * @property {SVG.<Tspan>} svgEleDataUnit SVG 생성 엘리먼트 정보
 */

/**
 * @typedef {Object} svgModelInfo
 * @property {number[]} point 위치
 * @property {mSvgModelResource} mSvgModelResource
 */

/******************** drawInfo 시작  **********************/

/**
 * @typedef {Object} mDrawInfo
 * @property {mFrame} frame
 * @property {mPosition} positionInfo 

/**
 * @typedef {Object} mFrame
 * @property {mMapInfo} mapInfo 전체 svgCanvas의 크기
 * @property {mSvgModelResource[]} svgModelResourceList svg를 그리기위한 필요 요소 목록
 */

/**
 * @typedef {Object} mMapInfo
 * @property {number} width 전체 맵의 가로 길이
 * @property {number} height 전체 맵의 세로 길이
 * @property {mBackgroundInfo=} backgroundInfo 배경정보
 */

/**
 * @typedef {Object} mBackgroundInfo
 * @property {string} backgroundData 배경 경로 or base64 데이터
 * @property {number[]} backgroundPosition 배경의 위치
 */

/**
 * @typedef {Object} mSvgModelResource
 * @property {string} id ID
 * @property {string} type 'rect', 'line', 'circle', 'polygon', 'pattern', 'image' ...
 * @property {mElementDrawInfo} elementDrawInfo 그리기 정보
 * @property {mTextStyleInfo=} textStyleInfo 텍스트 스타일 정보
 * @example
 * type: rect, pattern --> width, height, color, opacity
 * type: circle --> radius, color
 * type: polygon --> (x1,y1 x2,y2 x3,y3, x4,y4)
 * type: line --> (x1,y1 x2,y2)
 * type: image --> width, height, imgUrl
 */

/**
 * @typedef {Object} mElementDrawInfo
 * @property {number=} width 가로
 * @property {number=} height 세로
 * @property {number=} radius 반지름, 모서리
 * @property {number=} opacity 0: Transparent, 1: 원색(default)
 * @property {string | string[]} color 단일색 or [기본, 제어]
 * @property {string} errColor 오류일 경우 색상. 기본값 Red
 * @property {mStrokeInfo} strokeInfo Border
 * @property {mPatternInfo=} patternInfo
 */

/**
 * @typedef {Object} mStrokeInfo Map Resource Stroke
 * @property {string=} color 선 색 default: #f06
 * @property {number=} width Border 굵기 default: 0.5
 * @property {string=} linecap rect(default), round
 */

/**
 * @typedef {Object} mPatternInfo Map Resource Pattern
 * @property {number[]} patternSize 패턴 1개당 가지는 Size
 * @property {mElePatternInfo[]} patternList 세부 패턴 정보
 */

/**
 * @typedef {Object} mElePatternInfo Map Resource Pattern
 * @property {string} patternType rect, circle, image, ...
 * @property {number[]=} size Rect [Width, Height]
 * @property {number=} radius 반지름
 * @property {string} fill 색상 or ImgURL
 * @property {number[]=} move 이동할 좌표[width, height]
 */

/**
 * @typedef {Object} mTextStyleInfo
 * @property {string=} color Title 텍스트 색 (default: #000)
 * @property {string=} dataColor Title 텍스트 색 (default: #000)
 * @property {number=} fontSize 텍스트 사이즈(default: 10)
 * @property {string=} leading default(1.2) 텍스트가 그려진 공간의 높이: 글자크기는 변하지 않고 공간의 높이만 변함 (css의 line-height와 같음)
 * @property {*=} transform 텍스트가 그려진 공간의 높이: 글자크기는 변하지 않고 공간의 높이만 변함 (css의 line-height와 같음)
 * @property {number[]=} axisScale 텍스트 중심축 좌표(default: [0.5, 0.5])
 * ex) 글자크기= 40px이고 leading= 1.5이면 글자크기 1.5배인 60px의 공간에 40px의 글자가 그려짐
 */

/**
 * @typedef {Object} mPosition
 * @property {mSvgPositionInfo[]} svgPlaceList 장소 위치 정보와 resource 정보를 포함한 목록
 * @property {mSvgPositionInfo[]} svgNodeList 노드(or 센서) 위치 정보와 resource 정보를 포함한 목록
 */

/**
 * @typedef {Object} mSvgPlaceInfo 장소 대분류와 위치정보 목록
 * @property {string} placeId 장소 대분류 ID
 * @property {mSvgPositionInfo[]} svgPositonList resource 정보와 위치 정보
 */

/**
 * @typedef {Object} mSvgPositionInfo
 * @property {string} id 접두어 + 넘버링
 * @property {string} name 한글 명칭
 * @property {string=} placeId 노드(or센서)일 경우 위치한 장소의 ID
 * @property {string} resourceId 그리기 정보를 찾을 resourceId
 * @property {number[]} point 위치
 */

/**
 * @typedef {Object} svgNodePosOpt SVG Node를 위치시키기 위한 옵션
 * @property {string} placeId relationInfo의 pTargetPrefix + placeCode
 * @property {string} resourceId 그리기 정보를 찾을 resourceId
 * @property {number[]=} axisScale Node 좌표 백분율 정보 [x1, y1] or [x1, y1, x2, y2]
 * @property {number[]=} moveScale Node 별 위치 백분율
 */

/**
 * @typedef {Object} svgPlaceInfo
 * @property {string} resourceId 그리기 정보를 찾을 resourceId
 * @property {number[]} point 위치
 */
/******************** drawInfo 끝  **********************/

/******************** setInfo 시작  **********************/

/**
 * @typedef {Object} mSetInfo Node, DataLogger, ConnectInfo 설정
 * @property {MAIN} mainInfo 메인 정보. 입력한 정보를 기반으로 MAIN table 조회 후 main_seq 취득
 * @property {mDccConstructorInfo[]} dccConstructorList DCC 객체 생성 정보 정의 목록
 * @property {mDpcConstructorInfo[]} dpcConstructorList DPC 객체 생성 정보 정의 목록
 * @property {mRepeatInfo[]} repeatNodeList DPC 객체 생성 정보 정의 목록
 * @property {mDataLoggerStructureInfo[]} dataLoggerStructureList 데이터 로거 구조 목록
 * @property {mNodeStructureInfo[]} nodeStructureList 노드 구조 목록
 */

/**
 * @typedef {Object} mDccConstructorInfo 데이터 로거 연결 정보
 * @property {string} dccId ID
 * @property {string=} dccName DCC 명
 * @property {connect_info} connect_info Device Client Controller 라이브러리 생성자에게 넘겨줄 생성 정보
 * @desc 향후 connect_info LONGTEXT 형식으로 DB에 삽입
 */

/**
 * @typedef {Object} mDpcConstructorInfo DPC를 생성하기 위한 정보
 * @property {string} dpcId ID
 * @property {protocol_info} protocol_info deviceId를 제외하고 입력. Device Protocol Converter 라이브러리 생성자에게 넘겨줄 생성 정보
 * @desc 향후 protocol_info LONGTEXT 형식으로 DB에 삽입
 */

/**
 * @typedef {Object} mRepeatInfo DPC를 생성하기 위한 정보
 * @property {string} repeatId ID
 * @property {string} repeatCategory node or prefix, node: nodeStructureList 에서만 사용
 * @property {mNodeModelInfo[]|string[]} nodeList
 * @example
 * repeatCategory: node -> nodeList 덮어쓰기
 * repeatCategory: prefix -> nodeList + '_' + target_code 생성 후 덮어쓰기
 */

/**
 * @desc DV_DATA_LOGGER_DEF 참조
 * @typedef {Object} mDataLoggerStructureInfo 데이터 로거 대분류 구조
 * @property {string} target_prefix 접두어
 * @property {string} target_name 데이터 로거 별칭
 * @property {mDataLoggerDeviceInfo[]} dataLoggerDeviceList
 */

/**
 * @desc DV_DATA_LOGGER 참조
 * @typedef {Object} mDataLoggerDeviceInfo 데이터 로거 상세 전보
 * @property {string} serial_number 장치 SN (고유 식별 번호)
 * @property {string|number|Buffer=} subDeviceId 장치 부식별 번호
 * @property {string} target_code 장치 넘버링(001, 002, 003, ...)
 * @property {string} target_name 데이터 로거 상세 별칭
 * @property {string} dccId dccConstructorInfo dccId
 * @property {string} dpcId DPC 객체 생성 정보 ID
 * @property {boolean=} isAddSerialNumberToDCC connect_info 를 생성 할 때 serial_number 를 결합하여 생성할지 여부. default false
 * @property {string=} repeatId repeat 저장소에서 가져다 쓸 nodeList. map 재정의시 repeat key 내용으로 nodeList를 덮어씀
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 * @property {boolean=} is_deleted 장치 계측 여부
 */

/**
 * @desc DV_NODE_CLASS 참조
 * @typedef {Object} mNodeStructureInfo 노드 대분류 구조
 * @property {string} target_id 노드를 가르키는 고유 명(temp, reh, solar, co2, ...)
 * @property {string} target_name target_id에 대응하는 이름(온도, 습도, 일사량, 이산화탄소, ...)
 * @property {number=} is_submit_api Default: 1, Class 단위에서의 API 전송 여부 정의. 세부적으로 지정하고자 할 경우 Def 사용. 0 or 1의 값을 기입하면 Def 까지 일괄 적용, API Server로 Node 데이터를 Socket 통신으로 전송할 지 여부
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor<default>). DBW 에서 센서 종류를 판단하기 위해서 사용
 * @property {number=} save_db_type 0: Device, 1: Sensor, 2: Block, 3: Trouble. 지정하지 않을 경우 is_sensor를 따라감. DB에 저장할 때 카테고리를 판별하기 위함
 * @property {string=} data_unit 데이터 단위(℃, %, W/m², ppl, ...)
 * @property {string=} description 부연 설명이 필요한 경우
 * @property {string=} controlType 제어 타입 (0: On/Off<default>, 1: Set, 2: [0, 1])
 * @property {mNodeDefInfo[]} defList 노드 개요 정보 목록
 * @example
 * controlType: 0 >> Web에서 Confirm 목록에 On/Off/Cancel
 * controlType: 1 >> Web에서 Confirm 목록에 Set/Cancel
 * controlType: 2 >> Web에서 Confirm 목록에 On/Off/Set/Cancel
 */

/**
 * @desc DV_NODE_DEF 참조
 * @typedef {Object} mNodeDefInfo 노드 개요 정보
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사
 * @property {string} target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정
 * @property {string} target_name 필요시 세부 사용 목적 기술
 * @property {number=} is_submit_api Default: 1, API Server로 Node 데이터를 Socket 통신으로 전송할 지 여부
 * @property {number} is_avg_center 평균 값(센터) 사용 여부
 * @property {string} description 노드 데이터 단위에 대한 부연 설명이 필요한 경우
 * @property {string=} repeatId repeat 저장소에서 가져다 쓸 nodeList. map 재정의시 repeat key 내용으로 nodeList를 덮어씀
 * @property {string=} controlType 제어 타입 (0: On/Off<default>, 1: Set, 2: [0, 1])
 * @property {mNodeModelInfo[]} nodeList 노드 상세 목록
 * @example
 * controlType: 0 >> Web에서 Confirm 목록에 On/Off/Cancel
 * controlType: 1 >> Web에서 Confirm 목록에 Set/Cancel
 * controlType: 2 >> Web에서 Confirm 목록에 On/Off/Set/Cancel
 */

/**
 * @desc DV_NODE 참조
 * @typedef {Object} mNodeModelInfo 노드 모델 상세 정보
 * @property {string} target_code 노드 넘버링(001, 002, ...)
 * @property {string} target_name 노드 이름
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {svgNodePosOpt=} svgNodePosOpt SVG Node를 위치시키기 위한 옵션
 */
/**
 * @desc DV_NODE 참조
 * @typedef {Object} mNodeModelInfo1 노드 모델 상세 정보
 * @property {string} target_code 노드 넘버링(001, 002, ...)
 * @property {string} target_name 노드 이름
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {vnExpressionInfo=} vn_expression_info 가상 노드 계산식.
 * @property {number[]=} axisScale Node 좌표 백분율 정보 [x1, y1] or [x1, y1, x2, y2]
 * @property {number[]=} moveScale Node 별 위치 백분율
 */

/**
 * Map
 * @desc mNodeStorage 참조
 * @typedef {Object} mNodeStorageInfo 노드 상세 정보
 * @property {string} isSensor 센서 여부
 * @property {string} nodeName 노드 이름(WD_001, P_001)
 * @property {string} target_code 노드 넘버링(001, 002, ...)
 * @property {string} target_name 노드 이름
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {number[]=} axisScale Node 좌표 백분율 정보 [x1, y1] or [x1, y1, x2, y2]
 * @property {number[]=} moveScale Node 별 위치 백분율
 */

/**
 * Map
 * @desc mSvgStorage 참조
 * @typedef {Object} mSvgStorageInfo 노드 상세 정보
 * @property {mSvgPositionInfo} svgPositionInfo svg 포지션 정보
 * @property {mSvgModelResource} svgResourceInfo Svg 리소스 정보
 */

/**
 * @desc DV_NODE 참조
 * @typedef {Object} vnExpressionInfo 가상노드 계산식
 * @property {string} expression 계산식  ex (WL_003/WL_005) * 3
 * @property {number=} toFixed default: 1, 소수점 자리 수
 */

/******************** setInfo 끝  **********************/

/******************** relationInfo 시작  **********************/

/**
 * @typedef {Object} mRelationInfo 관계 정보
 * @property {mPlaceStructureInfo[]} placeRelationList 장소 관계 정보
 * @property {mSmartSalternInfo} smartSalternInfo 염전 관계 정보
 * @property {mPipeConnectionRelationInfo[]} pipeConnectionRelationList 염수 이동 관계
 * @property {mBrineFeedRankRelationInfo[]} brineFeedRankRelationList 염수 급수 우선 관계
 * @property {mBrineDrainRankRelationInfo[]} brineDrainRankRelationList 염수 배수 우선 관계
 * @property {mSvgResourceConnectionInfo[]} svgResourceConnectionList 이미지 관계
 * @property {string[]} hiddenTextSvgModelResourceIdList 장소 또는 노드의 텍스트를 숨길 svgModelResouceId
 */

/**
 * target 과 svgModelResource의 이미지 관계
 * @typedef {Object} mSvgResourceConnectionInfo
 * @property {string[]} targetIdList 장소 또는 노드를 가리키는 접두사+number
 * @property {string[]} resourceIdList svgModelResourceInfo의 resourceId
 */

/**
 * @desc DV_PLACE_CLASS 참조
 * @typedef {Object} mPlaceStructureInfo 장소 대분류 구조
 * @property {string} target_id 장소를 가르키는 고유 명(salternBlock, brineWarehouse, ...)
 * @property {string} target_name target_id에 대응하는 이름(염판, 해주, ...)
 * @property {string} description 부연 설명이 필요한 경우
 * @property {mPlaceDefInfo[]} defList
 */

/**
 * @desc DV_PLACE_DEF 참조
 * @typedef {Object} mPlaceDefInfo 장소 개요 정보
 * @property {string} target_id 장소 성격에 따라 달리 부를 ID(salternEvaporationBlock, salternCrystalizingBlock, ...)
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사 (SEB, SCB, ...)
 * @property {string} target_name 데이터 로거 별칭 (증발지, 결정지, ...)
 * @property {mPlaceModelInfo[]} placeList 장소 상세 목록
 */

/**
 * @desc DV_PLACE 참조
 * @desc 향후 place_info는 LONGTEXT 형식으로 DB에 삽입
 * @typedef {Object} mPlaceModelInfo 장소 개요 정보
 * @property {string=} target_code 장소 넘버링 (001, 002, ...)
 * @property {string=} target_name 장소 상세 명
 * @property {string=} chart_color 차트로 그릴 경우 색상
 * @property {number=} chart_sort_rank 차트 그려질 순위
 * @property {number=} depth 장소 위치 가중치(가중치가 높을 수록 높은 고도)
 * @property {mPlaceInfo=} place_info 장소 상세 정보. 프로젝트 별 해당 장소에 특정 정보를 담고 싶다면 JSON 형식으로 입력
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 * @property {svgPlaceInfo=} svgPositionInfo SVG 위치 정보
 */

/**
 
 * @typedef {Object} mPlaceInfo 장소 상세 특화 정보
 * @property {mThresholdConfigInfo[]=} thresholdConfigList 임계치 명령 목록
 * @property {{width: number, height: number, depth: number}} placeSize 장소 크기
 */

/**
 * NOTE: 최대 구동 명령 지속 시간, 수로를 통한 염수 이동 시간 삽입하지 않음. 복잡성 감소를 위함.
 * @typedef {Object} mThresholdConfigInfo 임계치 명령 정보
 * @property {string} ndId 임계치를 반영할 Node Def ID
 * @property {mThresholdInfo=} maxValue 해당 임계치 Node Def Id의 최대 값
 * @property {mThresholdInfo=} upperLimitValue 상한선. 없을 경우 maxValue 기입.
 * @property {mThresholdInfo=} setValue 설정하고자 하는 Node ID 값
 * @property {mThresholdInfo=} lowerLimitValue 하한선. 없을 경우 minValue 기입
 * @property {mThresholdInfo=} minValue 해당 임계치 Nd Id의 최저 값
 * @property {string[]|string[][]=} callPlaceRankList 급수지 우선 순위 목록
 * @property {string[]|string[][]=} putPlaceRankList 배수지 우선 순위 목록
 * @property {string[]=} groupPlaceList mThresholdInfo.isGroup 옵션이 활성화 되어 있을 경우 함께 움직일 장소
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} mThresholdInfo 자동 수위 조절
 * @property {number} value 임계 값
 * @property {boolean=} isCall true: 급수 요청, false: 배수 요청, undefined: 아무 것도 하지 않음
 * @property {boolean=} isGroup 그루핑 해서 이동 여부.
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} ssAutoCycleWaterInfo 자동 수위 조절
 * @property {number=} setCycleWL 염수 순환 시 세팅할 염수 수위(cm)
 * @property {number} belowCycleWL 해당 수치보다 염수 수위가 낮을 경우 배수가 작동할 수위. minWL 이 존재하지 않을 경우 덧물 기능으로 전환(setWL까지 자동 물 주기)
 * @property {number=} minCycleWL belowWL 배수가 동작할 경우 minWL 수치까지 수위를 뺌
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} ssAutoDrainageSalinityInfo 염도 충족 시 이동할 염수 정보
 * @property {number} aboveSalinity 해당 수치보다 높을 경우 배수가 작동할 염도(%)
 * @property {string[]} desList 급수지 우선 순위
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} mSmartSalternInfo 스마트 염전 설정 정보
 * @property {mPipeConnectionRelationInfo[]} pipeConnectionRelationList 파이프 관계 정보 목록
 */

/**
 * @typedef {Object} mPipeConnectionRelationInfo 파이프 관계 정보
 * @property {string} currNode 현재 장치 ID (nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록)
 * @property {string[]} parentNodes 염수를 공급할 수 있는 상위 장치(nodeId) 목록
 * @property {string[]} childNodes 염수를 공급할 수 있는 하위 장치(nodeId) 목록
 */

/**
 * @typedef {Object} mBrineFeedRankRelationInfo 급수 우선 순위 정보
 * @property {string} placeId 현재 급수를 진행할려는 장소 ID
 * @property {mFeedCmdInfo[]} feedCmdList 우선순위에 따른 장소 ID 목록. index가 낮을 수록 우선권을 가짐
 */

/**
 * @typedef {Object} mFeedCmdInfo 배수 우선 순위 정보
 * @property {string} srcPlaceId place Destination
 * @property {string} cmdId 수행 명령 ID
 * @property {string} trueList 열려야 하는 장치
 * @property {string} falseList 닫혀야 하는 장치
 */

/**
 * @typedef {Object} mBrineDrainRankRelationInfo 배수 우선 순위 정보
 * @property {string} placeId 현재 배수를 진행할려는 장소 ID
 * @property {mDrainCmdInfo[]} drainCmdList 배수 목적지 리스트. index가 낮을 수록 우선권을 가짐
 */

/**
 * @typedef {Object} mDrainCmdInfo 배수 우선 순위 정보
 * @property {string} destPlaceId place Destination
 * @property {string} cmdId 수행 명령 ID
 * @property {string} trueList 열려야 하는 장치
 * @property {string} falseList 닫혀야 하는 장치
 */

/******************** relationInfo 끝  **********************/

/******************** controlInfo 시작  **********************/

/**
 * @typedef {Object} mControlInfo 명령 정보
 * @property {mflowCmdInfo[]} flowCmdList 흐름 명령 정보
 * @property {mSetCmdInfo[]} setCmdList 설정 명령 정보
 * @property {mScenarioInfo[]} scenarioCmdList 시나리오 명령 정보
 * @property {mTempControlInfo[]} tempControlList 임시 명령 정보
 */

/**
 * @typedef {Object} mflowCmdInfo 흐름 명령
 * @property {string} srcPlaceId 시작 장소 ID
 * @property {string=} srcPlaceName 시작 장소 이름, 명시적으로 설정하고자 할 경우
 * @property {Object[]} destList 목적지 장소 목록
 * @property {string} destList.destPlaceId 목적지 장소 Id
 * @property {string=} destList.destPlaceName 목적지 장소 이름. 명시적으로 설정하고자 할 경우
 * @property {string=} destList.actionType common(에뮬레이터, 실제 동작) or controller(실제 동작) or emulator(에뮬레이터)
 * @property {string[]} destList.trueNodeList Open, On 등 장치 동작 수행
 * @property {string[]} destList.falseNodeList Close, Off 등 장치 동작 정지
 */

/**
 * @typedef {Object} mSetCmdInfo 설정 명령(정해진 장치 개폐 명령)
 * @property {string} cmdId 설정 명령 ID
 * @property {string} cmdName 설정 명령 Name
 * @property {string[]} trueNodeList Open, On 등 장치 동작 수행
 * @property {string[]} falseNodeList Close, Off 등 장치 동작 정지
 */

/**
 * @typedef {Object} mScenarioInfo 시나리오 명령 정보(정해둔 시나리오 명령 정보)
 * @property {string} scenarioId 시나리오 명령 Id
 * @property {string} scenarioName 시나리오 명령 이름
 * @property {mScenariCmdInfo[]|mScenariCmdInfo[][]|mScenariCmdInfo[][][]} scenarioList 실제 시나리오 명령 목록
 */

/**
 * @typedef {Object} mScenariCmdInfo 단일 시나리오 요소 명령 정보
 * @property {string} wrapCmdFormat 명령 요청 타입
 * @property {string} wrapCmdType 명령 요청 타입
 * @property {number=} singleControlType #SINGLE Device Protocol Converter에 요청할 명령에 대한 인자값 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} singleControlSetValue #SINGLE singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string|string[]} singleNodeId #SINGLE Node ID
 * @property {string} setCmdId #SET 설정 명령 Id
 * @property {string} flowSrcPlaceId #FLOW 시작 장소 ID
 * @property {string} flowDestPlaceId #FLOW 목적지 장소 Id
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:2)
 * @property {mScenarioImgDisplayInfo[]=} imgDisplayList 시나리오 이미지 뷰 정보 목록
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo 명령 달성 제한 조건
 */

/**
 * @typedef {Object} mScenarioImgDisplayInfo 시나리오 이미지 뷰 정보
 * @property {string} cmdStep 실행할 명령 단계
 * @property {string} imgId 처리할 이미지 Id
 * @property {number=} isAppear 기본 값: 1, 1은 나타남, 0은 사라짐
 */

/**
 * @typedef {Object} mTempControlInfo 임시 명령 정보
 * @property {string} cmdName 명령 ID
 * @property {string[]} trueList 장치 Open, On nodeId 목록
 * @property {string[]} falseList 장치 Close, Off nodeId 목록
 */

/******************** controlInfo 끝  **********************/

/******************** 설정 정보 시작  **********************/
/**
 * @typedef {Object} mConfigInfo 명령 정보
 * @property {deviceCmdInfo[]} deviceCmdList 장치 노드 제어 방법 목록
 * @property {mflowCmdInfo[]} nodeType Device or Sensor or None
 * @property {mSetCmdInfo[]} dataRange TRUE, FALSE 식별
 * @property {mScenarioInfo[]} controlConfirm 시나리오 명령 정보
 * @property {mTempControlInfo[]} tempControlList 임시 명령 정보
 */

/**
 * @typedef {Object} deviceCmdInfo 명령 정보
 * @property {string=} deviceCmdName 장치 노드 제어 이름
 * @property {string[]} applyDeviceList 적용할 장치 목록(Node Class Id)
 * @property {dCmdScenarioInfo} dCmdScenarioInfo 장치 명령 시나리오 정보
 */

/**
 * @typedef {Object} dCmdScenarioInfo 명령 정보
 * @property {string} scenarioMsg 장치 제어 명령 다이어로그 메시지 Title
 * @property {number=} isSetValue default: 0, 설정 값 입력 화면 여부
 * @property {setValueInfo=} setValueInfo 입력 값 제약 정보
 * @property {dConfirmInfo[]} confirmList 제어 명령 종류
 */

/**
 * @typedef {Object} setValueInfo
 * @property {string} msg 입력값 앞쪽에 나타낼 Msg
 * @property {string} min 입력값 하한선
 * @property {string} max 입력값 상한선
 * 
 
 */

/**
 * @typedef {Object} dConfirmInfo 장치 노드 제어 정보
 * @property {string} enName On, Off, Open, Close
 * @property {string} krName 동작, 정지, 열기, 닫기
 * @property {number=} controlValue 제어 값(0: False, 1: True, 2: Set, 3: Measure, Custom...)
 * @property {dCmdScenarioInfo=} nextStepInfo 다음 단계가 존재 시
 * @example
 * {
 *  enName: 'Move',
 *  krName: '이동',
 *  nextStepInfo: {
 *    confirmMsg: '이동 방향을 선택하세요',
 *    confirmList: [
 *      {
 *      }
 *    ]
 *  }
 *  nextStepList: [{
 *    enName: 'left',
 *    krName: '좌',
 *    controlValue: 11,
 *
 *
 * }]
 * }
 */

module;
