<iframe 
  width="100%" 
  height="180" 
  src="https://www.mixcloud.com/widget/iframe/?feed=%2FRadioAbbey%2F" 
  frameborder="0">
</iframe>

<script>
// Automatisch elke 60 seconden verversen
setInterval(() => {
  const iframe = document.querySelector('iframe');
  iframe.src = iframe.src;
}, 60000);
</script>
