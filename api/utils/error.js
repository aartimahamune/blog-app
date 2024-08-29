export const errorhandler = (statuscode, message) =>{
    const error = new Error() //constructor from javascript
    error.statuscode = statuscode
    error.message = message
    return error;
};