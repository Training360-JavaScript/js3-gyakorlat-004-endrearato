function checkMac(numbers)  {
    const address = (/^([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2})$/i) 
    return numbers.match(address) ? true : false;
};

export default checkMac;