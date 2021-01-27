const { Notification } = require('electron');

const generate_notification = ( title, message ) => {
    
    new Notification({
        title: title,
        body: message
    }).show();
};

module.exports = {
    generate_notification
};