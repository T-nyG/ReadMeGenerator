function generateMarkdown(data) {

  let imgURL = "";
  let githubEmail = "";

  const queryUrl = 'https://api.github.com/users/${data.username}';
  axios.get(queryUrl).then(function(res) {
    imURL = res.data.avatar_url;
    githubEmail = response.data.email;
    console.log(response);
    return imgURL, githubEmail;
  });


  return `
# Your Project Name
##${data.projectname} \n
# Description \n
##${data.description} \n
# Github Username \n
##${data.username} \n
# Installation \n
##${data.installation} \n
# Usage \n
##${data.usage} \n 
# License \n ![license](https://img.shields.io/badge/license-${data.license}-brightgreen) \n 
# Contributing \n
##${data.contributing} \n 
# Tests \n
##${data.tests} \n 
# Questions \n
##${data.questions} \n 

`;
}

module.exports = generateMarkdown;
