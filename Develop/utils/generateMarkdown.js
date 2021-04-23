// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 const licenses = ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                  "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
                  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                  "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
                  "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
                  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
 ]
if (license==="Apache"){
return licenses[0];
}
if (license==="Boost"){
  return licenses[1];
  }
  if (license==="BSD"){
    return licenses[2];
    }
    if (license==="BSD-2"){
      return licenses[3];
      }
      if (license==="Eclispe"){
        return licenses[4];
        }
        if (license==="GNU"){
          return licenses[5];
          }if (license==="ISC"){
            return licenses[7];
            }
            if (license==="MIT"){
              return licenses[6];
              }
             if (license==="None"){
               return "";
             }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license==="None"){
  return " ";
}
else {return "* [License](##Licenses)."}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="None"){
    return " ";
}  else {
  return "## Licenses"
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.project}
  ## Description 
  ${data.description}

  Table of Contents
 * [Installation](##Installations).
 * [Usage](##Usage).
 * [Contributing](##Contributing).
 ${renderLicenseLink(data.license)} 
 * [Tests](##Testing).
 * [Contact Me](##Contact).
  
  ## Installations
  ${data.dependencies}

  ## Usage
  ${data.usingrepo}

  ## Contributing
  ${data.contributingrepo}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## Testing
  ${data.tests}

  ## Contact
  ${data.email}
  ${data.github}
`;
}
module.exports = generateMarkdown;