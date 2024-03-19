// Función para validar el formulario de registro
function validateRegistrationForm() {
    // Obtener referencias a los elementos del formulario
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    const messageDiv = document.getElementById('message');
  
    // Expresiones regulares para validar el formulario
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=)$/}

    
    function avisar(){
        alert('Fue registrado con éxito')
    }