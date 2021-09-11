async function deleteFunc(url = '') {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
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

export default deleteFunc