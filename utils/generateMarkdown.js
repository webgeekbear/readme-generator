// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![{license} license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
  } else {
    return "";
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";

    case "APACHE 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";

    case "GPL 3.0":
      return "https://choosealicense.com/licenses/gpl-3.0/";

    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";

    case "None":
    default:
      return "None";
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
{renderLicenseBadge(data.license)}
## Description
{data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


`;
}

module.exports = generateMarkdown;