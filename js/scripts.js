//Backend
var fighting = false;

function Area(location1, commands)
{
  this.location1 = location1;
  this.commands = commands;
}

function Game(){
  this.opponent = 0;
  this.players = [];
  this.names = ["Brotimus", "SkateBro", "VapeBro", "ChestBro", "SquatBro", "ZombieBro", "DragonBro", "Mortus", "BroHobbit Bobby"];
}

function Player(name, type){
  this.playerName = name;
  this.hp = 0;
  this.currentHP = 0;
  this.attackMin = 0;
  this.attackMax = 0;
  this.playerType = type;
}

Game.prototype.attack = function(opponent){
  this.players[opponent].currentHP -= (Math.floor(Math.random() * (this.players[0].attackMax - this.players[0].attackMin + 1)) + this.players[0].attackMin);
  this.players[0].currentHP -= (Math.floor(Math.random() * (this.players[opponent].attackMax - this.players[opponent].attackMin + 1)) + this.players[opponent].attackMin);
}

Game.prototype.setUpAllPlayers = function(){
  for (var i = 0; i < this.names.length; i++) {
    var myPlayer = new Player(this.names[i],i);
    myPlayer.settingPlayer();
    this.players.push(myPlayer);
  }
}

Player.prototype.addStrengthPoint = function(){
  this.attackMin++;
  this.attackMax++;
}

Player.prototype.lostHp = function(damage){
  this.currentHP -=damage;
}

Player.prototype.settingPlayer = function(){
  if(this.playerType === 0){
    this.hp = 100;
    this.currentHP = 100;
    this.attackMin = 8;
    this.attackMax = 12;
  }else if(this.playerType === 1 || this.playerType ===  2){
    this.hp = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
    this.currentHP = this.hp;
    this.attackMin = 3;
    this.attackMax = 5;
  }else if(this.playerType === 3 || this.playerType ===  4){
    this.hp = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    this.currentHP = this.hp;
    this.attackMin = 5;
    this.attackMax = 10;
  }else if(this.playerType === 5 || this.playerType ===  6){
    this.hp = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    this.currentHP = this.hp;
    this.attackMin = 13;
    this.attackMax = 18;
  }else if(this.playerType === 7){
    this.hp = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
    this.currentHP = this.hp;
    this.attackMin = 16;
    this.attackMax = 23;
  }else{ // type 8
    this.hp = Math.floor(Math.random() * (105 - 95 + 1)) + 95;
    this.currentHP = this.hp;
    this.attackMin = 18;
    this.attackMax = 25;
  }
}

var theGame = new Game();
theGame.setUpAllPlayers();

