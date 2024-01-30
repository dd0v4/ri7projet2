const os = require('os');
const prompt = require("prompt-sync")({ sigint: true });
const { spawnSync } = require('child_process');
const titreJeu = `
    ___          _        _        _                         _      _   
    | _ \\_ _ ___ (_)___ __| |_   _ | |__ ___ ____ _ _____ _ _(_)_ __| |_ 
    |  _| '_/ _ \\| / -_/ _|  _| | || / _\` \\ V / _\` (_-/ _| '_| | '_ |  _|
    |_| |_| \\____/ \\___\\__|\\__|  \\__/\\__,_|\\_/\\__,_/__\\__|_| |_| .__/\\__|
               |__/                                            |_|
`;
const gameOver = `

$$$$$$$\  $$$$$$$$\  $$$$$$\  $$$$$$$\        $$$$$$$$\ $$\   $$\ $$$$$$$\      
$$  __$$\ $$  _____|$$  __$$\ $$  __$$\       $$  _____|$$$\  $$ |$$  __$$\     
$$ |  $$ |$$ |      $$ /  $$ |$$ |  $$ |      $$ |      $$$$\ $$ |$$ |  $$ |    
$$ |  $$ |$$$$$\    $$$$$$$$ |$$ |  $$ |      $$$$$\    $$ $$\$$ |$$ |  $$ |    
$$ |  $$ |$$  __|   $$  __$$ |$$ |  $$ |      $$  __|   $$ \$$$$ |$$ |  $$ |    
$$ |  $$ |$$ |      $$ |  $$ |$$ |  $$ |      $$ |      $$ |\$$$ |$$ |  $$ |    
$$$$$$$  |$$$$$$$$\ $$ |  $$ |$$$$$$$  |      $$$$$$$$\ $$ | \$$ |$$$$$$$  |$$\ 
\_______/ \________|\__|  \__|\_______/       \________|\__|  \__|\_______/ \__|
                                                                                
                                                                                
                                                                                
                                                                           

`;

const mort = () => {
    console.log(gameOver);
    process.exit();
}

// fonction pour mettre fin au programme
const jailOver = `



   $$$$$\  $$$$$$\  $$$$$$\ $$\             $$$$$$$$\ $$\   $$\ $$$$$$$\      
   \__$$ |$$  __$$\ \_$$  _|$$ |            $$  _____|$$$\  $$ |$$  __$$\     
      $$ |$$ /  $$ |  $$ |  $$ |            $$ |      $$$$\ $$ |$$ |  $$ |    
      $$ |$$$$$$$$ |  $$ |  $$ |            $$$$$\    $$ $$\$$ |$$ |  $$ |    
$$\   $$ |$$  __$$ |  $$ |  $$ |            $$  __|   $$ \$$$$ |$$ |  $$ |    
$$ |  $$ |$$ |  $$ |  $$ |  $$ |            $$ |      $$ |\$$$ |$$ |  $$ |    
\$$$$$$  |$$ |  $$ |$$$$$$\ $$$$$$$$\       $$$$$$$$\ $$ | \$$ |$$$$$$$  |$$\ 
 \______/ \__|  \__|\______|\________|      \________|\__|  \__|\_______/ \__|
                                                                              
                                                                              
                                                                              

`;
const jail = () => {
    console.log(jailOver);
    process.exit();
}
// fonction pour mettre fin au programme

const continuer = () => {
    prompt(`Appuyez sur entrée pour continuer....`);
}
// fonction pour que l'user appuie sur entrée pour continuer 
const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
}

// fonction pour que la première lettre d'un string soit en majuscule

const controlInput = (number, prompt) => {
    for (let i = 0; i < number +1; i++) {
        if (Number(prompt) <= number) {
            return true;
        }
    }
    console.log("Entrée incorrecte.");
    return false;
}
// fonction pour contrôler l'input de l'user

