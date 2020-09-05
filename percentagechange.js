(function(){
    // list of unwanted coins 
    var unsubscribedcoins = [
        "BCCUSDT",
        "VENUSDT",
        "BCHABCUSDT",
        "BCHSVUSDT",
        "USDSBUSDT",
        "BULLUSDT",
        "BEARUSDT",
        "ETHBULLUSDT",
        "ETHBEARUSDT",
        "EOSBULLUSDT",
        "EOSBEARUSDT",
        "XRPBULLUSDT",
        "XRPBEARUSDT",
        "BNBBULLUSDT",
        "BNBBEARUSDT",
        "BCCBTC",
        "HSRBTC",
        "SALTBTC",
        "SUBBTC",
        "ICNBTC",
        "MODBTC",
        "VENBTC",
        "DGDBTC",
        "CHATBTC",
        "RPXBTC",
        "NCASHBTC",
        "CLOAKBTC",
        "BCNBTC",
        "TUSDBTC",
        "NPXSBTC",
        "KEYBTC",
        "MFTBTC",
        "DENTBTC",
        "PHXBTC",
        "PAXBTC",
        "BCHABCBTC",
        "BCHSVBTC",
        "BTTBTC",
        "WINBTC",
        "COCOSBTC"
    ];
    // add margin pairs here 
    var margincoins = {
        "ADABTC": 10,
        "ADAUSDT": 10,
        "ALGOBTC": 5,
        "ALGOUSDT": 5,
        "ANKRBTC": 5,
        "ANKRUSDT": 5,
        "ANTBTC": 5,
        "ANTUSDT": 5,
        "ARPABTC": 5,
        "ARPAUSDT": 5,
        "ATOMBTC": 5,
        "ATOMUSDT": 5,
        "BALBTC": 5,
        "BALUSDT": 5,
        "BANDBTC": 5,
        "BANDUSDT": 5,
        "BATBTC": 5,
        "BATUSDT": 5,
        "BCHBTC": 10,
        "BCHUSDT": 10,
        "BNBBTC": 10,
        "BNBUSDT": 10,
        "BNTBTC": 5, 
        "BNTUSDT": 5,
        "BTCUSDT": 10,
        "BTTUSDT": 5,
        "BUSDUSDT": 5,
        "BZRXUSDT": 50,
        "CELRBTC": 5,
        "CELRUSDT": 5,
        "CHZBTC": 5,
        "CHZUSDT": 5,
        "CHRUSDT": 5,
        "CHRBTC": 5,
        "COMPUSDT": 5,
        "COMPBTC": 5,
        "COTIBTC": 5,
        "COTIUSDT": 5,
        "CRVBTC": 5,
        "CRVUSDT": 5,
        "CTSIBTC": 5,
        "CTSIUSDT": 5,
        "DASHBTC": 5,
        "DASHUSDT": 5,
        "DGBUSDT": 5,
        "DGBBTC": 5,
        "DOCKBTC": 5,
        "DOCKUSDT": 5,
        "DOGEBTC": 5,
        "DOGEUSDT": 5,
        "DOTBTC": 5,
        "DOTUSDT": 5,
        "ENJBTC": 5,
        "ENJUSDT": 5,
        "EOSBTC": 10,
        "EOSUSDT": 10,
        "ETCBTC": 10,
        "ETCUSDT": 10,
        "ETHBTC": 10,
        "ETHUSDT": 10,
        "FETBTC": 5,
        "FETUSDT": 5,
        "FTMBTC": 5,
        "FTMUSDT": 5,
        "FTTBTC": 5,
        "FTTUSDT": 5,
        "GXSBTC": 5,
        "GXSUSDT": 5,
        "HBARBTC": 5,
        "HBARUSDT": 5,
        "HIVEBTC": 5,
        "HIVEUSDT": 5,
        "ICXBTC": 5,
        "ICXUSDT": 5,
        "IOSTBTC": 5,
        "IOSTUSDT": 5,
        "IOTABTC": 5, 
        "IOTAUSDT": 5,
        "IOTXBTC": 5,
        "IOTXUSDT": 5,
        "IRISBTC": 5,
        "IRISUSDT": 5,
        "JSTBTC": 5,
        "JSTUSDT": 5,
        "KAVABTC": 5, 
        "KAVAUSDT": 5,
        "KMDBTC": 5,
        "KMDUSDT": 5,
        "KNCBTC": 5,
        "KNCUSDT": 5,
        "LENDBTC": 5,
        "LENDUSDT": 5,
        "LINKBTC": 5,
        "LINKUSDT": 5,
        "LRCBTC": 5,
        "LRCUSDT": 5,
        "LSKBTC": 5,
        "LSKUSDT": 5,
        "LTCBTC": 10,
        "LTCUSDT": 10,
        "MANABTC": 5,
        "MANAUSDT": 5,
        "MATICBTC": 5, 
        "MATICUSDT": 5,
        "MKRBTC": 5,
        "MKRUSDT": 5,
        "NANOBTC": 5,
        "NANOUSDT": 5,
        "NEOBTC": 5,
        "NEOUSDT": 5,
        "NULSBTC": 5,
        "NULSUSDT": 5,
        "OMGBTC": 5,
        "OMGUSDT": 5,
        "ONEBTC": 5,
        "ONEUSDT": 5,
        "ONGBTC": 5,
        "ONGUSDT": 5,
        "ONTBTC": 5,
        "ONTUSDT": 5,
        "QTUMBTC": 5,
        "QTUMUSDT": 5,
        "RENBTC": 5,
        "RENUSDT": 5,
        "REPUSDT": 5,
        "REPBTC": 5,
        "RLCBTC": 5,
        "RLCUSDT": 5,
        "RUNEUSDT": 50,
        "RVNBTC": 5,
        "RVNUSDT": 5,
        "SCBTC": 5,
        "SCUSDT": 5,
        "SNXBTC": 5,
        "SNXUSDT": 5,
        "SOLBTC": 5,
        "SOLUSDT": 5,
        "SRMBTC": 5,
        "SRMUSDT": 5,
        "STORJBTC": 5,
        "STORJUSDT": 5,
        "SUSHIBTC": 3,
        "SUSHIUSDT": 3,
        "SXPBTC": 5,
        "SXPUSDT": 5,
        "TCTBTC": 5,
        "TCTUSDT": 5,
        "TFUELBTC": 5,
        "TFUELUSDT": 5,
        "THETABTC": 5,
        "THETAUSDT": 5,
        "TOMOBTC": 5,
        "TOMOUSDT": 5,
        "TRBBTC": 5,
        "TRBUSDT": 50,
        "TRXBTC": 10,
        "TRXUSDT": 10,
        "USDCUSDT": 5,
        "VETBTC": 5, 
        "VETUSDT": 5,
        "VTHOUSDT": 5,
        "WAVESBTC": 5,
        "WAVESUSDT": 5,
        "WNXMBTC": 5,
        "WNXMUSDT": 5,
        "WRXBTC": 5,
        "WRXUSDT": 5,
        "WTCBTC": 5,
        "WTCUSDT": 5,
        "XLMBTC": 5,
        "XLMUSDT": 5,
        "XMRBTC": 5,
        "XMRUSDT": 5,
        "XRPBTC": 10,
        "XRPUSDT": 10,
        "XTZBTC": 5,
        "XTZUSDT": 5,
        "YFIBTC": 5,
        "YFIUSDT": 5,
        "YFIIBTC": 5,
        "YFIIUSDT": 5,
        "ZECBTC": 5,
        "ZECUSDT": 5,
        "ZILBTC": 5,
        "ZILUSDT": 5,
        "ZRXBTC": 5,
        "ZRXUSDT": 5,
    };
    // function called when clicking on usdt margin checkbox 
    function usdtmarginclick(){
        var margincheckbox = document.getElementById("margin-usdt");
        if(margincheckbox.checked == true){
            usdttable.setFilter("margin", ">", 0);
        }
        else{
            usdttable.removeFilter("margin", ">", 0);
        }
    };
    // function called when clicking on btc margin checkbox 
    function btcmarginclick(){
        var margincheckbox = document.getElementById("margin-btc");
        if(margincheckbox.checked == true){
            btctable.setFilter("margin", ">", 0);
        }
        else{
            btctable.removeFilter("margin", ">", 0);
        }
    };
    var usdttabledata = []
    var usdttablecount = 0 
    var btctabledata = []
    var btctablecount = 0 
    // creating tables with tabulator 
    var usdttable = new Tabulator("#usdt", {
    data: usdttabledata,
    placeholder:"No Data Set",
    layout:"fitColumns",
    columns: [
        {
            title: "#",
            field: "id",
            sorter: "number",
            width: 60,
            formatter: "rownum",
        },
        {
            title: "<input id='margin-usdt' type='checkbox' name='usdt-m'> <label for='usdt-m'> M </label>",
            field: "margin", 
            sorter: "string",
            headerSort: false,
            width: 80,
            hozAlign: "left",
            headerClick: usdtmarginclick,
            formatter: function(cell, formatterParams, onRendered){
                if(cell.getValue() != undefined){
                    return "<div class='boxedmargin'>" + cell.getValue() + "x</div>";
                }
                else{
                    return "";
                }
            },
        },
        {
            title: "Ticker",
            field: "ticker",
            sorter: "string",
            headerFilter: true,
            headerFilterPlaceholder: "Search Ticker",
        },
        {
            title: "Volume (USDT)",
            field: "volume",
            sorter: "number",
            formatter: "money",
            formatterParams: {symbol: "$ ", precision: 0},
            align: "left",
        },
        {
            title: "Price", 
            field: "price",
            formatter: "money",
            formatterParams: {precision: false},
            sorter: "number", 
        },
        {
            title: "Percentage",
            field: "percentage",
            sorter: "number",
            formatter: function(cell, formatterParams, onRendered){
                if(cell.getValue() > 0){
                    return "<div class = 'positivepercentage'>+" + cell.getValue() + " %</div>";
                }
                else if(cell.getValue() == 0){
                    return "0.00%";
                }
                else{
                    return "<div class = 'negativepercentage'>" + cell.getValue() + " %</div>";
                }
            },
        },   
        ],
        index: "ticker",
        dataLoaded:function(data){ //freeze first row on data load
            var firstRow = this.getRows()[0];
    
            if(firstRow){
                firstRow.freeze();
            }
        }
    })
    var btctable = new Tabulator("#btc", {
        data: btctabledata, 
        placeholder:"No Data Set",
        layout:"fitColumns",
        columns: [
            {
                title: "#",
                field: "id",
                sorter: "number",
                width: 60,
                formatter: "rownum",
            },
            {
                title: "<input id='margin-btc' type='checkbox' name='btc-m'> <label for='btc-m'> M</label>",
                field: "margin", 
                sorter: "string",
                headerSort: false,
                width: 80,
                hozAlign: "left",
                headerClick: btcmarginclick,
                formatter: function(cell, formatterParams, onRendered){
                    if(cell.getValue() != undefined){
                        return "<div class='boxedmargin'>" + cell.getValue() + "x</div>";
                    }
                    else{
                        return "";
                    }
                }
            },
            {
                title: "Ticker",
                field: "ticker",
                sorter: "string",
                headerFilter: true,
                headerFilterPlaceholder: "Search Ticker",
            },
            {
                title: "Volume (BTC)",
                field: "volume",
                sorter: "number",
                formatter: "money",
                formatterParams: {symbol: " BTC", symbolAfter: "true", precision: 0},
            },
            {
                title: "Price", 
                field: "price",
                formatter: "money",
                formatterParams: {precision: 8},
                sorter: "number", 
            },
            {
                title: "Percentage",
                field: "percentage",
                sorter: "number",
                formatter: function(cell, formatterParams, onRendered){
                    if(cell.getValue() > 0){
                        return "<div class = 'positivepercentage'>+" + cell.getValue() + " %</div>";
                    }
                    else if(cell.getValue() == 0){
                        return "0.00%";
                    }
                    else{
                        return "<div class = 'negativepercentage'>" + cell.getValue() + " %</div>";
                    }
                },
            },          
        ],
        index: "ticker",
        dataLoaded:function(data){ //freeze first row on data load
            var firstRow = this.getRows()[0];
    
            if(firstRow){
                firstRow.freeze();
            }
        }
    })
    // initial UPI call to get all coin names    
    var all_pairs = []
    var all_usdtpairs = []
    var all_btcpairs = []
    var can_subscribe = 0
    let initial_request = new XMLHttpRequest()
    initial_request.open("GET", "https://api.binance.com/api/v3/ticker/price")
    initial_request.send()
    initial_request.onload = () => {
        // console.log(initial_request.response)      
        // allow subscription using web socket 
        can_subscribe = 1 
        all_pairs = JSON.parse(initial_request.responseText)
        for(let i = 0;  i < all_pairs.length; i++){
            if(!unsubscribedcoins.includes(all_pairs[i].symbol)){
                if(all_pairs[i].symbol.endsWith("USDT")){
                    all_usdtpairs.push(all_pairs[i].symbol)
                    usdttablecount++
                    // get margin amount 
                    var marginamount = margincoins[all_pairs[i].symbol]
                    usdttable.addData({id:usdttablecount, margin:marginamount, ticker:all_pairs[i].symbol.toUpperCase(), percentage:0, volume:0, price:all_pairs[i].price}, false)
                }
                if(all_pairs[i].symbol.endsWith("BTC")){
                    all_btcpairs.push(all_pairs[i].symbol)
                    btctablecount++
                    // get margin amount 
                    var marginamount = margincoins[all_pairs[i].symbol]
                    btctable.addData({id:btctablecount, margin:marginamount, ticker:all_pairs[i].symbol.toUpperCase(), percentage:0, volume:0, price:all_pairs[i].price}, false)
                }
            }       
        }  
        // websockets to update data 
        let socket = new WebSocket("wss://stream.binance.com:9443/ws")
        socket.onopen = function(e){
            console.log("[open] Web Socket Connection established");
            var request = {
                "method": "SUBSCRIBE",
                "params":
                [
                ],
                "id": 1
                }
            // adding all coins to subscribe params 
            for(let i = 0; i<all_btcpairs.length; i++){
                request.params.push(all_btcpairs[i].toLowerCase()+"@kline_1d")
            }
            for(let i = 0; i<all_usdtpairs.length; i++){
                request.params.push(all_usdtpairs[i].toLowerCase()+"@kline_1d")
            }
            socket.send(JSON.stringify(request));
        }
        socket.onmessage = function(event){
            var obj = JSON.parse(event.data)
            // consider response when it has coin data
            if(!obj.hasOwnProperty("result")){
                if(String(obj.s).endsWith("BTC")){
                    // calculating percentage 
                    var p = ((parseFloat(obj.k.c) - parseFloat(obj.k.o))/parseFloat(obj.k.o))*100
                    p = p.toFixed(2)
                    // updating table row using symbol as index 
                    btctable.updateData([{ticker:obj.s, margin:margincoins[String(obj.s)], percentage:p, volume:(obj.k.v)*(obj.k.c), price:obj.k.c}])
                }  
                if(String(obj.s).endsWith("USDT")){
                    // calculating percentage 
                    var p = ((parseFloat(obj.k.c) - parseFloat(obj.k.o))/parseFloat(obj.k.o))*100
                    p = p.toFixed(2)
                    // get margin amount 
                    var marginamount = margincoins[String(obj.s)]
                    // updating table row using symbol as index 
                    usdttable.updateData([{ticker:obj.s, margin:marginamount, percentage:p, volume:(obj.k.v)*(obj.k.c), price:obj.k.c}])            
                }     
            }
            else{
                console.log(event)
            }
        }
        socket.onclose = function(event){
            if (event.wasClean) {
                alert(`[close] Web socket Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                alert('[close] Web socket Connection died');
            }
        }
        socket.onerror = function(error){
            alert(`Web socket error: [error] ${error.message}`)
        }  
    }
    
    // check if current tab is open or not 
    var is_tab_active;
    window.onfocus = function () { 
        is_tab_active = true; 
    }; 
    window.onblur = function () { 
        is_tab_active = false; 
    }; 
    
    // sorting tables every 2 seconds 
    setInterval(function(){
        // if current tab is open then sort table 
        if (is_tab_active == true){
            var sorters = btctable.getSorters()
            if(sorters.length > 0){
                var currentsortercolumn = sorters[0].field
                var currentsortdirection = sorters[0].dir
                btctable.setSort(currentsortercolumn, currentsortdirection)
            }
            var sorters = usdttable.getSorters()
            if(sorters.length > 0){
                var currentsortercolumn = sorters[0].field
                var currentsortdirection = sorters[0].dir
                usdttable.setSort(currentsortercolumn, currentsortdirection)
            }
        }
    }, 2000)

})();
