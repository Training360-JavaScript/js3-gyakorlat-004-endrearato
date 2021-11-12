function checkVisa(numbers)  {
    const visa = (/^[\d]{16}$/) 
    return numbers.match(visa) ? true : false;
};

export default checkVisa;