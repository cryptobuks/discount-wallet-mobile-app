import axios from 'axios'

import {device, platformNames} from 'platform'

let url;

/*in some function or globally*/
if (device.os === platformNames.ios) {
    /*localhost for ios*/
    url = "http://192.168.0.45:8080";
}
else if (device.os === platformNames.android) {
    /*localhost for android*/
    url = "http://192.168.0.45:8080";
}

function initRegistrationByPhoneNumber(phoneNumber) {
    return axios.post(url + '/users/register', {
        phoneNumber: phoneNumber
    })
}

export default {
    initRegistrationByPhoneNumber
}
