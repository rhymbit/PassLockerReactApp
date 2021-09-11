async function put(url='', payload={}) {
  const options = {
    method: 'PUT',
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
    throw response.status
  }
}

export default put