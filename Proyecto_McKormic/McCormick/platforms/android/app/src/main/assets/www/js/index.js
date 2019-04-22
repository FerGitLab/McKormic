
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        document.getElementById('ingresar').addEventListener('click',()=>{
            window.location = "pages/sicronizacion.html";
        });
    }
};

app.initialize();