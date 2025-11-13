<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mixcloud Livestream</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #111;
      color: #eee;
      text-align: center;
      margin: 0;
      padding: 2rem;
    }

    h1 {
      margin-bottom: 1rem;
    }

    iframe {
      border-radius: 12px;
      border: none;
      width: 100%;
      max-width: 600px;
      height: 180px;
      box-shadow: 0 0 15px rgba(0,0,0,0.5);
    }

    .live-button {
      display: inline-block;
      background-color: red;
      color: white;
      padding: 12px 20px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 20px;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.6); }
      70% { box-shadow: 0 0 0 15px rgba(255, 0, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
    }
  </style>
</head>
<body>
  <h1>🎧 Mijn Mixcloud Livestream</h1>

  <iframe 
    src="https://www.mixcloud.com/widget/iframe/?feed=%2FNickDavisVRUK%2F" 
    frameborder="0">
  </iframe>

  <br>
  <a href="https://www.mixcloud.com/live/NickDavisVRUK/" target="_blank" class="live-button">
    🔴 Luister Live
  </a>
  <iframe 
  width="100%" 
  height="180" 
  src="https://www.mixcloud.com/widget/iframe/?feed=%2FNickDavisVRUK%2F" 
  frameborder="0">
</iframe>

</body>
</html>
