async function get(url = '') {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
    }
  }

  let response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }
  else {
    console.log(`Error in 'server/shared/getData.js' = ${response.status}`)
    return null
  }
}

export default get