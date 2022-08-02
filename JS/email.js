var form = document.getElementById("my-form");
 
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.classList.add('sent');
          status.innerHTML = "Thanks !";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
              status.classList.add('error');
            } else {
              status.innerHTML = "Try again";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Try again";
      });
    }
    form.addEventListener("submit", handleSubmit);