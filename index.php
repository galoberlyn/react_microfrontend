<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script type="module">
    import { Widget1 } from "./widget1/dist/widget1.esm.js";
    import { Widget2 } from "./widget2/dist/widget2.esm.js";

    function loadWidgets() {
      Widget1.createWidget()
      Widget2.createWidget()
    }

    window.onload = function () {
      loadWidgets();
    };
  </script>
  <style>
    html, body, h2 {
      margin: 0
    }
    #header-main, footer {
      background: black;
      color: white;
      height: 50px
    }
    footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .container-flex {
      display: flex;
    }
  </style>
  
</head>
<body>
  <header id="header-main">
    <h2>Integration site</h2>
  </header>
  <main>
    <div class="container-flex">
      <div id="widget1"></div>
      <div id="widget2"></div>
    <div>
  </main>
  <footer>
    <h3>Iam the footer</h3>
  </footer>
</body>
</html>