// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// Creating a function that creates a license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// Creating a function that returns the license section in the README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License  
  
      Copyright @ ${license}. All rights reserved.
  
      Licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
    ${renderLicenseLink(data.license)}

   ## Installation

   To install dependencies, run these commands:
   
   \`\`\`
   ${data.installation}
   \`\`\`
   
   ## Usage
   ${data.usage}
   
   ## Contributors
   ${data.contributors}
   
   ## Tests
   
   \`\`\`
   ${data.test}
   \`\`\`
   
   ## Questions
   * Name: ${data.name}
   * Email: ${data.email}
   * GitHub: [${data.creator}](https://github.com/${data.creator}/)
   
   ${renderLicenseSection(data.license)}
   
   
   `;
}
module.exports = generateMarkdown;
