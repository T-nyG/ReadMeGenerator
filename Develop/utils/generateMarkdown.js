// const axios = require("axios");

function generateMarkdown(data) {
  
  // let imgURL = "";

  // const queryUrl = `https://api.github.com/users/${data.username}`;
  // axios.get(queryUrl).then(function(response) {
  //   console.log(response)
  //   imgURL = response.data.avatar_url;
  //   return imgURL;
  // });

  return `
# Your Project Name
### ${data.projectname} \n

# Description \n
### ${data.description} \n

# Table of Contents \n
  * [Project Name](#projectname)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

# Installation \n
### ${data.installation} \n

# Usage \n
### ${data.usage} \n 

# License \n ![license](https://img.shields.io/badge/license-${data.license}-brightgreen) \n 

# Contributing \n
### ${data.contributing} \n 

# Tests \n
### ${data.tests} \n 

# Questions \n
### ${data.questions} \n 


# Github Username \n
### ${data.username} \n

`;
}

module.exports = generateMarkdown;
