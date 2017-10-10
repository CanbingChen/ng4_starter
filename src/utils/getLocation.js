export default function getLocation(opts) {
    var promise = new Promise(function(resolve, reject) {
        if (window.navigator && window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(function(position){
                resolve(position); 
            }, function(error) {
                reject(error);
            }, opts);
        }else {
            reject({
                code: 4,
                message: 'Browser does not support location services'
            });
        }
    });
    return promise;
}
