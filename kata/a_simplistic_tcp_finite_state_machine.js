// https://www.codewars.com/kata/54acc128329e634e9a000362

'use strict';

const FSM = new Map();
FSM.set('CLOSED', new Map([['APP_PASSIVE_OPEN', 'LISTEN'], ['APP_ACTIVE_OPEN', 'SYN_SENT']]));
FSM.set('LISTEN', new Map([['RCV_SYN', 'SYN_RCVD'], ['APP_SEND', 'SYN_SENT'], ['APP_CLOSE', 'CLOSED']]));
FSM.set('SYN_RCVD', new Map([['APP_CLOSE', 'FIN_WAIT_1'], ['RCV_ACK', 'ESTABLISHED']]));
FSM.set('SYN_SENT', new Map([['RCV_SYN', 'SYN_RCVD'], ['RCV_SYN_ACK', 'ESTABLISHED'], ['APP_CLOSE', 'CLOSED']]));
FSM.set('ESTABLISHED', new Map([['APP_CLOSE', 'FIN_WAIT_1'], ['RCV_FIN', 'CLOSE_WAIT']]));
FSM.set('FIN_WAIT_1', new Map([['RCV_FIN', 'CLOSING'], ['RCV_FIN_ACK', 'TIME_WAIT'], ['RCV_ACK', 'FIN_WAIT_2']]));
FSM.set('CLOSING', new Map([['RCV_ACK', 'TIME_WAIT']]));
FSM.set('FIN_WAIT_2', new Map([['RCV_FIN', 'TIME_WAIT']]));
FSM.set('TIME_WAIT', new Map([['APP_TIMEOUT', 'CLOSED']]));
FSM.set('CLOSE_WAIT', new Map([['APP_CLOSE', 'LAST_ACK']]));
FSM.set('LAST_ACK', new Map([['RCV_ACK', 'CLOSED']]));

function traverseTCPStates(eventList, current_state = 'CLOSED') {
    if (eventList.length === 0) return current_state;

    for (let current_event of eventList) {
        eventList.shift();
        let next_state = FSM.get(current_state)?.get(current_event);
        if (next_state) {
            return traverseTCPStates(eventList, next_state);
        } else {
            return traverseTCPStates([], 'ERROR');
        }
    }
}