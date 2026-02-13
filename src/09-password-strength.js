/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let countCriteria = 0;
  if (password === "" || typeof password !== "string") return "weak";
  if (password.length >= 8) {
    countCriteria++;
  }
  if (/[A-Z]/.test(password)) {
    countCriteria++;
  }
  if (/[a-z]/.test(password)) {
    countCriteria++;
  }
  if (/[0-9]/.test(password)) {
    countCriteria++;
  }
  if (/[!@#$%^&*()_\+\-=\[\]{}|;:,.<>?]/.test(password)) {
    countCriteria++;
  }
  console.log(countCriteria);

  if (countCriteria === 5) {
    return "very strong";
  }
  if (countCriteria === 4) {
    return "strong";
  }
  if (countCriteria === 2 || countCriteria === 3) {
    return "medium";
  }
  if (countCriteria === 1 || countCriteria === 0) {
    return "weak";
  }
  
}
