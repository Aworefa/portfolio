
document.querySelector('#vol').addEventListener('input', () => {

    var flow = parseInt(document.querySelector('#vol').value)
    document.querySelector('#gaugeValue').innerHTML = flow
    console.log(flow)



    // good to go
    document.querySelector('#generate').addEventListener('click', () => {

        var capitalLetter = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'h', 'g', 'f', 'd', 's', 'a', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'C', 'V', 'B', 'N', 'M', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'm', 'n', 'b', 'v', 'c', 'x', 'z', 'l', 'k', 'j']
        var nosAndsign = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '#', '@', '&', '*', '<', '>', '/']
        var letterAndSign = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'h', 'g', 'f', '.', ',', '#', '@', '&', '*', '<', '>', '/', 'd', 's', 'a', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', '.', ',', '#', '@', '&', '*', '<', '>', '/', 'p', 'C', 'V', 'B', 'N', 'M', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'm', 'n', 'b', 'v', 'c', 'x', 'z', 'l', 'k', 'j']
        var nos = ['1', '2', '3', '4', '5', 'O', '1', '8', '7', '5', '6', '0', '0', '9', '9', '8', '6', '6', '7', '8', '8', '8', '2', '8', '7', '6', '7', '8', '9', '0']
        var sign = ['.', ',', '#', '@', '&', '*', '<', '>', '/']
        var allchar = ['.', ',', '#', '@', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'h', 'g', 'f', 'd', 's', ',', '#', '@', 'a', '1', '2', '3', '4', '5', 'O', '1', '8', '7', '5', '6', '0', '0', '9', '9', '8', '6', '6', '7', '8', '8', 'q', 'w', 'e', 'r', 't', 'y', ',', '#', '@', 'u', 'i', 'o', 'p', 'C', 'V', 'B', 'N', '1', '2', '3', '4', '5', 'O', '1', '8', '7', '5', '6', '0', '0', '9', '9', '8', '6', '6', '7', '8', '8',
            'M', 'I', ',', '#', '@', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'm', 'n', 'b', 'v', 'c', 'x', 'z', 'l', 'k', 'j', '&', '*', '<', '>', '/']
        var letterAndnos = ['1', '2', '3', '4', '5', 'O', '1', '8', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'h', 'g', 'f', 'd', 's', 'a', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'C', 'V', 'B', 'N', 'M', 'I', 'O', 'P', 'A', 'S', '7', '5', '6', '0', '0', '9', '9', '8', '6', '6', '7', '8', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'm', 'n', 'b', 'v', 'c', 'x', 'z', 'l', 'k', 'j', '8', '8', '2', '8', '7', '6', '7', '8', '9', '0']
        var viewed = ''
        var viewedsign = ''
        var viewednos = ''
        var viewedall = ''
        var viewednossign = ''
        var viewednumber = ''
        var viewedsiOnly = ''
        var flow = parseInt(document.querySelector('#vol').value)
        console.log(letterAndSign);
        if (document.querySelector('#upper').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var ranDom = Math.floor((x * capitalLetter.length));
                viewed += capitalLetter[ranDom]
                console.log(ranDom)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            document.querySelector('#showMe').value = viewed
            document.querySelector('#guage').innerHTML = 'WEAK'
        }
        if (document.querySelector('#symbols').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var signrand = Math.floor((x * sign.length));
                viewedsiOnly += sign[signrand]
                console.log(ranDom)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            document.querySelector('#showMe').value = viewedsiOnly
            document.querySelector('#guage').innerHTML = 'WEAK'
        }
        if (document.querySelector('#numbers').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var nosrand = Math.floor((x * nos.length));
                viewednumber += nos[nosrand]
                console.log(ranDom)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            document.querySelector('#showMe').value = viewednumber
            document.querySelector('#guage').innerHTML = 'WEAK'
        }

        if (document.querySelector('#upper').checked && document.querySelector('#symbols').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var randSign = Math.floor((x * letterAndSign.length))
                viewedsign += letterAndSign[randSign]
                console.log(randSign)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            console.log(viewed)
            document.querySelector('#showMe').value = viewedsign
            document.querySelector('#guage').innerHTML = 'MEDIUM'
        }
        if (document.querySelector('#upper').checked && document.querySelector('#numbers').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var randNos = Math.floor((x * letterAndnos.length))
                viewednos += letterAndnos[randNos]
                console.log(ranDom)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            console.log(viewed)
            document.querySelector('#showMe').value = viewednos
            document.querySelector('#guage').innerHTML = 'MEDIUM'
        }
        if (document.querySelector('#numbers').checked && document.querySelector('#symbols').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var randNosign = Math.floor((x * nosAndsign.length))
                viewednossign += nosAndsign[randNosign]
                console.log(randAll)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            document.querySelector('#showMe').value = viewednossign
            document.querySelector('#guage').innerHTML = 'MEDIUM'
        }
        if (document.querySelector('#upper').checked && document.querySelector('#numbers').checked && document.querySelector('#symbols').checked) {
            for (let i = 0; i < flow; i++) {
                var x = Math.random()
                var randAll = Math.floor((x * allchar.length))
                viewedall += allchar[randAll]
                console.log(randAll)
                // console.log(i);
                // console.log(flow);
                // console.log(x);
            }
            console.log(viewed)
            document.querySelector('#showMe').value = viewedall
            document.querySelector('#guage').innerHTML = 'STRONG'
        }


    })
})



// if(flow < 8){
//     console.log('bad')
//     document.querySelector('#gauge').innerHTML += 'weak'  
// }
document.querySelector('#copyButton').addEventListener('click', () => {
    // Get the text field
    var copyText = document.getElementById("showMe");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text password ");
    document.querySelector('#showMe').value = ' '
})
