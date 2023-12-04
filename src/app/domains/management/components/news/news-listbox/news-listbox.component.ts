import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { News, Station } from '_api';
import { Observable } from 'rxjs';
import { GetAllNewsOfPartner } from 'src/app/core/service/news/news.action';
import { NewsState } from 'src/app/core/service/news/news.state';

@Component({
  selector: 'app-news-listbox',
  templateUrl: './news-listbox.component.html',
  styleUrls: ['./news-listbox.component.scss']
})
export class NewsListboxComponent implements OnInit {

  public currentNews: News;
  @Output() selectedNews = new EventEmitter<News | undefined>();
  @Output() isUpdateMode = new EventEmitter<boolean>();
  @Output() isNewsFormVisible = new EventEmitter<boolean>();
  @Select(NewsState.getAllNewsOfPartner) public news$: Observable<News[]>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    if (this.store.selectSnapshot(NewsState.getAllNewsOfPartner).length === 0) this.store.dispatch(new GetAllNewsOfPartner());
  }

  public handleChangeSelectedNews(): void {
    this.isNewsFormVisible.emit(true);
    this.isUpdateMode.emit(true);
    this.selectedNews.emit(this.currentNews);
  }

  public handleAddNews(): void {
    this.isNewsFormVisible.emit(true);
    this.isUpdateMode.emit(false);
    this.selectedNews.emit(undefined);
    this.currentNews = undefined;
  }
}



