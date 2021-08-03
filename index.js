exports.handler = async (event) => {
  console.debug('Data arriving into Cage...', event);

  if (event.name && event.name.length > 0) {
    return {
      message: `Subset Evervault Cage ${event.name} event`,
      details: 'Decryption in Progress...',
      encrypted: await evervault.encrypt(event.name)
    }
  } else {
    return {
      message: 'Subset Evervault Cage',
      details: 'Send an encrypted `name` parameter to for Cage to decrypt'
    };
  }
};
