// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license) {
  return '';
}

const licenseBadges = {
  'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  'GPL 3.0': '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)'
};

return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  {
    return ''; 
}

const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://opensource.org/licenses/GPL-3.0'
};

const licenseLink = licenseLinks[license];

if (licenseLink) {
    return `[${license}](${licenseLink})`; // Return the formatted link
}

return ''; // Return an empty string if the license is not found
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return an empty string if there is no license
}
  
const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://opensource.org/licenses/GPL-3.0'

    // Add more licenses as needed
};

const licenseLink = licenseLinks[license];

if (licenseLink) {
    return `## License\n\nThis project is licensed under the [${license}](${licenseLink}) license.\n`;
}

return ''; // Return an empty string if the license is not found
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;

