const fs = require('fs') 
const projects = require('../site/_data/projects.json')

// define techs Array
let techsSet = new Set()
projects.forEach ((project) => {
  techsSet.add(project.tech)
})
techsArray = [...techsSet]
// console.log('techsArray', techsArray)

// write projects.js
fs.writeFileSync('./src/site/static/js/projects.js', '', (err) => {   
  if (err) throw err; 
})  

//getElementsById
for (tech in techsArray) {
  projectsScript = `${techsArray[tech]} = document.getElementById('.${techsArray[tech]}')\n`
  fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {   
    if (err) throw err; 
  })  
}

// toall
projectsScript = `\ntoall.addEventListener('click', () => {`
fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {    
  if (err) throw err; 
})

for (tech in techsArray) {
  projectsScript = `
  [...document.getElementsByClassName('${techsArray[tech]}')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });`
  fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {   
      if (err) throw err; 
  })
}
// close loop
fs.appendFileSync('./src/site/static/js/projects.js', '\n})\n', (err) => {    
  if (err) throw err; 
})

// for through all the techs
for (tech in techsArray) {
  projectsScript = `\nto${techsArray[tech]}.addEventListener('click', () => {`

  fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {   
    // In case of an error throw err. 
      if (err) throw err; 
  })

  for (currTech in techsArray) {
    if (currTech === tech) {
      projectsScript = `
  [...document.getElementsByClassName('${techsArray[currTech]}')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });`
      fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {   
        if (err) throw err;       
      })
    }
    else {
      projectsScript = `
  [...document.getElementsByClassName('${techsArray[currTech]}')].forEach( (item) => {
    item.classList.add('hidden')
  });`
      fs.appendFileSync('./src/site/static/js/projects.js', projectsScript, (err) => {   
        if (err) throw err;       
      })
    }
  }
  // close loop
  fs.appendFileSync('./src/site/static/js/projects.js', '\n})\n', (err) => {    
    if (err) throw err; 
  })
}
