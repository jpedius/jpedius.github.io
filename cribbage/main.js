"use strict";

import { MyApplication } from "../js/application.js";

class MyCribbage {

  constructor() {

    this.myCribbage = [{
      "key": 0,
      "name": "---",
      "fifteens": null,
      "runs": null,
      "flush": null,
      "play": null,
      "image": "images/joker.svg",
    }, {
      "key": 1,
      "name": "A ♠️",
      "fifteens": 1,
      "runs": 1,
      "flush": 1,
      "play": "ace of spades",
      "image": "images/ace_of_spades.svg",
    }, {
      "key": 2,
      "name": "2 ♠️",
      "fifteens": 2,
      "runs": 2,
      "flush": 1,
      "play": "two of spades",
      "image": "images/2_of_spades.svg",
    }, {
      "key": 3,
      "name": "3 ♠️",
      "fifteens": 3,
      "runs": 3,
      "flush": 1,
      "play": "three of spades",
      "image": "images/3_of_spades.svg",
    }, {
      "key": 4,
      "name": "4 ♠️",
      "fifteens": 4,
      "runs": 4,
      "flush": 1,
      "play": "four of spades",
      "image": "images/4_of_spades.svg",
    }, {
      "key": 5,
      "name": "5 ♠️",
      "fifteens": 5,
      "runs": 5,
      "flush": 1,
      "play": "five of spades",
      "image": "images/5_of_spades.svg",
    }, {
      "key": 6,
      "name": "6 ♠️",
      "fifteens": 6,
      "runs": 6,
      "flush": 1,
      "play": "six of spades",
      "image": "images/6_of_spades.svg",
    }, {
      "key": 7,
      "name": "7 ♠️",
      "fifteens": 7,
      "runs": 7,
      "flush": 1,
      "play": "seven of spades",
      "image": "images/7_of_spades.svg",
    }, {
      "key": 8,
      "name": "8 ♠️",
      "fifteens": 8,
      "runs": 8,
      "flush": 1,
      "play": "eight of spades",
      "image": "images/8_of_spades.svg",
    }, {
      "key": 9,
      "name": "9 ♠️",
      "fifteens": 9,
      "runs": 9,
      "flush": 1,
      "play": "nine of spades",
      "image": "images/9_of_spades.svg",
    }, {
      "key": 10,
      "name": "10 ♠️",
      "fifteens": 10,
      "runs": 10,
      "flush": 1,
      "play": "ten of spades",
      "image": "images/10_of_spades.svg",
    }, {
      "key": 11,
      "name": "J ♠️",
      "fifteens": 10,
      "runs": 11,
      "flush": 1,
      "play": "jack of spades",
      "image": "images/jack_of_spades.svg",
    }, {
      "key": 12,
      "name": "Q ♠️",
      "fifteens": 10,
      "runs": 12,
      "flush": 1,
      "play": "queen of spades",
      "image": "images/queen_of_spades.svg",
    }, {
      "key": 13,
      "name": "K ♠️",
      "fifteens": 10,
      "runs": 13,
      "flush": 1,
      "play": "king of spades",
      "image": "images/king_of_spades.svg",
    }, {
      "key": 14,
      "name": "A ♥️",
      "fifteens": 1,
      "runs": 1,
      "flush": 2,
      "play": "ace of hearts",
      "image": "images/ace_of_hearts.svg",
    }, {
      "key": 15,
      "name": "2 ♥️",
      "fifteens": 2,
      "runs": 2,
      "flush": 2,
      "play": "two of hearts",
      "image": "images/2_of_hearts.svg",
    }, {
      "key": 16,
      "name": "3 ♥️",
      "fifteens": 3,
      "runs": 3,
      "flush": 2,
      "play": "three of hearts",
      "image": "images/3_of_hearts.svg",
    }, {
      "key": 17,
      "name": "4 ♥️",
      "fifteens": 4,
      "runs": 4,
      "flush": 2,
      "play": "four of hearts",
      "image": "images/4_of_hearts.svg",
    }, {
      "key": 18,
      "name": "5 ♥️",
      "fifteens": 5,
      "runs": 5,
      "flush": 2,
      "play": "five of hearts",
      "image": "images/5_of_hearts.svg",
    }, {
      "key": 19,
      "name": "6 ♥️",
      "fifteens": 6,
      "runs": 6,
      "flush": 2,
      "play": "six of hearts",
      "image": "images/6_of_hearts.svg",
    }, {
      "key": 20,
      "name": "7 ♥️",
      "fifteens": 7,
      "runs": 7,
      "flush": 2,
      "play": "seven of hearts",
      "image": "images/7_of_hearts.svg",
    }, {
      "key": 21,
      "name": "8 ♥️",
      "fifteens": 8,
      "runs": 8,
      "flush": 2,
      "play": "eight of hearts",
      "image": "images/8_of_hearts.svg",
    }, {
      "key": 22,
      "name": "9 ♥️",
      "fifteens": 9,
      "runs": 9,
      "flush": 2,
      "play": "nine of hearts",
      "image": "images/9_of_hearts.svg",
    }, {
      "key": 23,
      "name": "10 ♥️",
      "fifteens": 10,
      "runs": 10,
      "flush": 2,
      "play": "ten of hearts",
      "image": "images/10_of_hearts.svg",
    }, {
      "key": 24,
      "name": "J ♥️",
      "fifteens": 10,
      "runs": 11,
      "flush": 2,
      "play": "jack of hearts",
      "image": "images/jack_of_hearts.svg",
    }, {
      "key": 25,
      "name": "Q ♥️",
      "fifteens": 10,
      "runs": 12,
      "flush": 2,
      "play": "queen of hearts",
      "image": "images/queen_of_hearts.svg",
    }, {
      "key": 26,
      "name": "K ♥️",
      "fifteens": 10,
      "runs": 13,
      "flush": 2,
      "play": "king of hearts",
      "image": "images/king_of_hearts.svg",
    }, {
      "key": 27,
      "name": "A ♣️",
      "fifteens": 1,
      "runs": 1,
      "flush": 3,
      "play": "ace of clubs",
      "image": "images/ace_of_clubs.svg",
    }, {
      "key": 28,
      "name": "2 ♣️",
      "fifteens": 2,
      "runs": 2,
      "flush": 3,
      "play": "two of clubs",
      "image": "images/2_of_clubs.svg",
    }, {
      "key": 29,
      "name": "3 ♣️",
      "fifteens": 3,
      "runs": 3,
      "flush": 3,
      "play": "three of clubs",
      "image": "images/3_of_clubs.svg",
    }, {
      "key": 30,
      "name": "4 ♣️",
      "fifteens": 4,
      "runs": 4,
      "flush": 3,
      "play": "four of clubs",
      "image": "images/4_of_clubs.svg",
    }, {
      "key": 31,
      "name": "5 ♣️",
      "fifteens": 5,
      "runs": 5,
      "flush": 3,
      "play": "five of clubs",
      "image": "images/5_of_clubs.svg",
    }, {
      "key": 32,
      "name": "6 ♣️",
      "fifteens": 6,
      "runs": 6,
      "flush": 3,
      "play": "six of clubs",
      "image": "images/6_of_clubs.svg",
    }, {
      "key": 33,
      "name": "7 ♣️",
      "fifteens": 7,
      "runs": 7,
      "flush": 3,
      "play": "seven of clubs",
      "image": "images/7_of_clubs.svg",
    }, {
      "key": 34,
      "name": "8 ♣️",
      "fifteens": 8,
      "runs": 8,
      "flush": 3,
      "play": "eight of clubs",
      "image": "images/8_of_clubs.svg",
    }, {
      "key": 35,
      "name": "9 ♣️",
      "fifteens": 9,
      "runs": 9,
      "flush": 3,
      "play": "nine of clubs",
      "image": "images/9_of_clubs.svg",
    }, {
      "key": 36,
      "name": "10 ♣️",
      "fifteens": 10,
      "runs": 10,
      "flush": 3,
      "play": "ten of clubs",
      "image": "images/10_of_clubs.svg",
    }, {
      "key": 37,
      "name": "J ♣️",
      "fifteens": 10,
      "runs": 11,
      "flush": 3,
      "play": "jack of clubs",
      "image": "images/jack_of_clubs.svg",
    }, {
      "key": 38,
      "name": "Q ♣️",
      "fifteens": 10,
      "runs": 12,
      "flush": 3,
      "play": "queen of clubs",
      "image": "images/queen_of_clubs.svg",
    }, {
      "key": 39,
      "name": "K ♣️",
      "fifteens": 10,
      "runs": 13,
      "flush": 3,
      "play": "king of clubs",
      "image": "images/king_of_clubs.svg",
    }, {
      "key": 40,
      "name": "A ♦️",
      "fifteens": 1,
      "runs": 1,
      "flush": 4,
      "play": "ace of diamonds",
      "image": "images/ace_of_diamonds.svg",
    }, {
      "key": 41,
      "name": "2 ♦️",
      "fifteens": 2,
      "runs": 2,
      "flush": 4,
      "play": "two of diamonds",
      "image": "images/2_of_diamonds.svg",
    }, {
      "key": 42,
      "name": "3 ♦️",
      "fifteens": 3,
      "runs": 3,
      "flush": 4,
      "play": "three of diamonds",
      "image": "images/3_of_diamonds.svg",
    }, {
      "key": 43,
      "name": "4 ♦️",
      "fifteens": 4,
      "runs": 4,
      "flush": 4,
      "play": "four of diamonds",
      "image": "images/4_of_diamonds.svg",
    }, {
      "key": 44,
      "name": "5 ♦️",
      "fifteens": 5,
      "runs": 5,
      "flush": 4,
      "play": "five of diamonds",
      "image": "images/5_of_diamonds.svg",
    }, {
      "key": 45,
      "name": "6 ♦️",
      "fifteens": 6,
      "runs": 6,
      "flush": 4,
      "play": "six of diamonds",
      "image": "images/6_of_diamonds.svg",
    }, {
      "key": 46,
      "name": "7 ♦️",
      "fifteens": 7,
      "runs": 7,
      "flush": 4,
      "play": "seven of diamonds",
      "image": "images/7_of_diamonds.svg",
    }, {
      "key": 47,
      "name": "8 ♦️",
      "fifteens": 8,
      "runs": 8,
      "flush": 4,
      "play": "eight of diamonds",
      "image": "images/8_of_diamonds.svg",
    }, {
      "key": 48,
      "name": "9 ♦️",
      "fifteens": 9,
      "runs": 9,
      "flush": 4,
      "play": "nine of diamonds",
      "image": "images/9_of_diamonds.svg",
    }, {
      "key": 49,
      "name": "10 ♦️",
      "fifteens": 10,
      "runs": 10,
      "flush": 4,
      "play": "ten of diamonds",
      "image": "images/10_of_diamonds.svg",
    }, {
      "key": 50,
      "name": "J ♦️",
      "fifteens": 10,
      "runs": 11,
      "flush": 4,
      "play": "jack of diamonds",
      "image": "images/jack_of_diamonds.svg",
    }, {
      "key": 51,
      "name": "Q ♦️",
      "fifteens": 10,
      "runs": 12,
      "flush": 4,
      "play": "queen of diamonds",
      "image": "images/queen_of_diamonds.svg",
    }, {
      "key": 52,
      "name": "K ♦️",
      "fifteens": 10,
      "runs": 13,
      "flush": 4,
      "play": "king of diamonds",
      "image": "images/king_of_diamonds.svg",
    }];
  }

  cribbage() { return this.myCribbage; }

  show(cards, check) {

    let elements = [];
    for (let i=0; i<cards.length; i++) {
      elements.push(this.myCribbage[cards[i]]);
    }

    let items = [];
    items.push(this.fifteens(elements));
    items.push(this.runs(elements));
    items.push(this.pairs(elements));
    items.push(this.flush(elements));
    items.push(this.nobs(elements, check));

    return items.flat();
  }

  fifteens(cards) {

    let elements = [
      [ 0, 0, 0, 1, 1 ],
      [ 0, 0, 1, 0, 1 ],
      [ 0, 0, 1, 1, 0 ],
      [ 0, 0, 1, 1, 1 ],
      [ 0, 1, 0, 0, 1 ],
      [ 0, 1, 0, 1, 0 ],
      [ 0, 1, 0, 1, 1 ],
      [ 0, 1, 1, 0, 0 ],
      [ 0, 1, 1, 0, 1 ],
      [ 0, 1, 1, 1, 0 ],
      [ 0, 1, 1, 1, 1 ],
      [ 1, 0, 0, 0, 1 ],
      [ 1, 0, 0, 1, 0 ],
      [ 1, 0, 0, 1, 1 ],
      [ 1, 0, 1, 0, 0 ],
      [ 1, 0, 1, 0, 1 ],
      [ 1, 0, 1, 1, 0 ],
      [ 1, 0, 1, 1, 1 ],
      [ 1, 1, 0, 0, 0 ],
      [ 1, 1, 0, 0, 1 ],
      [ 1, 1, 0, 1, 0 ],
      [ 1, 1, 0, 1, 1 ],
      [ 1, 1, 1, 0, 0 ],
      [ 1, 1, 1, 0, 1 ],
      [ 1, 1, 1, 1, 0 ],
      [ 1, 1, 1, 1, 1 ],
    ];

    let items = [];
    for (let i=0; i<elements.length; i++) {

      let amount = 0;
      let words = [];

      for (let j=0; j<elements[i].length; j++) {
        if (elements[i][j] !== 0) {
          amount += cards[j].fifteens;
          words.push(cards[j].play);
        }
      }

      if (amount === 15) {
        let play = "[Fifteens 2] The ";
        for (let j=0; j<words.length; j++) {
          if (j === words.length - 1) {
            play += " and " + words[j] + ".";
          }
          else {
            play += words[j] + ", ";
          }
        }
        items.push(play);
      }
    }

    return items
  }

  runs(cards) {

    let elements = [
      1,  14, 27, 40,
      2,  15, 28, 41,
      3,  16, 29, 42,
      4,  17, 30, 43,
      5,  18, 31, 44,
      6,  19, 32, 45,
      7,  20, 33, 46,
      8,  21, 34, 47,
      9,  22, 35, 48,
      10, 23, 36, 49,
      11, 24, 37, 50,
      12, 25, 38, 51,
      13, 26, 39, 52,
    ];

    let ordered = [...cards];
    ordered.sort(function (a, b) {
      return elements.indexOf(a.key) - elements.indexOf(b.key);
    });

    function _ordered(ordered, elements, count) {

      let items = [];
      for (let i=0; i<elements.length; i++) {

        let ones = [];
        for (let j=0; j<elements[i].length; j++) {
          if (elements[i][j] !== 0) { ones.push(j); }
        }

        let item = true;
        for (let j=1; j<ones.length; j++) {
          let prev = ones[j-1];
          let next = ones[j];
          if (ordered[prev].runs + 1 !== ordered[next].runs) {
            item = false;
          }
        }

        if (item === true) {
          let play = "[Runs " + count + "] The ";
          for (let j=0; j<ones.length; j++) {
            if (j === ones.length - 1) {
              play += " and " + ordered[ones[j]].play + ".";
            }
            else {
              play += ordered[ones[j]].play + ", ";
            }
          }
          items.push(play);
        }
      }


      return items;
    }

    let items = [];
    let five = [
      [ 1, 1, 1, 1, 1 ],
    ];
    items = _ordered(ordered, five, 5);
    if (items.length !== 0) { return items; }

    let four = [
      [ 0, 1, 1, 1, 1 ],
      [ 1, 0, 1, 1, 1 ],
      [ 1, 1, 0, 1, 1 ],
      [ 1, 1, 1, 0, 1 ],
      [ 1, 1, 1, 1, 0 ],
    ];
    items = _ordered(ordered, four, 4);
    if (items.length !== 0) { return items; }

    let three = [
      [ 0, 0, 1, 1, 1 ],
      [ 0, 1, 0, 1, 1 ],
      [ 0, 1, 1, 0, 1 ],
      [ 0, 1, 1, 1, 0 ],
      [ 1, 0, 0, 1, 1 ],
      [ 1, 0, 1, 0, 1 ],
      [ 1, 0, 1, 1, 0 ],
      [ 1, 1, 0, 0, 1 ],
      [ 1, 1, 0, 1, 0 ],
      [ 1, 1, 1, 0, 0 ],
    ];
    items = _ordered(ordered, three, 3);
    return items;
  }

  pairs(cards) {

    let elements = [
      [ 0, 0, 0, 1, 1 ],
      [ 0, 0, 1, 0, 1 ],
      [ 0, 0, 1, 1, 0 ],
      [ 0, 1, 0, 0, 1 ],
      [ 0, 1, 0, 1, 0 ],
      [ 0, 1, 1, 0, 0 ],
      [ 1, 0, 0, 0, 1 ],
      [ 1, 0, 0, 1, 0 ],
      [ 1, 0, 1, 0, 0 ],
      [ 1, 1, 0, 0, 0 ],
    ];

    let items = [];
    for (let i=0; i<elements.length; i++) {

      let ones = [];
      for (let j=0; j<elements[i].length; j++) {
        if (elements[i][j] !== 0) { ones.push(j); }
      }

      if (cards[ones[0]].runs === cards[ones[1]].runs) {
        let play = "[Pairs 2] The " + cards[ones[0]].play + " and " + cards[ones[1]].play + ".";
        items.push(play);
      }
    }

    return items
  }

  flush(cards) {

    let elements = [
      1,  14, 27, 40,
      2,  15, 28, 41,
      3,  16, 29, 42,
      4,  17, 30, 43,
      5,  18, 31, 44,
      6,  19, 32, 45,
      7,  20, 33, 46,
      8,  21, 34, 47,
      9,  22, 35, 48,
      10, 23, 36, 49,
      11, 24, 37, 50,
      12, 25, 38, 51,
      13, 26, 39, 52,
    ];

    let ordered = [...cards];
    ordered.sort(function (a, b) {
      return elements.indexOf(a.key) - elements.indexOf(b.key);
    });

    let item = true;
    for (let i=1; i<ordered.length; i++) {
      if (ordered[i-1].flush !== ordered[i].flush) {
        item = false;
      }
    }

    let items = [];
    if (item === true) {
      let play = "[Flush 4] The ";
      for (let i=0; i<ordered.length; i++) {
        if (i === ordered.length - 1) {
          play += " and " + ordered[i].play + ".";
        }
        else {
          play += ordered[i].play + ", ";
        }
      }
      items.push(play);
    }

    return items
  }

  nobs(cards, check) {

    let items = [];

    if (check === true) {

      let runs = cards[0].runs;
      let flush = cards[0].flush;

      if (runs === 11) {
        let play = "[Nob 1] The " + cards[0].play + ".";
        items.push(play);
      }
      else {
        for (let i=1; i<cards.length; i++) {
          if (cards[i].runs === 11) {
            if (cards[i].flush === flush) {
              let play = "[Nob] The " + cards[i].play + ".";
              items.push(play);
            }
          }
        }
      }
    }

    return items;
  }
}

class MyMain extends MyApplication {

  constructor(title) {
    super(title);

    this.myCards = 5;
    this.myCheck = false;
    this.myCribbage = new MyCribbage();
  }

  main() {

    this.title();
    let body = this.header("myHeader");
    let main = document.createElement("main");
    body.appendChild(main);

    let container = this.myHTML.div(main, ["myContainer"]);
    for (let i=0; i<this.myCards; i++) {
      let check = i === 0 ? true : false;
      this.card(container, check);
    }

    let results = this.myHTML.div(main, ["myResults"]);

    container.addEventListener("change", (event) => {

      while (results.firstChild) {
        results.removeChild(results.firstChild);
      }

      let elements = [];
      for (let i=0; i<this.myCards; i++) {

        let index = (container
          .children[i]
          .children[0]
          .children[0]
          .selectedIndex);

        if (index === 0) { return }
        for (let j=0; j<elements.length; j++) {
          if (index === elements[j]) { return }
        }

        if (i === 0) {
          let check = (container
            .children[i]
            .children[0]
            .children[2]
            .checked);
          this.myCheck = check;
        }

        elements.push(index);
      }

      let show = this.myCribbage.show(elements, this.myCheck);
      for (let i=0; i<show.length; i++) {
        let div = this.myHTML.div(results, ["myText"]);
        div.innerHTML = show[i];
      }      
    });

    this.style();
  }

  card(container, check) {

    let opt = this.myCribbage.cribbage();

    let div = this.myHTML.div(container, ["myCard"]);

    let one = this.myHTML.div(div);

    let select = this.myHTML.select(one, ["mySelect"], (event) => {
      let index = select.selectedIndex;
      image.src = opt[index].image;
    });
    this.myHTML.options(select, opt, true);

    this.myHTML.button(one, ["myButton"], "🗣️", (event) => {
      let index = select.selectedIndex;
      if (index !== 0) {
        this.mySpeak.talk(opt[index].play);
      }
    });

    if (check === true) {
      this.myHTML.checkbox(one, ["myButton"], false);
    }
    else {
      this.myHTML.hidden(one);
    }

    let two = this.myHTML.div(div, ["myDiv"]);

    let image = this.myHTML.img(two, null, 180, 270, "images/joker.svg");
  }

  style() {

    let style = this.myStyle.add(`.myContainer {
      display: flex;
      flex-direction: row;
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.myCard {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.myCard:first-child {
      padding: 5px 60px 5px 5px;
    }`).add(`.myDiv {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.mySelect {
      font: 20px --main-font, sans-serif;
      margin: 0px 0px 0px 10px;
      padding: 5px;
    }`).add(`.myButton {
      font: 20px --main-font, sans-serif;
      margin: 0px 0px 0px 10px;
      padding: 5px;
    }`).add(`.myResults {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.myText {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).set();

    return style
  }
}
new MyMain("Cribbage").main();
