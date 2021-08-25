async function post(url = '', payload = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload)
  }

  let response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }
  else {
    console.log(`Error in 'server/shared/postData.js' = ${response.status}`)
    throw response.status
  }
}

export default post