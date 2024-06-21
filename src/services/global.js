export const getInfo = () => {
    return sessionStorage.getItem('info') ? JSON.parse(sessionStorage.getItem('info')) : null
     
}