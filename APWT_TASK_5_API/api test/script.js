fetch("http://127.0.0.1:8000/api/deliverymaninfo/info").then(
        response => {
            response.json().then(
                data => {
                    console.log(data);
                    if (data.length > 0) {
                        var getData = "";
                        data.forEach((object) => {
                            getData += "<tr>";
                            getData += "<td>" + object.name + "</td>";
                            getData += "<td>" + object.id + "</td>";
                            getData += "<td>" + object.email + "</td>";
                            getData += "<td>" + object.dob + "</td>";
                            getData += "<td>" + object.gender + "</td>";
                            getData += "<td>" + object.username + "</td>";
                            getData += "<td>" + object.password + "</td>";
                            getData += "<td>" + object.confirmpass + "</td>";
                            getData += "<td>" + object.phone + "</td>";
                            getData += "<td>" + object.address + "</td></td>";
                        })
                        document.getElementById("loadData").innerHTML = getData;
                    }
                }
            )
        }
    )