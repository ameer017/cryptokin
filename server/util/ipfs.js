const axios = require('axios');
const FormData = require('form-data');

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

exports.uploadToIPFS = async (data) => {
  try {
    const jsonData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('file', Buffer.from(jsonData), {
      filename: 'walletBackup.json',
      contentType: 'application/json',
    });

    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      maxBodyLength: Infinity,
      headers: {
        ...formData.getHeaders(),
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });

    return response.data.IpfsHash; // CID
  } catch (err) {
    console.error('IPFS Upload Error:', err.message);
    throw new Error('Failed to upload to IPFS');
  }
};