const isSure = (choix) => {
    console.log(`Vous avez sélectionné le choix ${choix}, est-ce correct ?`);
    console.log("[1] Oui\n[2] Non");
    let sureprompt;
    do {
        sureprompt = prompt("> ");
    }while(!controlInput(2, sureprompt));
    if (Number(sureprompt) === 2){
        return false;
    }else{
        return true;
    }
}
// fonction pour demander à l'user si il est sûr de sa réponse 


if (os.platform() === "linux" || os.platform() === "darwin") {
    const result = spawnSync("clear", { stdio: 'inherit' });
    console.log(titreJeu);
} else {
    const result = spawnSync("cls", { stdio: 'inherit', shell: true });
    console.log(titreJeu);
}

// détection de l'os pour faire clear sur linux et mac et cls sur windows

const pseudo = prompt("Bienvenue dans mon jeu, entrez votre pseudonyme : ");
prompt(`\nD'accord ${capitalize(pseudo)}, appuyez sur entrée pour commencer.`);

// prompt pour le pseudo de l'user et print son pseudo avec une majuscule 
console.log(`
                                                                                                               
.:                                    .         
*#*+++++++++++++*++++++++++++=======++*+:       
-################%##########*************+       
.########################################*-       
-###########%%%%%###########**###########*-       
 :*######%%%%%%%%%%%#####%*=++++=+=+===.        
  .**#########+-*#*.    :+                      
  :**######%#*. :#-     .-                      
 .**#%######+*+. -*.    .=                      
 +**%#######+-.:::-:::::--                      
=#*#######**                                    
-**#%######*:                                    
.***%%##%###+                                     
+#*#%###%##*.                                     
=#*#%%%%%%##=                                      
###%%%%%###*:                                      
:###%%%%%###*:                                      
::-------::.                                       
                                    
`);
console.log("Vous trouvez un pistolet, que faites-vous ?\n");
console.log("[1] Prendre l'arme\n[2] Laisser l'arme au sol\n");
let arme;
do {
    arme = prompt("> ");
}while(!controlInput(2, arme));
if (!isSure(arme)){
    do {
        console.log("Vous trouvez un pistolet, que faites-vous ?\n");
        console.log("[1] Prendre l'arme\n[2] Laisser l'arme au sol\n");
        arme = prompt("> ");
    }while(!controlInput(2, arme));
}

continuer();

console.log("Il fait nuit, un homme s'approche de vous, il a l'air bourré.");

continuer();

if (Number(arme) === 1){
    console.log(`
        .::                              
        ==                                      :-==++=----++=-:                       
    -#-#*                          ..:+****++*=+%%%%%%*-=+@%%%%#+.  -==--.            
    #%###*-              .-===+=++*********####+%%%%@@@=-+@@@@@@@%*=======+=.         
    -#%%%%#*=::------===+******************#####*@@@@@@@=-=%@@@@@@@@%*++++++++         
    *#%%#+=-++***********######***##############%@@@@@@=-=+%#++#@@@@@#**++++-         
    .%%%=-==######*#*#########################%%#@@@@@@+-==+++=+#@@@@#***++:          
    :---.  =============------::::::----===--::==--::::==++++++#@%+-                 
                                                        .......      
    `);
    console.log("L'homme s'approche de vous en criant, vous lui tirez dessus.\n");
}else{
    console.log("\n\nL'homme vous poignarde dans le cou, vous êtes morts.\n");
    mort();
}



