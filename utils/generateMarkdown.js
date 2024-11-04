// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
if (!license) {
  return '';
}

const licenseBadges = {
  'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  'GPL 3.0': '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)',
  'BSD 3': '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
  // Add more licenses as needed
};

return licenseBadges[license] || '';
}; 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
