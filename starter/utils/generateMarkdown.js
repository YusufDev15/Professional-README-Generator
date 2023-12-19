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
