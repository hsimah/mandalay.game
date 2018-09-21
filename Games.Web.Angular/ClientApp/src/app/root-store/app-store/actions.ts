import { Action } from '@ngrx/store';

import { Card } from '../../models/card';

export enum ActionTypes {
  REQUEST_CARDS = 'REQUEST_CARDS',
  RECEIVE_CARDS = 'RECEIVE_CARDS',
  SEND_ROUND = 'SEND_ROUND',
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