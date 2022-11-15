function okay() {
  let a = document.getElementById("input").value;
  fetch(`https://api.postalpincode.in/pincode/${a}`)
    .then((data) => data.json())
    .then((data1) => {
      document.getElementById("input").value = "";
      document.getElementById("out").innerHTML = "";

      try {
        if (data1[0].PostOffice == null) {
          alert("Please Enter The Valit Pincode");
        } else {
          document.getElementById("left").style.display = "none";
          var div1 = document.getElementById("out");
          div1.setAttribute("class", "container");
          var div2 = document.createElement("div");
          div2.setAttribute("class", "row row-cols-1 row-cols-md-3");
          for (var i = 0; i < data1[0].PostOffice.length; i++) {
            var div3 = document.createElement("div");
            div3.innerHTML = `<div class="col mb-4 col lg-4 col sm-12" id="column">
        <div class="card">
          <div class="card-header"><b>${data1[0].PostOffice[i].Name}</b></div>
          <div class="card-body">
            <h6 class="card-title">Block : ${data1[0].PostOffice[i].Block}</h6>
            <h6 class="card-title">Division : ${data1[0].PostOffice[i].Division}</h6>
            <h6 class="card-title">Region : ${data1[0].PostOffice[i].Region}</h6>
            <h6 class="card-title">State : ${data1[0].PostOffice[i].State}</h6>
            <h6 class="card-title">PIN : ${data1[0].PostOffice[i].Pincode}</h6>
            <h6 class="card-title">Delivery Status : ${data1[0].PostOffice[i].DeliveryStatus}</h6>
          </div>
        </div>
      </div>`;

            div1.append(div2);
            div2.append(div3);
            document.body.append(div1);
          }
        }
      } catch (error) {
        alert("error");
      }
    });
}
