window.onload = function () {
    var obj = {
        "owner": "John",
        "ownerPhone": "0969622396",
        "reciever": "Cena",
        "recieverPhone": "09856352132",
        "fromDate": "10/06/2018",
        "expired": "15/6/2018",
        "from": "FPT University",
        "to": "Tran Duy Hung"
    };
    var fromLocation = obj.from;
    var toLocation = obj.to;
    var human = 'Owner: '+obj.owner
        + '<br></br>' +'Owner Phone: '+ obj.ownerPhone
        + '<br></br>' +'Receiver: '+ obj.reciever
        + '<br></br>' +'Receiver Phone: '+ obj.recieverPhone
        + '<br></br>' +'From: '+ obj.fromDate
        + '<br></br>' +'Date: '+ obj.expired;
    document.getElementById('fromer').innerHTML = fromLocation;
    document.getElementById('to').innerHTML = toLocation;
    document.getElementById('human').innerHTML = human;
};
