const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword(plainPassword) {
    const saltRounds = 10; // You can adjust the number of salt rounds
    try {
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}

// Example usage
(async () => {
    const plainPassword = 'India@2024';
    const hashedPassword = await hashPassword(plainPassword);
    
    // Save `hashedPassword` to your database
    console.log('Hashed password:', hashedPassword);
})();
async function verifyPassword(plainPassword, hashedPassword) {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error verifying password:', error);
        throw error;
    }
}

// Example usage
// (async () => {
//     const plainPassword = 'yourPasswordHere';
//     const hashedPassword = 'storedHashedPasswordHere'; // Retrieve this from your database

//     const isValid = await verifyPassword(plainPassword, hashedPassword);
    
//     if (isValid) {
//         console.log('Password is valid!');
//     } else {
//         console.log('Invalid password.');
//     }
// })();
