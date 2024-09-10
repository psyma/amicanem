import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';

import Pusher from 'pusher-js'

export default class extends Controller {

    static pusher = null
    connect = async () => {
        
        Pusher.logToConsole = true;
        this.pusher = new Pusher('7c4d952c51d2be9a8302', {
            cluster: 'ap1'
        });

        var channel = this.pusher.subscribe('message');
        channel.bind('new-greeting', function(data) {
            alert(data);
        });

        const response = await fetch("/message", { method: "POST"  })
        console.log(response.ok)
    }
}
