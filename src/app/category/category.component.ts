import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  public parent_cats: any;
  private subscription: Subscription;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getParentCatList();
    this.subscription = this.categoryService.categoryChanged.subscribe(
        (category: any) => {
          this.parent_cats = category;
        }
    );
    this.parent_cats = this.categoryService.getParentCategories();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
