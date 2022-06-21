export interface INote {
    id: number
    value: String
}

export interface IState {
    notes: INote[],
    note: INote
}

export const URL_BASE = 'http://localhost:8000';