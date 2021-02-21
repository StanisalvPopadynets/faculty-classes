export const areCredentialsInvalid = (email, password) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Please enter a correct email address."; 
  if (password.length < 3)
    return 'Password must be at least eight characters long.';
  if (password.length < 8)
    return 'Password must be at least eight characters long.';
  if (!/^(?=.*?[a-z]).{8,}$/.test(password))
    return 'Password should contain at least one lowercase letter.';
  if (!/^(?=.*?[A-Z]).{8,}$/.test(password))
    return 'Password should contain at least one uppercase letter.';
  if (!/^(?=.*?[#?!@$%^&*_-]).{8,}$/.test(password))
    return 'Password should contain at least one special character.';
  return "";
}
