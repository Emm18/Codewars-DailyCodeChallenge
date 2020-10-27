//https://www.codewars.com/kata/5b6fcd9668cb2e282d00000f

//Background
//Every time you photocopy something the quality of the copy is never quite as good as the original.
//But then you make a copy of copy, and then a copy of that copy, et cetera... And the results get worse each time.
//This kind of degradation is called Generation Loss.
//<a href=https://www.youtube.com/watch?v=G8GOcB6H0uQ>Here is a fun example of generation loss copying VHS tapes.

//Kata task
//In this Kata you will be given 2 sheets of paper.
//The first one is the original, and the second one is the result of copying many times. Let's call these papers orig and copy.
//Only a small % of generation loss happens at each copy, but the effect is cummulative and the copies quickly become more like gibberish.
//Your task is to return true/false if orig is a possible ancestor of copy.

//Notes
//The orig document may include any kind of character
//Copied characters will degrade as follows: A-Z ⇒ a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
//Any other character not mentioned above (e.g. digits) do not degrade
//For the uppercase to lowercase degradation the letters must be the same (i.e. A ⇒ a ... Z ⇒ z)
//Example
//(5% error rate)

//Original	                                  After 20 copies...                          After 75 copies...
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  TH# Q+#Ck BRow# F+x J#MPS over A Laz# #+#   ##  q :c+ +r# . ..# #. #+   #+ a #:+:  . 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  :He Qui#k #rO#n foX Ju#Ps oVer a la+y Do+   .+  Q#:## +:::  +++ :::+. .#.# . :. +  #: 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  THe QUiC# b:OWn #oX ##m#s #Ver + lAZ# D#G   ::  q#.c# . ..#   : :.:   :v:+   +a.+ .+# 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  ##E #uIcK BROWn Fox #UMPS o#Er A LaZY doG.  :++  :.+k +:+:# f.. .:m:  o:#  . :+#y  #+ 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  #H+ Qui## BROW# +ox jUMPs OV#r a lAzy ###.  +#   :::. +::++  :: #:.+: #+     +:z. .:  
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  ##e +UICK #ROWn fo# +#mPs #Ve+ a lazY dOg   . e .:#c# ##:+#     : .p# +v:  . #++: #++ 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  ### ##IC+ Br### f#x Jump# oVE+ A La## dOg.  ..: ..:.  ++++  +++ ++:p: +ve  A L+.. # + 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  th+ qUI#k bRO#n fOX #umP# o#ER A La+Y #O.   ::. :ui   :## : +Ox +#::: :::+ + ++ + :#
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  tH# #U:#k +r+## F+# +#mP+ #VeR A ###Y DOg.  +#   +  + +  .+ f . : +   :.   : ++ y +.+ 
//THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.  #H# QUIcK #ROwN #o+ juM#s #V#+ A #aZy dog   ++  .u#+k +r#.. +:  :::+. ##   #  :+# +## 

function generationLoss(orig, copy) {
  if(orig.length != copy.length){
    return false;
  };

  let newOrig = orig.split('\n');
  let newCopy = copy.split('\n');
  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let degrade = ['#','+',':','.',' '];
  
  for(let i = 0; i <= newOrig.length - 1; i++){
    let tempOrig = newOrig[i].split('');
    let tempCopy = newCopy[i].split('');
    
    for(let j = 0; j <= tempOrig.length - 1; j++){
      let s1 = tempOrig[j];
      let s2 = tempCopy[j];
      
      if(letters.includes(s2.toUpperCase())){
        if(s1.toUpperCase() != s2.toUpperCase() || s1.charCodeAt(0) > s2.charCodeAt(0)){
          return false;
        };    
      } else if(degrade.includes(s2) && (letters.includes(s1.toUpperCase()) || degrade.includes(s1))){
         if(degrade.indexOf(s1) > degrade.indexOf(s2)){
           return false;
         } 
      }  else if(s1 != s2){
        return false;
      };
    };
  };
  
  return true;
};
