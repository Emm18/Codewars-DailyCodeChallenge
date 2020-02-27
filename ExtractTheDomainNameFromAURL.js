//https://www.codewars.com/kata/514a024011ea4fb54200004b

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//domainName("http://github.com/carbonfive/raygun") == "github" 
//domainName("http://www.zombie-bites.com") == "zombie-bites"
//domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  url = url.split('//');
  if(url[0] == 'http:' || url[0] == 'https:'){
    url.splice(0,1);
  } 
  url = url.join('').split('.');
  if(url[0] == 'www'){
    url.splice(0,1);
  }
  return url[0]
}