//start of front end
var battle = function(){
  theGame.attack(theGame.opponent);
  if(theGame.players[theGame.opponent].currentHP <= 0){ //Success
    $("#attack-button").off("click",battle);
    $("#output").append("<br>" +  "You beat " + theGame.names[theGame.opponent] + "." + "<br>");
    $(this).hide();
    $("#input").show();
    $("#opponent-heart").hide();
    $("#current").text("The Barracks");
    $("#enemyhealth").text("");
    $("#main-button").show();
    theGame.players[0].currentHP = theGame.players[0].hp;
    $("#health").text(theGame.players[0].currentHP);
    $("#output").empty();
    if(theGame.opponent == 1)
    {
      $("#output").append("SkateBro yells: No! Everybody always hatin' on the skater.");
      $("#output").append("<br>" + "A strange small man approaches you."+ "<br>");
      $("#output").append("<br>" + "Small man: You may have won your first battle. But you are still weak and stupid."+ "<br>");
      currentlocation = "bobby";
    }
    if(theGame.opponent == 2)
    {
      $("#output").append("<br>" + "VapeBro yells: No! Can't a bro Vape in peace? Seriously."+ "<br>");
      $("#output").append("<br>" + "A strange small man approaches you."+ "<br>");
      $("#output").append("<br>" + "Small man: You may have won your first battle. But you are still weak and stupid."+ "<br>");
      currentlocation = "bobby";
    }
    if(theGame.opponent == 3)
    {
      $("#output").append("ChestBro: Need... more... gains...");
      $("#output").append("<br>" + "He collapses on the floor."+ "<br>");
      $("#output").append("<br>" + "You walk back to the barracks, elated with the rush of victory."+ "<br>");
      currentlocation = "barracks3";
    }
    if(theGame.opponent == 4)
    {
      $("#output").append("SquatBro: Legs... too... small...");
      $("#output").append("<br>" + "He collapses on the floor."+ "<br>");
      $("#output").append("<br>" + "You walk back to the barracks, elated with the rush of victory."+ "<br>");
      currentlocation = "barracks3";
    }
    if(theGame.opponent == 5)
    {
      $("#output").append("ZombieBro: Moaaan. Must eat brainz... Must be bro... Must keep fighting...");
      $("#output").append("<br>" + "He dies for the second time."+ "<br>");
      $("#output").append("<br>" + "<img src='img/zombiekill.gif'>" + "<br>");
      $("#output").append("<br>" + "You walk back to the barracks, a bit creeped out about Zombiebro."+ "<br>");
      currentlocation = "barracks4";
    }
    if(theGame.opponent == 6)
    {
      $("#output").append("DragonBro: RAR! NOT COOL. DRAGONBRO WILL RETURN!");
      $("#output").append("<br>" + "He collapses on the floor in a burst of flame."+ "<br>");
      $("#output").append("<br>" + "<img src='img/dragonslay.gif'>" + "<br>");
      $("#output").append("<br>" + "You walk back to the barracks, elated with the rush of victory."+ "<br>");
      currentlocation = "barracks4";
    }
    if(theGame.opponent == 7)
    {
      $("#output").append("The turtle summoner falls to the ground, defeated.");
      $("#output").append("<br>" + "Mortus looks at me with desperate eyes."+ "<br>");
      $("#output").append("<br>" + "Mortus: Finish me off. I lost, I don't deserve to be here."+ "<br>");
      currentlocation = "epicMoment";
    }
    if(theGame.opponent == 8)
    {
      $("#output").append("You seriously wound Bobby. He is bleeding everywhere.");
      $("#output").append("<br>" + "Bobby: Scrub! Guess I'll just have to shoot you."+ "<br>");
      $("#output").append("<br>" + "Bobby pulls an AK-47 out of his back pocket."+ "<br>");
      $("#output").append("<br>" + "Darnit! Where did he get that?"+ "<br>");
      $("#output").append("<br>" + "What do you say?"+ "<br>");
      theGame.players[theGame.opponent].currentHP =theGame.players[theGame.opponent].hp;
      currentlocation = "last";
    }
    return;
  }
  else if(theGame.players[0].currentHP <= 0){ //Failure
    $("#output").empty();
    $("#attack-button").off("click",battle);
    $("#output").append("<br>" + theGame.names[theGame.opponent] + " beat you." + "<br>");
    $(this).hide();
    $("#main-button").show();
    $("#input").show();
    theGame.players[theGame.opponent].currentHP = theGame.players[theGame.opponent].hp;
    theGame.players[0].currentHP = theGame.players[0].hp;
    $("#health").text(theGame.players[0].currentHP);
    $("#opponent-heart").hide();
    $("#current").text("The Barracks");
    $("#enemyhealth").text("");
    $("#output").append("<br>" + "You return to the barracks, head lowered in shame." + "<br>");
    $("#output").append("<br>" + "A thought suddenly hits you: Do you even lift?" + "<br>");
    $("#output").append("<br>" + "Your resilience makes you stronger. You gained 1 strength point!" + "<br>");
    theGame.players[0].addStrengthPoint();
    $("#strength").text(theGame.players[0].attackMax);
    if(theGame.opponent == 1 || theGame.opponent == 2)
    {
      currentlocation = "barracks";
    }
    else if(theGame.opponent == 3 || theGame.opponent == 4)
    {
      currentlocation = "barracks2";
    }
    else if(theGame.opponent == 5 || theGame.opponent == 6)
    {
      currentlocation = "barracks3";
    }
    else if(theGame.opponent == 7)
    {
      currentlocation = "barracks4";
    }
    else
    {
      currentlocation = "barracks5";
    }
    return;
  }
  $("#output").append("<br>" + "You attacked: " + theGame.names[theGame.opponent] + " Your Health: " + theGame.players[0].currentHP + " Enemy Health: " + theGame.players[theGame.opponent].currentHP)
  $("#health").text(theGame.players[0].currentHP);
  $("#enemyhealth").text(theGame.players[theGame.opponent].currentHP);
}

var battlePrep = function(){
  $("#attack-button").show();
  $("#main-button").hide();
  $("#input").hide();
  $("#output").append("<br>" + "You just chose to fight " + theGame.names[theGame.opponent] + "." + "<br>");
  $("#health").text(theGame.players[0].currentHP);
  $("#opponent-heart").show();
  $("#enemyhealth").text(theGame.players[theGame.opponent].currentHP);
  $("#current").text(theGame.names[theGame.opponent] + "'s Health: ");
  $("#attack-button").on("click",battle);
}
  var currentlocation = "menu";
