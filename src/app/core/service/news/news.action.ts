import { News } from "_api";

export class GetAllNewsOfPartner {
  static readonly type = "[News] Get all News";
}

export class UpdateNews {
  static readonly type = "[News] Update News";
  constructor(public news: News) {}
}
export class CreateNews {
  static readonly type = "[News] Create News";
  constructor(public news: News) {}
}
export class DeleteNews {
  static readonly type = "[News] Delete News";
  constructor(public newsId: number) {}
}
