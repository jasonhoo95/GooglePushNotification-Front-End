import Head from 'next/head'
import React from 'react';
import fetch from 'isomorphic-unfetch';

const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
export default class extends React.Component {

async  send() {
    // Register Service Worker
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register('/static/html/worker.js')
    console.log("Service Worker Registered...");
    // await navigator.serviceWorker.ready;  // <---------- WAIT 
  
    // Register Push
    console.log("Registering Push...");
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: this.urlBase64ToUint8Array(publicVapidKey)
    });
    console.log("Push Registered...");
  
    // Send Push Notification
    console.log("Sending Push...");
    await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: {
        "content-type": "application/json"
      }
    });
    console.log("Push Sent...");
  }

  getData(val){
    this.props.onSelectLanguage(val);            

  }

  handler(){
    Router.push('/thailand','/thailand');
  }
  
   urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  

  // shouldComponentUpdate(){
  // }

  componentDidMount(){
    if ("serviceWorker" in navigator) {
      this.send().catch(err => console.error(err));
    }

  }
  render(){
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="flex-container">
          <div className="box-trello text-left">
            <header>List header asdas d</header>
            <ul>
              <li className="list-item">Hi world nice to meet u lets do this</li>
              <div className="blue-box"></div>

              <li className="list-item">ok nice</li>
              <div className="blue-box"></div>

              <li className="list-item">ok nice</li>
            </ul>
          </div>

          <div className="box-trello text-left">
            <header>new header</header>
            <ul>
              <li className="list-item">Hi world nice to meet u lets do this is good and gg now</li>
              <div className="blue-box"></div>

              <li className="list-item">
                ok nice
                <div className="blue-box"></div>
              </li>
              <li className="list-item">ok good</li>
              <li className="list-item">ok good</li>
              <li className="list-item">is good</li>
              <li className="list-item">new good</li>
              <li className="list-item">new good</li>
              <li className="list-item">new good</li>
              <li className="list-item">new good</li>
            </ul>
            <div className="grey-box"></div>
          </div>
          <div className="box-trello text-left">
            <header>testing header</header>
            <ul>
              <li className="list-item">Hi world nice ta sdas dasdasdo meet u lets do this</li>
              <li className="list-item">ok nice</li>
            </ul>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
      .App {
        text-align: center;
      }
      
      .App-logo {
        height: 40vmin;
        pointer-events: none;
      }
      
      #scrollable {
        overflow-y: auto;
        max-height: 100px;
      }
      
      .card-bg {
        background-color: white;
      }
      .flex-container {
        display: flex;
        overflow-x: auto;
      }
      
      .flex-container > * {
        flex: 0 0 auto;
        margin-left: 10px;
      }
      .box-trello {
        margin-left: 10px;
        margin-top: 10px;
        width: 300px;
        margin-bottom: 20px;
        position: relative;
      }
      
      .blue-box {
        background-color: blue;
        width: 30px;
        left: 40px;
        z-index: -1;
        position: absolute;
        height: 30px;
      }
      .middle-gap {
        position: relative;
        z-index: 2;
      }
      
      .grey-box {
        background-color: green !important;
        width: 30px;
        position: absolute;
        z-index: -1;
        top: 50px;
        right: -20px;
        height: 30px;
      }
      
      .box-trello > ul {
        list-style: none;
        margin: 0;
        max-height: calc(100% - 40px);
        position: relative;
        z-index: 10;
        overflow-y: auto;
        padding-bottom: 10px;
      }
      .box-trello > * {
        background-color: #e2e4e6;
        color: #333;
        padding: 0 10px;
      }
      .box-trello ul > .list-item {
        background-color: #fff;
        list-style: none;
        padding: 10px;
        margin-top: 10px;
        border-radius: 3px;
        z-index: 10;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      }
      
      @media (prefers-reduced-motion: no-preference) {
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
        }
      }
      .row-flex {
        display: flex;
        flex-wrap: wrap;
      }
      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
      
      .App-link {
        color: #61dafb;
      }
      
      .inner {
        background: #ddd;
      }
      .col-4 {
        margin-bottom: 30px;
      }
      
      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .rounded-circle {
        width: 30px;
        height: 30px;
        background-color: blue;
        border-radius: 15px;
        align-items: center;
        z-index: 2;
      }
      
      .flex-now:first-of-type:after {
        top: 50%;
        height: 50%;
      }
      .flex-now {
        position: relative;
        align-items: center;
      }
      
      .flex-now:last-of-type:after {
        bottom: 50%;
        height: 50%;
      }
      
      .flex-now:after {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        border-left: 1px solid blue;
        margin-left: 15px;
        height: 100%;
      }
      
      `}</style>
    </div>
  )

    }
}