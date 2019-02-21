
//Sort the array by displaying the names of the bands withoud article "a", "an", "the" etc. 
//to avoid the problems with alphabetizing

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip (bandName){
return  bandName.replace(/^(a |the |an )/i, '').trim();
 // regular expression that says replace only those which starts from 
        // a, the, an and i means incetives meaning doesn't matter if it is upper or lowercase and replace with nothing
        // trim method removes chars from both ends
}
const sortedBands = bands.sort((a ,b) => strip(a) > strip(b) ? 1 : -1); //strip method removes the whitespace

document.querySelector('#bands').innerHTML = 
sortedBands
.map(band => `<li>${band}</li>`)
.join('');
//it selects bands put it inside of html file which brings us sortedBands and map them and then since it is array,
//it will join it together and display as one string in side the array instead of string with commas in the array;
console.log(sortedBands);
