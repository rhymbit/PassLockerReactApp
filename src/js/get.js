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
    throw response.status
  }
}

export default get