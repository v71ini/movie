const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        var data = []
        if (localStorage.getItem('data1')) {
            p = localStorage.getItem('data1');
            data = JSON.parse(p);
        }
        console.log(data)
        var t = ""
        const ele = document.getElementById("notes");
        data.map(d => {
            t += `<div class="notebox"  ><div class="clrr" style="background-color:${d.color}"  ></div><div class="hash">#${d.hash}</div><hr/><div class="notetxt"><p>${d.text}</p></div> </div>`



        })

        function deleteit() {
            data.pop();
            const dta = JSON.stringify(data);
            localStorage.setItem('data1', dta);
            window.location.reload(false)
        }
        document.getElementById('notes').innerHTML = t;

        function submit(clr) {
            var c = document.getElementById('txt1')

            data.push({
                hash: genRanHex(6),
                color: clr,
                text: c.value
            })

            const dta = JSON.stringify(data);

            localStorage.setItem('data1', dta);


            window.location.reload(false)
        }
