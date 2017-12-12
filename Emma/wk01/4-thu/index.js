var alamein = ['flinders street', 'richmond','east richmond','burnley','hawthorn','glenferrie'];
var glenWaverlyn = ['flag staff', 'melbourne central', 'parliment', 'richmond', 'kooyong and tooronga'];
var sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];
var a = [];
var b = [];
var c = [];
function publicTransport(origin, destination) {
  if(alamein.includes(origin)) {
        if(alamein.includes(destination)) {
              if(alamein.indexOf(origin) > alamein.indexOf(destination)) {
                  for(let i=alamein.indexOf(origin); i>=alamein.indexOf(destination); i--) {
                     a.push(alamein[i]);
                  }
               }else {
                for(let i=alamein.indexOf(origin); i<=alamein.indexOf(destination); i++) {
                    a.push(alamein[i]);
                 }
               }
               console.log(a.join(' ------> '));
               console.log(((a.length)-1)+" stops total");
               return a.join(' >>>>>>> '), ((a.length)-1)+" stops total"
        }else if(glenWaverlyn.includes(destination)) {
              alameinOrigin();
              glenWaverlynDestination();
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }else {
              alameinOrigin();
              sandringhamDestination()
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }
  }else if(glenWaverlyn.includes(origin)) {
        if(glenWaverlyn.includes(destination)) {
              if(glenWaverlyn.indexOf(origin) > glenWaverlyn.indexOf(destination)) {
                 for(let i=glenWaverlyn.indexOf(origin); i>=glenWaverlyn.indexOf(destination); i--) {
                    a.push(glenWaverlyn[i]);
                 }
              }else {
               for(let i=glenWaverlyn.indexOf(origin); i<=glenWaverlyn.indexOf(destination); i++) {
                   a.push(glenWaverlyn[i]);
                }
              }
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }else if(alamein.includes(destination)) {
              glenWaverlynOrigin();
              alameinDestination();
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join('------>'), ((a.length)-1)+" stops total"
        }else {
              glenWaverlynOrigin();
              sandringhamDestination();
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }
  }else {
        if(sandringham.includes(destination)) {
              if(sandringham.indexOf(origin) > sandringham.indexOf(destination)) {
                 for(let i=sandringham.indexOf(origin); i>=sandringham.indexOf(destination); i--) {
                    a.push(sandringham[i]);
                 }
              }else {
               for(let i=sandringham.indexOf(origin); i<=sandringham.indexOf(destination); i++) {
                   a.push(sandringham[i]);
                }
              }
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }else if(alamein.includes(destination)) {
              sandringhamOrigin();
              alameinDestination();
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }else {
              sandringhamOrigin();
              glenWaverlynDestination();
              console.log(a.join(' ------> '));
              console.log(((a.length)-1)+" stops total");
              return a.join(' ------> '), ((a.length)-1)+" stops total"
        }
 }

 function alameinOrigin() {
   if(alamein.indexOf(origin) > alamein.indexOf('richmond')) {
      for(let i=alamein.indexOf(origin); i>alamein.indexOf('richmond'); i--) {
         a.push(alamein[i]);
      }
   }else {
       for(let i=alamein.indexOf(origin); i<alamein.indexOf('richmond'); i++) {
          a.push(alamein[i]);
       }
   }
 }

 function glenWaverlynOrigin() {
  if(glenWaverlyn.indexOf(origin) > glenWaverlyn.indexOf('richmond')) {
     for(let i=glenWaverlyn.indexOf(origin); i>glenWaverlyn.indexOf('richmond'); i--) {
        a.push(glenWaverlyn[i]);
     }
  }else {
      for(let i=glenWaverlyn.indexOf(origin); i<glenWaverlyn.indexOf('richmond'); i++) {
         a.push(glenWaverlyn[i]);
      }
  }
}

  function sandringhamOrigin() {
   if(sandringham.indexOf(origin) > sandringham.indexOf('richmond')) {
      for(let i=sandringham.indexOf(origin); i>sandringham.indexOf('richmond'); i--) {
         a.push(sandringham[i]);
      }
   }else {
       for(let i=sandringham.indexOf(origin); i<sandringham.indexOf('richmond'); i++) {
          a.push(sandringham[i]);
       }
   }
  }

  function alameinDestination() {
    if(alamein.indexOf(destination) > alamein.indexOf('richmond')) {
       for(let i=alamein.indexOf('richmond'); i<=alamein.indexOf(destination); i++) {
       a.push(alamein[i]);
       }
     }else {
       for(let i=alamein.indexOf('richmond'); i>=alamein.indexOf(destination); i--) {
       a.push(alamein[i]);
       }
     }
  }

  function glenWaverlynDestination() {
    if(glenWaverlyn.indexOf(destination) > glenWaverlyn.indexOf('richmond')) {
       for(let i=glenWaverlyn.indexOf('richmond'); i<=glenWaverlyn.indexOf(destination); i++) {
       a.push(glenWaverlyn[i]);
       }
     }else {
       for(let i=glenWaverlyn.indexOf('richmond'); i>=glenWaverlyn.indexOf(destination); i--) {
       a.push(glenWaverlyn[i]);
       }
     }
  }

  function sandringhamDestination() {
    if(sandringham.indexOf(destination) > sandringham.indexOf('richmond')) {
       for(let i=sandringham.indexOf('richmond'); i<=sandringham.indexOf(destination); i++) {
       a.push(sandringham[i]);
       }
     }else {
       for(let i=sandringham.indexOf('richmond'); i>=sandringham.indexOf(destination); i--) {
       a.push(sandringham[i]);
       }
     }
  }
} //function publicTransport

//publicTransport('flinders street','east richmond');
//publicTransport('glenferrie','flinders street');
//publicTransport('glenferrie','flag staff');
//publicTransport('glenferrie','flag staff');
//publicTransport('glenferrie','flinders street');
//publicTransport('richmond','flag staff');
//publicTransport('flinders street','melbourne central');
//publicTransport('flinders street','kooyong and tooronga');
//publicTransport('flinders street','windsor');
//publicTransport('windsor','flinders street');
//publicTransport('flinders street','southern cross');
//publicTransport('flag staff','parliment');
//publicTransport('glenferrie','kooyong and tooronga');
//publicTransport('burnley','southern cross');
//publicTransport('parliment','flinders street');
//publicTransport('flag staff','windsor');
console.log(publicTransport('windsor','flag staff'));
//console.log(publicTransport('windsor','glenferrie'));
//publicTransport('southern cross','windsor');
//publicTransport('south yarra','southern cross');
//publicTransport('kooyong and tooronga', 'flinders street');
//publicTransport('kooyong and tooronga', 'southern cross');
//publicTransport('southern cross', 'kooyong and tooronga');
