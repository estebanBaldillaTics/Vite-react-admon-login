const apiUrlBase = 'http://localhost:3000';

export async function loginUser(email, password) {
  const apiUrl = `${apiUrlBase}/api/auth/login`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }), 
  });

  if (!response.ok) {
    alert('Error al iniciar sesión');
    throw new Error('Error al iniciar sesión');
  }
  
  const responseData = await response.json(); 
  
  console.log('Respuesta del servicio:', responseData);

  alert('Inicio de sesión exitoso');
  return responseData;
}

export async function createUser(userData) {
  const apiUrl = `${apiUrlBase}/api/user/create`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    alert('Error al crear usuario');
    throw new Error('Error al crear usuario');
  }else{
    alert('Usuario creado con exito');
  }
  return response.json();
}
