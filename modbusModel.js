const MODBUS_COMMAND = {
  /** FC 1 */
  readCoils: {
    FN_CODE: 'readCoils',
    unitId: '',
    /**
     * @example
     * index [0]: address {number}: The Data Address of the first register.
     * index [1]: length {number}: The total number of registers requested.
     */
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** length {number}: The total number of registers requested.  */
      length: 0
    }
  },
  /** FC 2 */
  readDiscreteInputs: {
    FN_CODE: 'readDiscreteInputs',
    unitId: '',
    /**
     * @example
     * index [0]: address {number}: The Data Address of the first register.
     * index [1]: length {number}: The total number of registers requested.
     */
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** length {number}: The total number of registers requested.  */
      length: 0
    }
  },
  /** FC 3 */
  readHoldingRegisters: {
    FN_CODE: 'readHoldingRegisters',
    unitId: '',
    /**
     * @example
     * index [0]: address {number}: The Data Address of the first register.
     * index [1]: length {number}: The total number of registers requested.
     */
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** length {number}: The total number of registers requested.  */
      length: 0
    }
  },
  /** FC 4 */
  readInputRegisters: {
    FN_CODE: 'readInputRegisters',
    unitId: '',
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** length {number}: The total number of registers requested.  */
      length: 0
    }
  },
  /** FC 5 */
  writeSingleCoil: {
    FN_CODE: 'writeCoil',
    unitId: '',
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** state {boolean}: The state to force into coil. */
      state: false
    }
  },
  /** FC 6 */
  writeSingleRegister: {
    FN_CODE: 'writeRegister',
    unitId: '',
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** value {number}: The value to set into the register. */
      value: 0
    }
  },
  /** FC 15 */
  writeMultipleCoils: {
    FN_CODE: 'writeCoils',
    unitId: '',
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** array {array}: The array of states to force into the coils. */
      array: []
    }
  },
  /** FC 16 */
  writeMultipleRegisters: {
    FN_CODE: 'writeRegisters',
    unitId: '',
    params: {
      /** address {number}: The Data Address of the first register. */
      address: 0,
      /** array {array}: The array of values to set into the registers. */
      array: 0
    }
  }
};
exports.MODBUS_COMMAND = MODBUS_COMMAND;
