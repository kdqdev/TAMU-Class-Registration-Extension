chrome.tabs.onUpdated.addListener(function
    (tId, changeInfo, tab) {
      // read changeInfo data and do something with it (like read the url)
      console.log(changeInfo.url)
      let changePageURL = changeInfo.url;
      
      if (typeof changePageURL !== 'undefined') {
        if(changePageURL.includes("tamu.collegescheduler.com")){
            console.log("You are on the aggie scheduler website");
            console.log("Executing script: script.js")
            chrome.scripting.executeScript({
                target: {tabId: tId},
                files: ['script.js'],
            });
            
            
          }
    }
      

    }
  );