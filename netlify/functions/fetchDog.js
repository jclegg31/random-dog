import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

export const handler = async function () {
  const apiKey = process.env.API_KEY
  const url = 'https://api.thedogapi.com/v1/images/search'

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    })
    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error fetching data',
    }
  }
}
