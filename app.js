


// fetch('https://equran.id/api/v2/surat')
//     .then(response => {
//         // Check if the response status is OK (200)
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // Parse the response body as JSON
//         return response.json();
//     })
//     .then(data => {
//         // Do something with the JSON data
//         for (let i = 0; i <= 113; i++) {
//             const as = i;
//             // console.log(as);
//             const names = data.data[as].nama;
//             const normo = data.data[as].nomor;
//             const palce = data.data[as].namaLatin;
//             console.log(names)
//             console.log(normo)
//             console.log(palce)
//         }

//     })
//     .catch(error => {
//         // Handle any errors that occur during the fetch operation
//         console.error('Fetch error:', error);
//     });


fetch('https://equran.id/api/v2/surat')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= 113; i++) {
            const count = i;
            const names = data.data[count].nama;
            const number = data.data[count].nomor;
            const place = data.data[count].tempatTurun;
            console.log(names)
            console.log(number)
            console.log(place)
            
        }
        
    }



    )
    .catch(error => console.error('Fetch error:', error));

