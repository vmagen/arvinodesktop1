const EHelper = {
    getApi: function () {
        return 'http://localhost:54186/api/'
      },
      getStrongPassword: function(){
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
          return strongRegex;
      }
}
export default EHelper;