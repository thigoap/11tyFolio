const fs = require('fs') 
const techs = require('../site/_data/techs.json')

// define techs Array
let techsArray = new Array()
techs.forEach( (tech) => {
  techsArray.push(tech.link)
})
// console.log('techsArray', techsArray)

// write techs.js
fs.writeFileSync('./src/site/static/js/techs.js', '', (err) => {   
  if (err) throw err; 
})  

for (tech in techsArray) {
  techsScript = `item${techsArray[tech]}.addEventListener('click', () => {`
  
  fs.appendFileSync('./src/site/static/js/techs.js', techsScript, (err) => {   
    if (err) throw err; 
  })

  for (currTech in techsArray) {
    if (currTech === tech) {
      techsScript = `
  item${techsArray[currTech]}.classList.add('sm:-mb-px')
  ${techsArray[currTech]}.classList.add('text-black', 'sm:border-l', 'sm:border-t', 'sm:border-r', 'sm:rounded-t')
  ${techsArray[currTech]}.classList.remove('text-gray-500')`
      fs.appendFileSync('./src/site/static/js/techs.js', techsScript, (err) => {   
        if (err) throw err; 
      })
    }
    else {
      techsScript = `
  item${techsArray[currTech]}.classList.remove('sm:-mb-px')
  ${techsArray[currTech]}.classList.remove('text-black', 'sm:border-l', 'sm:border-t', 'sm:border-r', 'sm:rounded-t')
  ${techsArray[currTech]}.classList.add('text-gray-500')`
      fs.appendFileSync('./src/site/static/js/techs.js', techsScript, (err) => {   
        if (err) throw err; 
      })
    }
  }
  // close loop
  fs.appendFileSync('./src/site/static/js/techs.js', '\n})\n\n', (err) => {    
    if (err) throw err; 
  })
}
