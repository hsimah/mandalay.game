import { Action } from '@ngrx/store';
import { Card } from '../../models/card';
import { Player } from '../../models/player';

export enum ActionTypes {
    SET_PLAYER_COUNT = 'SET_PLAYER_COUNT',
    SET_PLAYERS = 'SET_PLAYERS',
    DEAL_CARD = 'DEAL_CARD',
    START_GAME = 'START_GAME',
    SET_WINNER = 'SET_WINNER',
    RESET_GAME = 'RESET_GAME',
    INIT_ROUND = 'INIT_ROUND'
}

export class SetPlayerCountAction implements Action {
    readonly type = ActionTypes.SET_PLAYER_COUNT;
    constructor(public payload: {
        playerCount: number
    }) { }
}

export class SetPlayersAction implements Action {
    readonly type = ActionTypes.SET_PLAYERS;
    constructor(public payload: {
        players: Player[]
    }) { }
}

export class DealCardAction implements Action {
    readonly type = ActionTypes.DEAL_CARD;
    constructor(public payload: {
        deck: Card[],
        players: Player[],
        deal: number
    }) { }
}

export class StartGameAction implements Action {
    readonly type = ActionTypes.START_GAME;
}

export class InitRoundAction implements Action {
    readonly type = ActionTypes.INIT_ROUND;
    constructor(public payload: {
        deck: Card[],
        wildcard: Card
    }) { }
}

export class SetWinnerAction implements Action {
    readonly type = ActionTypes.SET_WINNER;
    constructor(public payload: {
        winner: Player
    }) { }
}

export class ResetGameAction implements Action {
    readonly type = ActionTypes.RESET_GAME;
    constructor(public payload: {
        playerCount: number,
        players: Player[]
    }) { }
}

export type Actions = SetPlayersAction |
    SetPlayerCountAction |
    DealCardAction |
    InitRoundAction |
    StartGameAction |
    SetWinnerAction |
    ResetGameAction