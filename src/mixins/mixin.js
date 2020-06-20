const mixin = {
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    },
    logoff() {
      // Redirect
      this.goToRoute('/');

      // Get keys
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const productUserKey = `product-${productId}-user`;
      const productTokenKey = `product-${productId}-token`;

      // Clear storage
      localStorage.removeItem(productUserKey);
      localStorage.removeItem(productTokenKey);
    },
    saveVisit(objectId) {
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
    },
    setChecked(objectId) {
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
    },
    setUserExit(objectId, timeElapsed) {
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
    },
    setUserTimeElapsed(objectId, timeElapsed) {
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
    },
    getUserChecks() {
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
    },
    getHelpBarText() {
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
    },
    getCommentList(objectId) {
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
    },
    sendCommentForm(objectId, commentText) {
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
    },
    setPageChecked(stage) {
      if (window.scormAPI !== undefined) {
        // Get keys
        const productId = process.env.VUE_APP_PRODUCT_ID;
        const productStoragerKey = `product-${productId}-storage`;

        // Get check list
        let appChecks = localStorage.getItem(productStoragerKey) || '[]';

        // Cast
        appChecks = JSON.parse(appChecks);

        // Add new stage
        appChecks.push(stage);

        // Remove duplicate values
        appChecks = Array.from(new Set(appChecks));

        // SCORM completed
        if (appChecks.length === 14) {
          window.scormAPI.LMSInitialize('');
          window.scormAPI.LMSSetValue("cmi.core.lesson_status", "completed");
          window.scormAPI.LMSCommit('');
          console.log('COMPLETED');
        }

        // Store data
        localStorage.setItem(productStoragerKey, JSON.stringify(appChecks));
      }
    },
  },
};

export default mixin;
