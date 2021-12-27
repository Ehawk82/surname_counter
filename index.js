import fetch from 'node-fetch';

const surnameCount = () => {

    let input = "graziano";

    const response = await fetch('https://www.names.org/n/'+input+'/about#');
    const data = await response.text();
    const param_data = data.substring(
              data.lastIndexOf("the U.S. Census Bureau surveyed") + 32,
              data.lastIndexOf("people with the last name")
            );

    const p1d = parseFloat(param_data.replace(/,/g, ''));

    let result = p1d;

    if(input === ""){
      input = "no name entered";
    }

    if(Number.isNaN(result)){
       result = "there are no results for that name";
    };
    return result
}
module.export = {surnameCount:surnameCount}