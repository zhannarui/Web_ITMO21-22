function save() {
    const email = document.getElementById('formEmail').value;
    const pass = document.getElementById('formMess').value;
    const body = {
      formFields: [
        { id: 'email', value: email },
        { id: 'password', value: pass },
      ],
    };
    const bodyJson = JSON.stringify(body);
    console.log(bodyJson);
  
    fetch('http://localhost/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyJson,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
          console.log('Error');
        }
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 'OK') {
          location.replace('http://localhost');
        } else {
          console.log('Error');
        }
      });
  }
  
  function login() {
    const email = document.getElementById('formEmail').value;
    const pass = document.getElementById('formMess').value;
    const body = {
      formFields: [
        { id: 'email', value: email },
        { id: 'password', value: pass },
      ],
    };
    const bodyJson = JSON.stringify(body);
    console.log(bodyJson);
  
    fetch('http://localhost/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyJson,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
          console.log('Error');
        }
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 'OK') {
          location.replace('http://localhost');
        } else {
          console.log('Error');
        }
      });
  }
  
  function ex() {
    fetch('http://localhost/api/auth/signout', {
      method: 'POST',
    }).then((res) => console.log(res));
  }