$(document).ready(function() {
  $("#health").text(theGame.players[0].currentHP);
  $("#strength").text(theGame.players[0].attackMax);
  $("#current").text("BroTopia");

  var punchCounter = 0;
  var stewCounter = 0;
  var turtleCounter = 0;
  var squatcounter = false;
  var redbull = false;
  var armwrestle = false;
  var braincounter = false;
  var proteincounter = false;
  var skatecounter = false;
  var pulledback = false;
  var saveMortus = false;
  var counter = 0;
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val().toLowerCase().trim();
    $("form")[0].reset();

    if(fighting == false)
    {
      counter += 1;
    }
    if(counter > 1)
    {
      $("#output").empty();
      counter = 0;
    }

    var start = new Area("menu",["start"]);
    var entrance = new Area("entrance",["enter","look"]);

    var mortus = new Area("mortus",["talk","look","attack"]);
    var mortus2 = new Area("mortus2",["yes", "no", "party"]);
    var mortus3 = new Area("mortus3",["follow"]);

    var bobby = new Area("bobby",["talk","look","attack"]);
    var bobby2 = new Area("bobby2",["sorry", "shut up"]);

    var fight1 = new Area("fight1",[]);
    var fight2 = new Area("fight2",[]);
    var fight3 = new Area("fight3",[]);
    var fight4 = new Area("fight4",[]);
    var fight5 = new Area("fight5",[]);
    var moment = new Area("epicMoment",["Save", "Kill"]);
    var last = new Area("last",[]);
    var win = new Area("win",[]);
    var lose = new Area("lose",[]);

    var gym = new Area("gym",["look", "talk Mortus"," walk cafeteria", "walk barracks", "squat"]);
    var cafeteria = new Area("cafe",["look","talk VapeBro","punch VapeBro","walk barracks", "walk gym"]);
    var barracks = new Area("barracks",["look","talk ChestBro","enter arena", "walk cafeteria", "walk gym"]);

    var gym2 = new Area("gym2",["look", "talk bobby"," walk cafeteria", "walk barracks", "squat"]);
    var cafeteria2 = new Area("cafe2",["look","talk Mortus","eat stew","walk barracks", "walk gym"]);
    var barracks2 = new Area("barracks2",["look", "walk cafeteria", "walk gym", "enter arena"]);

    var gym3 = new Area("gym3",["look", "squat", " walk cafeteria", "squat", "walk barracks", "squat"]);
    var cafeteria3 = new Area("cafe3",["look","talk bobby","armwrestle","walk barracks", "walk gym"]);
    var barracks3 = new Area("barracks3",["look", "talk mortus", "walk gym","walk cafeteria", "enter arena"]);

    var gym4 = new Area("gym4",["look", "calf raises", "walk cafeteria", "walk barracks"]);
    var cafeteria4 = new Area("cafe4",["look","talk ZombieBro", "walk barracks", "walk gym","eat brains"]);
    var barracks4 = new Area("barracks4",["look", "talk mortus", "walk gym","walk cafeteria", "enter arena"]);

    var gym5 = new Area("gym5",["look", "walk cafeteria", "walk barracks"]);
    var cafeteria5 = new Area("cafe5",["look","talk SkateBro", "walk barracks", "walk gym"]);
    var barracks5 = new Area("barracks5",["look", "talk Chestbro", "walk gym","walk cafeteria", "enter arena"]);

    if(currentlocation === "menu")
    {
      if(userInput === "start")
      {
        userInput = "";
        currentlocation = entrance.location1;
        $("#output").append("<br>" + "You're at the entrance to the Arena. (Type list to look at all possible actions)" + "<br>");

      }
      else if(userInput === "beastmode")
      {
        userInput = "";
        currentlocation = entrance.location1;
        $("#output").append("<br>" + "Cheat Code unlocked!" + "<br>");
        $("#output").append("<br>" + "You just went BEASTMODE!" + "<br>");
        $("#output").append("<br>" + "You just got 20 strength points!" + "<br>");
        $("#output").append("<br>" + "<img src='img/beastmode.gif'>" + "<br>");
        for(var i = 0; i < 20; i++)
        {
          theGame.players[0].addStrengthPoint();
        }
        $("#strength").text(theGame.players[0].attackMax);
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < start.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(start.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === entrance.location1)
    {
      if(userInput === "enter")
      {
        userInput = "";
        currentlocation = mortus.location1;
        $("#output").append("<br>" + "You enter the Arena and see a chill looking dude in a robe." + "<br>");
        $("#current").text("The Arena");
      }
      else if(userInput === "look")
      {
        $("#output").append("<br>" + "The arena is a grand marble structure. There are a bunch of Miller lite cans littered on the ground." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < entrance.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(entrance.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === mortus.location1)
    {
      if(userInput === "talk")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Hey, is this the BroArena?"+ "<br>");
        $("#output").append("<br>" + "Strange Dude: Yeah man, this is it! You come to fight?"+ "<br>");
        currentlocation = mortus2.location1;
      }
      else if(userInput === "attack")
      {
        $("#output").append("<br>" + "You swing a fist at the stranger, but he dodges and summons a giant snapping turtle. The turtle bites your head off." + "<br>");
        $("#output").append("<br>" + "You die horribly in a pool of your own blood. Whoops." + "<br>");
        $("#output").append("<br>" + "<img src='img/snapturtle.gif'>" + "<br>");
        $("#output").append("<br>" + "You also lost your head. Which kind of sucks too." + "<br>");
        $("#output").append("<br>" + "Type start to reset game." + "<br>");
        currentlocation = "menu";
      }
      else if(userInput === "look")
      {
        $("#output").append("<br>" + "Like I said, he's just a chill dude in a robe. Probably a magaician of some sort." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < mortus.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === mortus2.location1)
    {
      if(userInput === "yes")
      {
        userInput = "";
        currentlocation = mortus3.location1;
        $("#output").append("<br>" + "Me: Of course I came to fight."+ "<br>");
        $("#output").append("<br>" + "Mortus: Awesome. I'm pumped to throw it down. The name is Mortus. I'm a turtle summoner."+ "<br>");
        $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");
        $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");
      }
      else if(userInput === "party")
      {
        userInput = "";
        currentlocation = mortus3.location1;
        $("#output").append("<br>" + "I just came to party." + "<br>");
        $("#output").append("<br>" + "Strange Figure: Haha, nice. Me too bro. Every fight is a party! The name is Mortus. I'm a turtle summoner." + "<br>");
        $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");
        $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");
      }
      else if(userInput === "no")
      {
        userInput = "";
        currentlocation = mortus3.location1;
        $("#output").append("<br>" + "Me: What? Fight? I'm a lover, not a fighter."+ "<br>");
        $("#output").append("<br>" + "Strange Figure: Seriously?"+ "<br>");
        $("#output").append("<br>" + "Me: But I'm also a fighter, so don't get any bright ideas."+ "<br>");
        $("#output").append("<br>" + "Strange Figure: Haha. Pretty funny, kid. My name is Mortus. I'm a turtle summoner." + "<br>");
        $("#output").append("<br>" + "I'm Brotimus. Nice to meet you." + "<br>");
        $("#output").append("<br>" + "Mortus: Follow me, I'll show you around." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < mortus2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus2.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === mortus3.location1)
    {
      if(userInput === "follow")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You follow Mortus. He leads you to the Gym." + "<br>");
        $("#output").append("<br>" + "Mortus: Every bro needs a good gym. Here, you can hang out and lift." + "<br>");
        $("#output").append("<br>" + "Me: Sweet! I'm always looking for a killer leg day." + "<br>");
        $("#output").append("<br>" + "Mortus: Yeah man, it's pretty cool. I'm going to hang out here, you should also check out the Cafeteria and the Barracks. From the Barracks, you can enter your first fight!" + "<br>");
        $("#output").append("<br>" + "Me: For sure! I will become King Bro!" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < mortus3.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(mortus3.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === gym.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "There are a ton of weights, and some big guys lifting. Mortus is chilling next to a water fountain. A squat rack stands out to me. Might have to hit that." + "<br>");
      }
      else if(userInput === "squat")
      {
        userInput = "";
        if(squatcounter == false)
        {
          $("#output").append("<br>" + "You rack up 265 pounds on the rack. Mortus spots you and you rep out three sets of ten." + "<br>");
          $("#output").append("<br>" + "Your quads are burning, but you just gained one strength point!" + "<br>");
          squatcounter = true;
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
        }
        else
        {
          $("#output").append("<br>" + "Your legs are too tired to squat again... Bummer..." + "<br>");
        }
      }
      else if(userInput === "talk mortus")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Sah dude" + "<br>");
        $("#output").append("<br>" + "Mortus: Ha asah dude" + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < gym.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === cafeteria.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "It's a standard grungy cafeteria. Food looks pretty gross, a bunch of empty protein shakers are scattered on nearby tables. There is a VapeBro in the corner, smoking his vape. He looks somewhat hostile." + "<br>");
      }
      else if(userInput === "talk vapebro")
      {
        $("#output").append("<br>" + "Me: Sup." + "<br>");
        $("#output").append("<br>" + "VapeBro: Off my grill. I'm trying to vape, bro." + "<br>");
        $("#output").append("<br>" + "Me: Sheesh. Chill out." + "<br>");
        $("#output").append("<br>" + "VapeBro: Get outta here." + "<br>");
      }
      else if(userInput === "punch vapebro")
      {
        if(punchCounter<2){
          theGame.players[0].lostHp(5);
          $("#health").text(theGame.players[0].currentHP);
          $("#output").append("<br>" + "Me: You try to punch VapeBro in the nose." + "<br>");
          $("#output").append("<br>" + "VapeBro blocks your punch with his vape. He blows vape on you." + "<br>");
          $("#output").append("<br>" + "His vape lowers your health by five points. Ouch!" + "<br>");
          punchCounter++;
        }else {
          $("#output").append("<br>" + "Really? Are you trying to get lung cancer?" + "<br>");
        }
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < cafeteria.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === barracks.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "You're in a military style bed room. ChestBro is knocking out some pushups. You can see where you could enter into the Arena." + "<br>");
      }
      else if(userInput === "talk chestbro")
      {
        $("#output").append("<br>" + "Me: Yo, what's up?" + "<br>");
        $("#output").append("<br>" + "ChestBro: Need more gains." + "<br>");
        $("#output").append("<br>" + "Me: I feel you." + "<br>");
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "enter arena")
      {
        userInput = "";
        currentlocation = fight1.location1;
        $("#current").text("Gladiator Pit");
        $("#output").append("<br>" + "You enter the arena." + "<br>");
        $("#output").append("<br>" + "The wind is crisp. You're a bit nervous, but this is your destiny. You must become King Bro." + "<br>");
        $("#output").append("<br>" + "Do you want to fight SkateBro, or VapeBro?" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < barracks.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === fight1.location1)
    {
      if(userInput === "skatebro")
      {
        userInput = "";
        theGame.opponent = 1;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "vapebro")
      {
        userInput = "";
        theGame.opponent = 2;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your commands are obviously either SkateBro or VapeBro. Seriously.");
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === bobby.location1)
    {
      console.log(currentlocation);
      if(userInput === "talk")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "Me: Who are you? What's your beef?"+ "<br>");
        $("#output").append("<br>" + "Small Man: Fool! I am Brohobbit Bobby! I am King Bro! How dare you!");
        currentlocation = bobby2.location1;
      }
      else if(userInput === "attack")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "You swing a fist at the Bobby, but he dodges and knees you in the throat." + "<br>");
        $("#output").append("<br>" + "You fall down, stunned." + "<br>");
        $("#output").append("<br>" + "You just lost 80 health points." + "<br>");
        $("#output").append("<br>" + "Bobby walks to the gym, leaving you on the floor." + "<br>");
        $("#output").append("<br>" + "<img src='img/knee.gif'>" + "<br>");
        theGame.players[0].lostHp(80);
        $("#health").text(theGame.players[0].currentHP);
        currentlocation = barracks2.location1;
        $("#current").text("The Barracks");
      }
      else if(userInput === "look")
      {
        fighting = false;
        $("#output").append("<br>" + "He is a small, muscular man with a permanent scowl. He appears to be some breed of evil Hobbit." + "<br>");
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < bobby.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(bobby.commands[i]);
        }
      }
      else if(userInput === "");
      else
      {
        fighting = false;
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    if(currentlocation === bobby2.location1)
    {
      if(userInput === "sorry")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Oh, sorry. Didn't mean anything."+ "<br>");
        $("#output").append("<br>" + "Bobby: Chump. You won't last." + "<br>");
        $("#output").append("<br>" + "Bobby walks to the gym." + "<br>");
        currentlocation = barracks2.location1;
        $("#current").text("The Barracks");
      }
      else if(userInput === "shut up")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Shut up, short stuff." + "<br>");
        $("#output").append("<br>" + "Bobby smacks you across the face" + "<br>");
        $("#output").append("<br>" + "<img src='img/slap.gif'>" + "<br>");
        $("#output").append("<br>" + "You just lost 20 health points." + "<br>");
        $("#output").append("<br>" + "Bobby walks to the gym. Your face stings." + "<br>");
        theGame.players[0].lostHp(20);
        $("#health").text(theGame.players[0].currentHP);
        currentlocation = barracks2.location1;
        $("#current").text("The Barracks");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < bobby2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(bobby2.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === cafeteria2.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "I'm at the cafeteria. Mortus is drinking a RedBull. Mystery stew is served for lunch. Yuck." + "<br>");
      }
      else if(userInput === "talk mortus")
      {
        if(redbull == false)
        {
          $("#output").append("<br>" + "Me: Hey Mortus!" + "<br>");
          $("#output").append("<br>" + "Mortus: Hey! Congrats on the win!" + "<br>");
          $("#output").append("<br>" + "Me: For sure! I'm coming for you!" + "<br>");
          $("#output").append("<br>" + "Mortus: Bring it, kid! I have a turtle with your name on it...." + "<br>");
          $("#output").append("<br>" + "Mortus throws you a Red Bull" + "<br>");
          $("#output").append("<br>" + "Mortus: Drink up! You need to keep up the energy." + "<br>");
          $("#output").append("<br>" + "You drink the Red Bull and get 1 strength point!" + "<br>");
          $("#output").append("<br>" + "<img src='img/redbull.gif'>" + "<br>");
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
          redbull = true;
        }
        else
        {
          $("#output").append("<br>" + "Mortus: Red Bull gives you wiings.");
          $("#output").append("<br>" + "Your stomach feels a bit off.");
          $("#output").append("<br>" + "Me: And some bad gas.");
        }
      }
      else if(userInput === "eat stew")
      {
        if(stewCounter<2){
          $("#output").append("<br>" + "You take a mouthful of stew and vomit everywhere. The floor is now coated in a thin layer of vomit." + "<br>");
          $("#output").append("<br>" + "You lose five health points." + "<br>");
          theGame.players[0].lostHp(5);
          $("#health").text(theGame.players[0].currentHP);
          stewCounter++;
        }else{
          $("#output").append("<br>" + "Are you really that hungry? Death by soup is a sad way to go." + "<br>");
        }
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym2.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks2.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < cafeteria2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria2.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === gym2.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "I'm in the gym again. Brohobbit Bobby is doing bicep curls with a scowl on his face. He looks like one mean hobbit." + "<br>");
      }
      else if(userInput === "squat")
      {
        $("#output").append("<br>" + "You approach the squat rack." + "<br>");
        $("#output").append("<br>" + "Bobby: Hey! Get away from my squat rack. Scrub!" + "<br>");
        $("#output").append("<br>" + "You quietly back down." + "<br>");
      }
      else if(userInput === "talk bobby")
      {
        userInput = "";
        $("#output").append("<br>" + "Me: Sup?" + "<br>");
        $("#output").append("<br>" + "Bobby: Go away." + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria2.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria." + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks2.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < gym2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym2.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === barracks2.location1)
    {
      if(userInput === "look")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "The room is empty, filled with a strange silence." + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        fighting = false;
        userInput = "";
        currentlocation = cafeteria2.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria." + "<br>");
      }
      else if(userInput === "walk gym")
      {
        fighting = false;
        userInput = "";
        currentlocation = gym2.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym." + "<br>");
      }
      else if(userInput === "enter arena")
      {
        fighting = false;
        userInput = "";
        currentlocation = fight2.location1;
        $("#current").text("Gladiator Pit");
        $("#output").append("<br>" + "You enter the arena." + "<br>");
        $("#output").append("<br>" + "The sky is dark. You wonder if this fight is going to be more challenging." + "<br>");
        $("#output").append("<br>" + "Do you want to fight ChestBro, or SquatBro?" + "<br>");
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < barracks2.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks2.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === fight2.location1)
    {
      if(userInput === "chestbro")
      {
        userInput = "";
        theGame.opponent = 3;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "squatbro")
      {
        userInput = "";
        theGame.opponent = 4;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "run")
      {
        $("#output").append("<br>" + "I'm not going to run! I'm going to be the next King Bro!");
      }
      else if(userInput === "run away")
      {
        $("#output").append("<br>" + "I'm not going to run away! I'm going to be the next King Bro!");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your commands are obviously either Squatbro or ChestBro. I guess you could try running away.");
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === cafeteria3.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "You're at the cafeteria. Bobby is eating a giant pizza, all by himself." + "<br>");
      }
      else if(userInput === "armwrestle")
      {
        if(armwrestle == false)
        {
          $("#output").append("<br>" + "Bobby: Come here chump, let's armwrestle." + "<br>");
          $("#output").append("<br>" + "You armwrestle bobby." + "<br>");
          $("#output").append("<br>" + "Bobby slams your fist to the table. A jolt of pain arcs up your wrist." + "<br>");
          $("#output").append("<br>" + "Bobby: Weakling." + "<br>");
          $("#output").append("<br>" + "You lost, but you feel stronger." + "<br>");
          $("#output").append("<br>" + "You gain one strength point." + "<br>");
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
          armwrestle = true;
        }
        else
        {
          $("#output").append("<br>" + "Your wrist and pride are broken.")
        }
      }
      else if(userInput === "talk bobby")
      {
        $("#output").append("<br>" + "Me: Sup!" + "<br>");
        $("#output").append("<br>" + "Bobby: Go away!" + "<br>");
        $("#output").append("<br>" + "Me: Can I have some pizza?" + "<br>");
        $("#output").append("<br>" + "Bobby: No" + "<br>");
        $("#output").append("<br>" + "Me: Please?" + "<br>");
        $("#output").append("<br>" + "Bobby: No" + "<br>");
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym3.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks3.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < cafeteria3.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria3.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === gym3.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "Chestbro is doing benchpress. Curlbro looks focused on his curls. All is normal at the gym. The squat rack beckons." + "<br>");
      }
      else if(userInput === "squat")
      {
        if(pulledback === false)
        {
          userInput = "";
          pulledback = true;
          $("#output").append("<br>" + "You rack up 350 pounds." + "<br>");
          $("#output").append("<br>" + "As you go for a new personal best, you feel a twinge in your back." + "<br>");
          $("#output").append("<br>" + "Ouch! You just pulled a muscle. You lost 10 health points." + "<br>");
          $("#output").append("<br>" + "<img src='img/squatfail.gif'>" + "<br>");
          theGame.players[0].lostHp(10);
          $("#health").text(theGame.players[0].currentHP);
        }
        else
        {
          $("#output").append("<br>" + "You don't want to pull another muscle!" + "<br>");
        }
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria3.location1;
        $("current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks3.location1;
        $("#current").text("The Barracks");
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < gym3.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym3.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === barracks3.location1)
    {
      if(userInput === "look")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "Mortus is quietly reading a book on his bed. The title of the Book is: Warscapia." + "<br>");
      }
      else if(userInput === "talk mortus")
      {
        fighting = false;
        $("#output").append("<br>" + "Me: Sup" + "<br>");
        $("#output").append("<br>" + "Mortus: Hey" + "<br>");
        $("#output").append("<br>" + "Me: That book, Warscapia, is it good?" + "<br>");
        $("#output").append("<br>" + "Mortus: It's amazing" + "<br>");
        $("#output").append("<br>" + "Me: What's it about?" + "<br>");
        $("#output").append("<br>" + "Mortus: Oh, it's just some teen fantasy stuff." + "<br>");
      }
      else if(userInput === "walk gym")
      {
        fighting = false;
        userInput = "";
        currentlocation = gym3.location1;
        $("#current").text("The Gym");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        fighting = false;
        userInput = "";
        currentlocation = cafeteria3.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "enter arena")
      {
        fighting = false;
        userInput = "";
        currentlocation = fight3.location1;
        $("#current").text("Gladiator Pit");
        $("#output").append("<br>" + "You enter the arena" + "<br>");
        $("#output").append("<br>" + "In one corner is a bro that appears to be primarily zombie. He has blue skin and is bleeding out of multiple wounds." + "<br>");
        $("#output").append("<br>" + "In the other corner is a DragonBro, a half bro, half-dragon creature that lives only to be more Bro." + "<br>");
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < barracks3.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks3.commands[i]);
        }
      }
      else if(userInput === "");
      else
      {
        fighting = false;
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    if(currentlocation === fight3.location1)
    {
      if(userInput === "zombiebro")
      {
        userInput = "";
        theGame.opponent = 5;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "dragonbro")
      {
        userInput = "";
        theGame.opponent = 6;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "run")
      {
        $("#output").append("<br>" + "I'm not going to run! I'm going to be the next King Bro!" + "<br>");
      }
      else if(userInput === "dance")
      {
        $("#output").append("<br>" + "You try to dance and fail horribly. People laugh at you. :( " + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your commands are obviously either ZombieBro or DragonBro. I guess you could try dancing." + "<br>");
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === barracks4.location1)
    {
      if(userInput === "look")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "Mortus is smiling at a small box turtle that is crawling around the barracks floor. He must have summoned it." + "<br>");
      }
      else if(userInput === "talk mortus")
      {
        fighting = false;
        $("#output").append("<br>" + "Me: Sup" + "<br>");
        $("#output").append("<br>" + "Mortus: I suppose this is it." + "<br>");
        $("#output").append("<br>" + "Me: Wait, what?" + "<br>");
        $("#output").append("<br>" + "Mortus: We are fighting next..." + "<br>");
        $("#output").append("<br>" + "Me: Seriously?" + "<br>");
        $("#output").append("<br>" + "Mortus: It is the way of the Arena." + "<br>");
      }
      else if(userInput === "walk gym")
      {
        fighting = false;
        userInput = "";
        currentlocation = gym4.location1;
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
        $("#current").text("The Gym");
      }
      else if(userInput === "walk cafeteria")
      {
        fighting = false;
        userInput = "";
        currentlocation = cafeteria4.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "enter arena")
      {
        fighting = false;
        userInput = "";
        currentlocation = fight4.location1;
        $("#current").text("Gladiator Pit");
        $("#output").append("<br>" + "You enter the arena" + "<br>");
        $("#output").append("<br>" + "Mortus is staring at me, holding a flaming turtle in his hands." + "<br>");
        $("#output").append("<br>" + "Mortus: Goodbye, old friend." + "<br>");
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < barracks4.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks4.commands[i]);
        }
      }
      else if(userInput === "");
      else
      {
        fighting = false;
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    if(currentlocation === gym4.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "The gym is empty, except for bobby, who is at the smith machine. Pfft, who uses the smith machine..." + "<br>");
      }
      else if(userInput === "calf raises")
      {
        userInput = "";
        $("#output").append("<br>" + "You do some low-key calf raises." + "<br>");
        $("#output").append("<br>" + "You realize that calf raises are pointless." + "<br>");
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria4.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks4.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
        $("#current").text("The Barracks");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < gym4.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym4.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === cafeteria4.location1)
    {
      if(userInput === "look")
      {
        $("#output").append("<br>" + "You're at the cafeteria. ZombieBro is chowing down on some brains. He looks pretty happy." + "<br>");
      }
      else if(userInput === "talk zombiebro")
      {
        $("#output").append("<br>" + "ZombieBro: Braaaaaaains..."  + "<br>");
        $("#output").append("<br>" + "<img src='img/talkZombie.gif'>" + "<br>");
      }
      else if(userInput === "eat brains")
      {
        if(braincounter === false)
        {
          $("#output").append("<br>" + "You take a bite of brain." + "<br>");
          $("#output").append("<br>" + "Tastes like chicken. But spongy." + "<br>");
          $("#output").append("<br>" + "You are now nourished! You gain one strength point!" + "<br>");

          braincounter = true;
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
        }
        else
        {
          $("#output").append("<br>" + "You've already eaten enough brain'." + "<br>");
        }
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym4.location1;
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
        $("#current").text("The Gym");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks4.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
        $("#current").text("The Barracks");

      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < cafeteria4.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria4.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === fight4.location1)
    {
      if(userInput === "mortus")
      {
        character = userInput;
        userInput = "";
        theGame.opponent = 7;
        fighting = true;
        battlePrep(character);
      }
      else if(userInput === "fight")
      {
        character = userInput;
        userInput = "";
        theGame.opponent = 7;
        fighting = true;
        battlePrep(character);
      }
      else if(userInput === "fight mortus")
      {
        character = userInput;
        userInput = "";
        theGame.opponent = 7;
        fighting = true;
        battlePrep(character);
      }
      else if(userInput === "run")
      {
        $("#output").append("<br>" + "Even against mortus, you won't run." + "<br>");
      }
      else if(userInput === "dance")
      {
        $("#output").append("<br>" + "You're not in the mood." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "You have to fight Mortus. No other options, sadly." + "<br>");
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === moment.location1)
    {
      if(userInput === "talk")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "Me: What, are you serious?"+ "<br>");
          $("#output").append("<br>" + "Mortus: It is the way of the Arena...");
      }
      else if(userInput === "kill" || userInput === "finish him")
      {
        fighting = false;
        userInput = "";
        $("#output").append("<br>" + "You move in to finish off Mortus, but he disappears in a puff of smoke." + "<br>");
        $("#output").append("<br>" + "Was that the right thing to do?" + "<br>");
        $("#output").append("<br>" + "You exit the arena, head filled with conflicting thoughts." + "<br>");
        currentlocation = barracks5.location1;
      }
      else if(userInput === "save")
      {
        fighting = false;
        saveMortus = true;
        userInput = "";
        $("#output").append("<br>" + "Me: No way! I'm not going to kill you." + "<br>");
        $("#output").append("<br>" + "Mortus smiles. He winks at me and disappears in a puff of smoke." + "<br>");
        $("#output").append("<br>" + "You walk back to the barracks. You wonder if Mortus was just testing you..." + "<br>");
        currentlocation = barracks5.location1;
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < moment.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(moment.commands[i]);
        }
      }
      else if(userInput === "");
      else
      {
        fighting = false;
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    if(currentlocation === barracks5.location1)
    {
      if(userInput === "look")
      {
        fighting = false;
        $("#output").append("<br>" + "You're in the barracks. ChestBro is making a protein shake." + "<br>");
      }
      else if(userInput === "talk chestbro")
      {
        fighting = false;
        if(proteincounter === false)
        {
          $("#output").append("<br>" + "ChestBro: Yo, I think you can take out Bobby." + "<br>");
          $("#output").append("<br>" + "Me: I hope so..." + "<br>");
          $("#output").append("<br>" + "ChestBro: I know so! Here, take this protein shake. It'll get you mad swol." + "<br>");
          $("#output").append("<br>" + "Me: Sweet!" + "<br>");
          $("#output").append("<br>" + "You drink the protein shake and get 1 strength point." + "<br>");
          proteincounter = true;
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
        }
        else
        {
          $("#output").append("<br>" + "ChestBro: Go get Bobby for me! You can take him." + "<br>");
        }
      }
      else if(userInput === "enter arena")
      {
        fighting = false;
        userInput = "";
        currentlocation = fight5.location1;
        $("#current").text("Gladiator Pit");
        $("#output").append("<br>" + "You enter the arena" + "<br>");
        $("#output").append("<br>" + "BroHobbit Bobby is scowling at me." + "<br>");
        $("#output").append("<br>" + "Bobby: Weakling! Prepare to die!" + "<br>");
        $("#output").append("<br>" + "Me: We'll see about that..." + "<br>");
      }
      else if(userInput === "walk gym")
      {
        fighting = false;
        userInput = "";
        currentlocation = gym5.location1;
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
        $("#current").text("The Gym");
      }
      else if(userInput === "walk cafeteria")
      {
        fighting = false;
        userInput = "";
        currentlocation = cafeteria5.location1;
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
        $("#current").text("The Grub Hub");
      }
      else if(userInput === "list")
      {
        fighting = false;
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < barracks5.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(barracks5.commands[i]);
        }
      }
      else if(userInput === "");
      else
      {
        fighting = false;
        $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
      }
    }
    if(currentlocation === cafeteria5.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        $("#output").append("<br>" + "SkateBro is hanging out, trying to pull off a grind on the cafeteria table." + "<br>");
      }
      if(userInput == "talk skatebro")
      {
        if(skatecounter === false)
        {
          $("#output").append("<br>" + "SkateBro: Sup man! Want to learn to grind?" + "<br>");
          $("#output").append("<br>" + "Me: I dunno man, I can't really skate." + "<br>");
          $("#output").append("<br>" + "SkateBro: Come on dude, you can learn." + "<br>");
          $("#output").append("<br>" + "SkateBro teaches you to grind." + "<br>");
          $("#output").append("<br>" + "With your newfound skater skills, you now gain one strength point." + "<br>");
          skatecounter = true;
          theGame.players[0].addStrengthPoint();
          $("#strength").text(theGame.players[0].attackMax);
        }
        else
        {
          $("#output").append("<br>" + "SkateBro already showed me how to skate." + "<br>");
        }
      }
      else if(userInput === "walk gym")
      {
        userInput = "";
        currentlocation = gym5.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the gym" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks5.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
        $("#current").text("The Barracks");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < cafeteria5.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(cafeteria5.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === gym5.location1)
    {
      if(userInput === "look")
      {
        userInput = "";
        if(saveMortus)
        {
          $("#output").append("<br>" + "You see a message on the wall: say TURTLES when the moment arises, and then you shall defeat Bobby -- your friend Mortus." + "<br>");
        }
        else
        {
          $("#output").append("<br>" + "You see a message on the wall: Screw off -- Mortus" + "<br>");
        }
      }
      else if(userInput === "walk cafeteria")
      {
        userInput = "";
        currentlocation = cafeteria5.location1;
        $("#current").text("The Grub Hub");
        $("#output").append("<br>" + "You walk to the cafeteria" + "<br>");
      }
      else if(userInput === "walk barracks")
      {
        userInput = "";
        currentlocation = barracks5.location1;
        $("#output").append("<br>" + "You walk to the barracks" + "<br>");
        $("#current").text("The Barracks");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "Your possible commands are as follows:");
        for(var i = 0; i < gym5.commands.length; i++)
        {
          $("#output").append("<br>");
          $("#output").append(gym5.commands[i]);
        }
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");

    }
    if(currentlocation === fight5.location1)
    {
      if(userInput === "fight")
      {
        userInput = "";
        theGame.opponent = 8;
        fighting = true;
        battlePrep();
      }
      if(userInput === "bobby")
      {
        userInput = "";
        theGame.opponent = 8;
        fighting = true;
        battlePrep();
      }
      else if(userInput === "turtles")
      {
        $("#output").append("<br>" + "Not the right time for that command." + "<br>");
      }
      else if(userInput === "dance")
      {
        $("#output").append("<br>" + "You're not in the mood." + "<br>");
      }
      else if(userInput === "list")
      {
        $("#output").append("<br>" + "You've played this game long enough. Give it a good guess." + "<br>");
      }
      else if(userInput === "");
      else $("#output").append("<br>" + "This is not a command I recognize." + "<br>");
    }
    if(currentlocation === last.location1)
    {
      turtleCounter += 1;
      if(userInput === "turtles" || userInput == "turtle")
      {
          $("#output").empty();
          $("#output").append("<br>" + "Mortus appears in a burst of smoke! He summons a giant fireball tortoise that crushes Bobby in a single blow." + "<br>");
          $("#output").append("<br>" + "Me: Mortus! You saved me! How can I repay you?" + "<br>");
          $("#output").append("<br>" + "Mortus: Wanna grab a couple Millers?" + "<br>");
          $("#output").append("<br>" + "Me: Sure!" + "<br>");
          $("#output").append("<br>" + "You exit the arena, satisfied with the battle, the glory, and the chance to hang out with your bro Mortus." + "<br>");
          $("#output").append("<br>" + "~The End~" + "<br>");
          $("#output").append("<br>" + "<img id='win' src='img/winGame.gif'>" + "<br>");
          $("#input").hide();
          $("#main-button").hide();
          fighting = false;
      }
      else if(userInput === "");
      else if(turtleCounter > 1)
      {
        $("#output").empty();
        $("#output").append("<br>" + "Your words ring hollow, and Bobby shoots you mutiple times with his AK-47" + "<br>");
        $("#output").append("<br>" + "You bleed out, shot down by the Evil Hobbit by the name of Bobby." + "<br>");
        if(saveMortus)
        {
          $("#output").append("<br>" + "You respawn in the barracks." + "<br>");
          currentlocation = "barracks5";
        }
        else
        {
          $("#output").append("<br>" + "In your dying moments, you see flashbacks of your betrayal of Mortus." + "<br>");
          $("#output").append("<br>" + "Maybe you should have spared the bro?" + "<br>");
          $("#output").append("<br>" + "You die on the cold arena floor." + "<br>");
          $("#output").append("<br>" + "~Game Over, brah! Better luck next time~" + "<br>");
          $("#output").append("<br>" + "<img src='img/lostGame.gif'>" + "<br>");
          currentlocation = "menu";
        }
        fighting = false;
      }
      else turtleCounter += 1;
    }
  });
});
