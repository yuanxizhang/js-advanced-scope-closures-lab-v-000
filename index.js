function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    let range = Math.abs(parseInt(arg1.slice(0, -2) - parseInt(arg2.slice(0, -2))))
    if (range <= blockRange) {
      return `within range by ${Math.abs(range - blockRange)}`
    } else {
      return `${Math.abs(range - blockRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(x) {
	return function tipFor(y) {
		return x * y;
	}
}

function createDriver(name) {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  };
}