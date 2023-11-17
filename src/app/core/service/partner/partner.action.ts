import { Partner } from "_api";

export class GetAllPartner {
  static readonly type = "[Partner] Get all partners";
}
export class GetAllPendingPartner {
  static readonly type = "[Partner] Get all pending partners";
}

export class DenyPartner {
  static readonly type = "[Partner] deny partner";
  constructor(public partnerId: number) {}
}
export class AcceptPartner {
  static readonly type = "[Partner] accept partner";
  constructor(public partnerId: number) {}
}
export class GetPartnerById {
  static readonly type = "[Partner] get partner by id";
  constructor(public partnerId: number) {}
}
export class UpdatePartner {
  static readonly type = "[Partner] Update partner";
  constructor(public partner: Partner) {}
}
export class GetPartnerProfile {
  static readonly type = "[Partner] Get partner profile";
  // constructor(public partner: Partner) { }
}
