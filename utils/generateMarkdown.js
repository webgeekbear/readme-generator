// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    let prefix = `![${license} license]`;
    let suffix = `(https://img.shields.io/badge/license-${license}-blue.svg)
  `;
    suffix = suffix.replace(" ", "%20");
    return prefix + suffix;
  } else {
    return "";
  }
}

// Returns the license link
// If there is no license, return "None"
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

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
Licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Please contact me if there are any questions.

GitHub profile: https://github.com/${data.github}

email address: ${data.email}

`;
}

module.exports = generateMarkdown;