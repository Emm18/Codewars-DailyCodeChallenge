//https://www.codewars.com/kata/51646de80fd67f442c000013

//Complete the method so that it does the following:
//Removes any duplicate query string parameters from the url (the first occurence should be kept)
//Removes any query string parameters specified within the 2nd argument (optional array)
//Examples:
//stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
//stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
//stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'

function stripUrlParams(url, paramsToStrip=[]){
  if(!url.includes('?')){
    return url;
  };
  let newUrl = url.split('?')
  let parameters = newUrl[1];
  let tempObj = {};
  let filteredParameters = [];
  parameters.split('&').map(params => {
    let temp = params.split('=');
    let key = temp[0];
    let value = temp[1];
    if(!tempObj[key] && !paramsToStrip.includes(key)){
      tempObj[key] = value;
      filteredParameters.push(key + '=' + value);
    };
  });
  
  return filteredParameters.length > 0 ? newUrl[0] + "?" + filteredParameters.join('&') : newUrl[0];
};
