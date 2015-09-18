 import emailVerify = module("email-verify")

class EmailVerifier {
  public static verify(email:string, callback:Function):void {
    var options = null;

    emailVerify.verify(email, options, function(error, data){
      if(error) {
        callback.call(null, error, null, null);
        return;
      }

      callback.call(null, null, data, null);
      return;
    });
  }
}

export = EmailVerifier;
