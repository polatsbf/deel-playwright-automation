// pages/PracticePage.js
import { BasePage } from "./BasePage.js";

export class PracticePage extends BasePage {
  constructor(page) {
    super(page);
    this.addElementButton = this.page.getByRole("button", { name: "Add Element"});
    this.deleteButtons = this.page.locator("button.added-manually");
  }

  async clickAddElement(times = 1){
    for(let i = 0; i < times; i++){
     await this.addElementButton.click(); 
    }
  }
}
