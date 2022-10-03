import { Component } from "@angular/core";

@Component ({
  selector: "app-article",
  templateUrl: "./article.component.html"
})

export class ArticleComponent {
  title: string = "Random Title";
  content: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque ipsam similique a libero nam culpa, fugit, sint sit deserunt mollitia incidunt beatae quos dignissimos. Ab amet commodi corrupti dolores?"
  isTechRelated: boolean = true;
string: any;

  getColor () {
    return this.isTechRelated === true ? 'blue' : 'yellow';
  }
};


