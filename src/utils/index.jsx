
export const getAuthorizeToken = () => {
  const URL = window.location.href
  if (URL) {
    const tokenFlag = "code="
    const codeIndex = URL.indexOf(tokenFlag)
    if (codeIndex !== -1) {
      const authorizeToken = URL.slice(codeIndex + tokenFlag.length)
      localStorage.setItem("authorizeToken", authorizeToken)
      return authorizeToken;
    }
  }
  const authorizeToken = localStorage.getItem("authorizeToken")
  if (authorizeToken) {
    return authorizeToken
  }
  return null;
}