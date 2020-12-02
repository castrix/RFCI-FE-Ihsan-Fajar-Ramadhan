## Simple mobile App

Simple mobile App dibuat dengan React Js. Dalam App.js saya membuat tiga buah state yaitu

    const [input, setInput]=useState("");
    const [output, setOutput]=useState("");
    const [reversed, setReversed]=useState(false);
    const [undo, setUndo]=useState(false);

State `input` berfungsi untuk merekam perubahan pada elemen `<input>`. State `output` berfungsi untuk merekam isi yang akan ditampilkan pada label `<h2>`. State `reversed` berfungsi untuk merekam kondisi output apakah terbali atau tidak. State `undo` berfungsi untuk merekam apabia fungsi undo dijalankan, untuk mencegah fungsi `redo` berjaan apabila tidak ada aksi `undo` sebelumnya.

Saya juga membuat empat buah helper function yaitu:

    const handleChange=(e)=>{
        setInput(e.target.value);
        setOutput(e.target.value);
    }
    const handleReverse=()=>{
        input && setOutput(input.split("").reverse().join(""));
        setReversed(true)
    }
    const handleUndo=()=>{
        reversed && setOutput(output.split("").reverse().join(""));
        reversed && setUndo(true);
        reversed && setReversed(false);
    }
    const handleRedo=()=>{
        undo && setOutput(output.split("").reverse().join(""));
        undo && setReversed(!reversed);
        undo && setUndo(!undo);
    }

Hasil akhir:


Fungsi `handleChange` dijalankan apabila ada event `onChange` dari `<input>` text, berfungsi untuk merekam perubahan dan menyimpan pada state `input`. Fungsi `handleReverse` dijalankan pada `<button>` `Reverse`, berfungsi untuk membalik nilai state `input` dan menyimpannya dalam state `output` untuk ditampilkan di elemen `<h2>`. Fungsi `handleUndo` dijalankan pada `<button>` `Undo/Redo` apabila di klik 1x, berfungsi untuk membalik nilai state `output` kembali ke nilai semula. Terakhir fungsi `handleRedo` dijalankan pada `<button>` `Undo/Redo` apabila di klik 2x, berfungsi untuk membalik hasil dari fungsi `handleUndo` dengan catatan tidak menggantikan fungsi tombol `Reverse`. 

Sedangkan tampilan web yang direturn adalah sebagai berikut:

    <div className="App">
        <header className="App-header">
            <input type="text" onChange={e=>handleChange(e)} />
            <h2>
            {`Output: ${output}`}
            </h2>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
            <button onClick={handleReverse}>Reverse</button>
            <button onClick={handleUndo} onDoubleClick={handleRedo}>Undo/Redo</button>
            </div>
        </header>
    </div>

![Hasil Simple mobile App](../gambar_laporan/hasilmobileapp.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
