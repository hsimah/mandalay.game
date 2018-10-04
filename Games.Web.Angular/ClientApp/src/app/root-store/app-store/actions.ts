import { Action } from '@ngrx/store';

import { Card } from '../../models/card';
import { Round } from '../../models/round';

export enum ActionTypes {
  REQUEST_CARDS = 'REQUEST_CARDS',
  RECEIVE_CARDS = 'RECEIVE_CARDS',
  SEND_ROUND = 'SEND_ROUND',
  ROUND_SENT = 'ROUND_SENT',
  HANDLE_ERROR = 'HANDLE_ERROR'
}

export class RequestCardsAction implements Action {
  readonly type = ActionTypes.REQUEST_CARDS;
}
export class ReceiveCardsAction implements Action {
  readonly type = ActionTypes.RECEIVE_CARDS;
  constructor(public payload: { cards: Card[] }) { }
}
export class SendRoundAction implements Action {
  readonly type = ActionTypes.SEND_ROUND;
  constructor(public round: Round) { }
}
export class RoundSentAction implements Action {
  readonly type = ActionTypes.ROUND_SENT;
}
export class HandleErrorAction implements Action {
  readonly type = ActionTypes.HANDLE_ERROR;
  constructor(public payload: { error: string }) { }
}

export type Actions =
  RequestCardsAction |
  ReceiveCardsAction |
  SendRoundAction |
  HandleErrorAction;