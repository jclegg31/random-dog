require('dotenv').config()
const fetch = require('node-fetch')

exports.handler = async function () {
  const apiKey = process.env.API_KEY
  const url = 'https://api.thedogapi.com/v1/images/search'

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    })
    const data = await response.json()
    console.log('Fetched Data:', data) // Log the fetched data
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error('Error fetching data:', error) // Log the error
    return {
      statusCode: 500,
      body: 'Error fetching data',
    }
  }
}
