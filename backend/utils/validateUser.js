const fs = require('fs');
const path = require('path');

const validateUser = (registrationId, email) => {
  try {
    // Read both JSON files
    const wcData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/csvjson_wc.json'), 'utf8'));
    const nonWcData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/csvjson_nonwc.json'), 'utf8'));

    // Combine both arrays
    const allData = [...wcData, ...nonWcData];

    // Find user in the combined data
    const user = allData.find(entry => 
      entry['Registration Number'] === registrationId && 
      entry['Learner Email ID'] === email
    );

    if (!user) {
      return {
        isValid: false,
        message: 'Invalid registration number or learner email ID'
      };
    }

    // Map domains to match the enum values in the User model
    const domainMapping = {
      'DSA': 'dsa',
      'AI/ML': 'aiml',
      'Web Development': 'webdev',
      'App Development': 'appdev',
      'Cyber Security': 'cybersec',
      'Designing and Editing': 'design'
    };

    const domains = user['Select Domains']
      .split(', ')
      .map(domain => domainMapping[domain.trim()])
      .filter(domain => domain); // Remove any undefined mappings

    return {
      isValid: true,
      userData: {
        name: user['Name (As you would want on your certificate)'],
        branch: user['Branch'],
        domains: domains
      }
    };
  } catch (error) {
    console.error('Error validating user:', error);
    return {
      isValid: false,
      message: 'Error validating user credentials'
    };
  }
};

module.exports = validateUser; 