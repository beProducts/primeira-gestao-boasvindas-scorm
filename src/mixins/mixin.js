let timeAcumulator = 0;

const mixin = {
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    },
    logoff() {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Redirect
        this.goToRoute('/');

        // Get keys
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Clear storage
        localStorage.removeItem(productUserKey);
        localStorage.removeItem(productTokenKey);
      }
    },
    saveVisit(objectId) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            login: userData.login,
            customerId: userData.customerId,
            productId,
            objectId,
            companyId
          })
        };

        fetch(`${api}/tracking/saveVisit`, requestOptions)
          .then(res => res.json())
          .then(data => {
            if (data.result === false) {
              // Clear the screen
              var myNode = document.body;
              while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
              }

              // Write error message
              document.write(data.errorMessage);
            }
            return;
          })
          .catch((error) => { throw error; });
        }
    },
    setChecked(objectId) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            companyId,
            productId,
            objectId
          })
        };

        return fetch(`${api}/tracking/setWatched`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }else{

        const productId = process.env.VUE_APP_PRODUCT_ID;
        const productStoragerKey = `product-${productId}-storage-checked-list-boas-vindas`;

        // Get check list
        let appChecks = localStorage.getItem(productStoragerKey) || '[]';

        // Cast
        appChecks = JSON.parse(appChecks);

        // Add new stage
        appChecks.push( objectId );

        // Remove duplicate values
        appChecks = Array.from(new Set(appChecks));

        // Store data
        localStorage.setItem(productStoragerKey, JSON.stringify(appChecks));

        // SCORM completed
        if (appChecks.length >= process.env.VUE_APP_QUANTITY_OF_SESSION) {
          try{
            window.scormAPI.LMSInitialize('');
            window.scormAPI.LMSSetValue("cmi.core.lesson_status", "completed");
            window.scormAPI.LMSCommit('');
          }catch(error){ console.log("not in lms") }
        }

      }
    },
    setUserExit(objectId, timeElapsed) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            objectId,
            productId,
            timeElapsed
          })
        };

        return fetch(`${api}/tracking/setUserExit`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }
    },
    setUserTimeElapsed(objectId, timeElapsed) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            objectId,
            productId,
            timeElapsed
          })
        };

        return fetch(`${api}/tracking/setObjectTimeElapsed`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }
    },
    getUserChecks() {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            companyId,
            productId
          })
        };

        return fetch(`${api}/customers/objectChecks`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }else{

        const productId = process.env.VUE_APP_PRODUCT_ID;
        const productStoragerKey = `product-${productId}-storage-checked-list-boas-vindas`;

        // Get check list
        let appChecks = localStorage.getItem(productStoragerKey) || '[]';

        // Cast
        appChecks = JSON.parse(appChecks);
        
        return new Promise((resolve) => {

          const userChecks = {
            status: true,
            message: "User checks list",
            userChecks: appChecks.map( objectId => { return {objectId} })
          }

          resolve(userChecks)
        })
        .then(data => data)
        .catch((error) => { throw error; });
        
      }
    },
    getHelpBarText() {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            companyId,
            productId
          })
        };

        return fetch(`${api}/products/helpText`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }
    },
    getCommentList(objectId) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            companyId,
            productId,
            objectId
          })
        };

        return fetch(`${api}/objects/comments`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch((error) => { throw error; });
      }
    },
    sendCommentForm(objectId, commentText) {
      if( process.env.VUE_APP_SCORM_MODE !== 'ON' ){
        // Env variables
        const api = process.env.VUE_APP_BACKEND_ENDPOINT;
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const companyId = process.env.VUE_APP_COMPANY_ID;

        // Get keys
        const productUserKey = `product-${productId}-user`;
        const productTokenKey = `product-${productId}-token`;

        // Storage data
        const token = localStorage.getItem(productTokenKey);
        let userData = localStorage.getItem(productUserKey);
        userData = JSON.parse(userData);

        // Prepare request
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: userData.customerId,
            companyId,
            productId,
            objectId,
            commentText
          })
        };

        return fetch(`${api}/objects/postComment`, requestOptions)
          .then(res => res.json())
          .catch((error) => { throw error; });
      }
    },
    setTimeScorm( totalTimeMiliseconds ){

      timeAcumulator += totalTimeMiliseconds;

      const formatTime = ( miliseconds ) => {

        let hours = Math.floor( ( miliseconds / (1000 * 60 * 60) ) % 24 );
        let minutes = Math.floor( ( ( miliseconds / (1000 * 60) ) % 60 ) );
        let seconds = Math.floor( ( miliseconds / 1000 ) % 60 );

        if( hours >= 0 && hours <= 9 ) hours = `000${hours}`;
        if( hours >= 10 && hours <= 99 ) hours = `00${hours}`;
        if( hours >= 100 && hours <= 999 ) hours = `0${hours}`;
        if( minutes >= 0 && minutes <= 9 ) minutes = `0${minutes}`;
        if( seconds >= 0 && seconds <= 9 ) seconds = `0${seconds}`;
        
        return hours + ':' + minutes + ':' + seconds + ':00';

      };

      console.log(formatTime( timeAcumulator ))

      try{
        window.scormAPI.LMSInitialize('');
        window.scormAPI.LMSSetValue("cmi.core.session_time", formatTime( timeAcumulator ) );
        console.log( window.scormAPI.LMSGetValue("cmi.core.total_time" ) );
        window.scormAPI.LMSCommit('');
      }catch(error){ console.log("not in lms") }

    }
  }
};

export default mixin;
