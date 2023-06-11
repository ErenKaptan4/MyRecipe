document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {}

function onTakePic(picID) {
  var options = {
    quality: 70,
    destinationType: Camera.DestinationType.FILE_URI,
  };

  navigator.camera.getPicture(onSuccess, onFail, options);

  //save img on localstorage
  function onSuccess(imageData) {
    var repImg = JSON.parse(localStorage.getItem("allRecipes"));
    repImg[picID].picture = imageData;
    localStorage.setItem("allRecipes", JSON.stringify(repImg));
    loadRecipes();
  }
}

function onFail(errorMsg) {
  var alert = document.createElement("ion-alert");
  alert.message = errorMsg;
  alert.buttons = [
    {
      text: "OK",
    },
  ];

  document.body.appendChild(alert);
  return alert.present();
}
