export interface ITradeRecord {
  s: string,
  p: number,
  t: number,
  v: number,
}

export interface ITradeTdo {
  data: ITradeRecord[],
  type: 'trade',
}
