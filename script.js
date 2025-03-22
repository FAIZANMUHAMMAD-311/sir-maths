
document.getElementById('hireForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  fetch('http://localhost:3000/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.text()) 
  .then(data => {
    console.log("Server response:", data); // Log instead of alert
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

