import fetch from 'node-fetch';

const surnameCount = async x => { 
  let input = x;

  const response = await fetch('https://www.names.org/n/'+input+'/about#');
  const data = await response.text();
  const param_data = data.substring(
          data.lastIndexOf("the U.S. Census Bureau surveyed") + 32,
          data.lastIndexOf("people with the last name")
        );

  let result = parseFloat(param_data.replace(/,/g, ''));

  if(input === ""){
    input = "no name entered";
  }

  if(Number.isNaN(result)){
     result = "there are no results for that name";
  };

  return console.log(result);
};

export default function(x){ surnameCount(x) };