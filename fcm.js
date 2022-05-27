


    var FCM = require('fcm-node');
    var serverKey = 'AAAANVMTTss:APA91bGNgRH7K4uOqmdXwG2SRMIy1QjOnpSywfAdf1z9UR7Qcvd9CoTahBpi74sDujynSYmAwLmuVN17snmk3lt6044SftO6zKlYJz5hDHAoDYepSHF21pbmkWuLPAUvsOcoMjHjN5n5';
    var fcm = new FCM(serverKey);

    var message = {
	to:'cjzxpPNVT4GUEBhQy6R42X:APA91bEImuEzxZKXAASFBero7o-XkuNDwW-jyDY0zmtQOpZz20O4XjZ9KM0Tncc2DwEvxlu0SIwq0wJaHhrN-utzQPjBWed32D0TkGp_7D2UQ-q3zUAuXlw55eQPmhWMNA-tuE4Z_TBn',
        notification: {
            title: 'NodeJS',
            body: 'Mensaje de prueba version 2',
        }

    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });
