class Question {

  constructor() {
    this.title = createElement('h1');

    this.input1 = createInput("").attribute("placeholder", "Enter your name");

    this.button = createButton('next question -->');

    this.button1 = createButton('1.love');
    this.button2 = createButton('2.talent');
    this.button3 = createButton('3.secret');
    this.button4 = createButton('4.none of the above');
    this.question = createElement('h3');

    this.message = createElement('h2');
    this.message2 = createElement('h2');
    this.message3 = createElement('h2');
    this.message4 = createElement('h2');
    
    this.o1 = createButton('1.cake');
    this.o2 = createButton('2.car');
    this.o3 = createButton('3.meal');
    this.o4 = createButton('4.coffin');
    this.question2 = createElement("h3");
    this.q2 = createElement("h3");
    this.m1 = createElement("h2");
    this.m2 = createElement("h2");
    this.m3 = createElement("h2");
    this.m4 = createElement("h2");
    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.message2.hide();
  }

  display(){
    this.title.html("Tanishi's Quiz Game");
    this.title.position(350, 0);
    
    this.question.html("Question:- If you have it, you want to share it. If you share it, you don’t have it anymore. What is it? " );
    this.question.position(50, 80);
    
    this.input1.position(50, 230);
    
    this.button.position(290, 300);

    this.button1.position(50, 140);
    this.button2.position(50, 160);
    this.button3.position(50, 180);
    this.button4.position(50, 200);

    this.o3.hide();
    this.o1.hide();
    this.o2.hide();
    this.o4.hide();
   /*
    this.o1.position(50, 140);
    this.o2.position(50, 160);
    this.o3.position(50, 180);
    this.o4.position(50, 200);
*/
    this.button1.mousePressed(()=>{
      var message= `
      sorry ${this.input1.value()}, press ctrl+R and try again` 
      this.message.html(message);
      this.message.position(50, 250);
    });

    this.button2.mousePressed(()=>{
      var message2= `
      sorry ${this.input1.value()}, press ctrl+R and try again` 
      this.message2.html(message1);
      this.message2.position(50, 250);
      // this.message.hide();
      // this.message3.hide();
      // this.message4.hide();
    });

    this.button3.mousePressed(()=>{
      var message3= `
      well done ${this.input1.value()}, you got it right` 
      //fill(red);
      this.message3.html(message3);
      this.message3.position(50, 250);
    });

    this.button4.mousePressed(()=>{
      var message4= `
      sorry ${this.input1.value()}, press ctrl+R and try again` 
      this.message4.html(message4);
      this.message4.position(50, 250);
    });
    
    this.button.mousePressed(()=>{
    this.question2.html("question 2:- The person who made it doesn’t want it, the person who paid for it doesn’t need it, and it,")
    this.question2.position(50, 80);

    this.q2.html("       and the person who needs it doesn’t know it. What is it?");
    this.q2.position(50, 109);

    this.o1.position(50, 160);
    this.o2.position(50, 180);
    this.o3.position(50, 200);
    this.o4.position(50, 220);

    this.question.hide();

    this.input1.hide();

    this.button.hide();

    this.message.hide();
    this.message4.hide();
    this.message3.hide();
    this.message2.hide();

    this.o3.show();
    this.o1.show();
    this.o2.show();
    this.o4.show();

    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    });

    this.o1.mousePressed(()=>{
      var m1= `
      oooppss....wrong answer dear ${this.input1.value()}`
      //fill(red);
      this.m1.html(m1);
      this.m1.position(50, 250);
    });

    this.o2.mousePressed(()=>{
      var m2= `
      oooppss....wrong answer dear ${this.input1.value()}`
      //fill(red);
      this.m2.html(m2);
      this.m2.position(50, 250);
    });

    this.o3.mousePressed(()=>{
      var m3= `
      oooppss....wrong answer dear ${this.input1.value()}`
      //fill(red);
      this.m3.html(m3);
      this.m3.position(50, 250);
    });

    this.o4.mousePressed(()=>{
      var m4= `
      well done  ${this.input1.value()}, you got it right, thankyou for playing`
      //fill(red);
      this.m4.html(m4);
      this.m4.position(50, 250);
    });
  }
}
