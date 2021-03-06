import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorials.model';

export const Add_Tutorial = 'Add'
export const Remove_Tutorial = 'Remove'

export class AddTutorial implements Action{
    readonly type = Add_Tutorial
    constructor(public payload : Tutorial){}
}
export class RemoveTutorial implements Action{
    readonly type = Remove_Tutorial
    constructor(public payload : number){}
}
export type Actions = AddTutorial | RemoveTutorial