console.log("Bravo, vous avez survécu ! Mais ce n'est pas terminé.....\n");
continuer();
console.log(`
                 :*@@*:                 
           :--=*%@@@@@@%*+=-:           
          #@@@@@@@@@@@@@@@@@@*          
         +@@@@@@@@@@@@@@@@@@@@-         
         +@@#++++++++++++++#@@+         
           -##*+++++++++++##=           
            -#%@@@@@@@@@@%#-            
           -+=*#@@@@@@@@%*==+           
           =@@@#********#@@@*           
            #@@@@@@@@@@@@@@%.           
             +@@@@@@@@@@@@*             
              .=*%@@@@@#=.              
            .-:          .:.            
       .-+#@@@@%+. .. .=%@@@@#+-.       
     :#@@@@@@@@@*:+@@*:*@@@@@@@@@#:     
    -@@@@@@@@@@@#:=@@+:*@@@@@@@@@@@-    
   .@@@@@@@@@@@@@=:%@-=@@@@@@@@@@@@@:   
   +@@@@@@@@@@@@=:@@@@--@@@@@@@@@@@@*   
   #@@@@@@@@@@@@@:=@@*:@@@@@@@@@@@@@#   
   *@@@@@@@@@@@@@@:+#:@@@@@@@@@@@@@@#   

`);
console.log("Un policier vous a aperçu, qu'allez vous faire ? \n");
console.log("\n[1] Ne rien faire\n[2] Tirer sur le policier\n[3] Partir en courant");
let policier;
do {
    policier = prompt("> ");
}while(!controlInput(3, arme));
if (!isSure(policier)){
    do {
        console.log("Un policier vous a aperçu, qu'allez vous faire ? \n");
        console.log("\n[1] Ne rien faire\n[2] Tirer sur le policier\n[3] Partir en courant");
        policier = prompt("> ");
    }while(!controlInput(3, policier));
}

if (Number(policier) === 1){
    console.log("Le policier vous menotte, vous partez en prison.");
    jail();
}else if (Number(policier) === 2){
    console.log("Vous touchez le policier à la tête, il s'écroule sur le sol.");
}else{
    console.log("Vous tentez de vous échapper, le policier vous tire dessus.");
    mort();
}
continuer();
console.log(`
                            .:::                            
                         =#@@@@@@#=                         
                       =@@@@@@@@@@@@-                       
                      .@@@@@@@@@@@@@@                       
          .:........  :@@@@@@@@@@@@@@                       
         *@@@@@@@@@@@@@@@@@@@@@@@@@@%.                      
       -@@@@@@@@#*----+@@@@@@@@@@@@@@=                      
    .-#@@@@@@@#+-     .%%@@@@@@@@@@@@                       
 :#@@@@@@@@@@#         .*@@@@@@@@@@@.                       
%@@@@@@@@==*#.          :@@@@@@@@@@*                        
@@@@@@@#.   .-:.         +@@@@@@@@@#                        
@@@@@%-    #@@@@@%#*+=-#@@@@@@@@@@@@@+.                     
@@@+:     *@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+=:                 
@@%-++++*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*+-:           
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#        

`);

console.log("\nVous vous en êtes sortis, mais vous ne supportez pas le poids de vos actes, vous vous suicidez.\n");
continuer();

console.log("Voulez-vous voir vos choix ?\n");
    console.log("[1] Oui\n[2] Non\n");
let choixResultats;
do {
    choixResultats = prompt("> ");
}while(!controlInput(2, choixResultats));
if (!isSure(choixResultats)){
    do {
        console.log("Vous trouvez un pistolet, que faites-vous ?\n");
        console.log("[1] Prendre l'arme\n[2] Laisser l'arme au sol\n");
        choixResultats = prompt("> ");
    }while(!controlInput(2, choixResultats));
}

if (Number(choixResultats) === 2){
    mort();
}


if (arme === 1) {
    console.log("Choix 1 : Vous avez ramassé l'arme.\n");
} else{
    console.log("Choix 1 : Vous n'avez pas ramassé l'arme.\n");
}

if (Number(policier) === 1) {
    console.log("Choix 2 : Vous n'avez pas bougé.\n");
} else if (Number(policier) === 2) {
    console.log("Choix 2 : Vous avez tué le policier.\n");
} else {
    console.log("Choix 2 : Vous avez tenté de fuir.\n");
}

mort();
