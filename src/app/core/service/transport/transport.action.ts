import { Transport } from "_api";

export class GetAllTransport {
  static readonly type = "[Transport] Get all transports";
}

export class CreateTransport {
  static readonly type = "[Transport] Create transport";
  constructor(public transport: Transport) {}
}

export class UpdateTransport {
  static readonly type = "[Transport] Update transport";
  constructor(public transport: Transport) {}
}
