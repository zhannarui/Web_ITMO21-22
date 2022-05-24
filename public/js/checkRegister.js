async function doesSessionExist() {
    console.log(supertokens);
    if (await supertokens.doesSessionExist()) {
    } else {
      location.replace('http://localhost/user/auth');
    }
  }
  
  doesSessionExist().then(() => console.log('Success!'));