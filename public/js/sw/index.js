self.addEventListener('fetch', function(event) {
  console.log("YO", event.request);
});