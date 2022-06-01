const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    //before we do anything, let's clear out the tracks container (for when you search new term)
    document.querySelector('#tracks').innerHTML = "";

    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    //this code fetches tracks based on search term and prints them to the console: 
    fetch ('https://www.apitutor.org/spotify/simple/v1/search?type=track&limit=5&q=' + term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks);
            if (tracks.length === 0){
                document.querySelector('#tracks').innerHTML += "No tracks found";
            }
            for (const track of tracks){
                // document.querySelector('#tracks').innerHTML += ` <p>${track.name}</p>`;
                document.querySelector('#tracks').innerHTML += (`
               <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)";>
                <img src="${track.album.image_url}" alt="Photo of the album ${track.album.name}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${track.name}</h2>
                    <p>
                    ${track.artist.name}
                    </p>
                </div>
            </button>`)
    
         } });
};

//do you put onclick in index?? how do you get it to click the specific track??
const playTrack = () => {
    for (const track of tracks){
    onclick = document.querySelector('#current-track').innerHTML += (`

    <div id="current-track" class="track-item" data-preview-track="${track.spotify_url}">
    <img src="${track.image_url}">
    <i class="fas play-track fa-pause" aria-hidden="true"></i>
    <div class="label">
        <h2>${track.name}}</h2>
        <p>
           ${track.artist}
        </p>
    </div>`)
    ;}
};


const getAlbums = (term) => {
    document.querySelector('#albums').innerHTML = "";
        //this code fetches albums based on search term and prints them to the console: 

    fetch ('https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term)
        .then(response => response.json())
        .then(albums => {
            console.log(albums);
            if (albums.length === 0){
                document.querySelector('#albums').innerHTML += "No albums found";
            }
            for (const album of albums){
                document.querySelector('#albums').innerHTML += (`
                <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
                <div>
                    <img src="${album.image_url}" alt="Photo of the album ${album.name}">
                    <h2>${album.name}</h2>
                    <div class="footer">
                        <a href="${album.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>



            </section>
                `)
            
            
            
            
            }});
    
};

const getArtistHTML = (artist) => {
    if (!artist.image_url){
        artist.image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/2048px-Mr._Smiley_Face.svg.png"
    }
    return`<section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}" alt="Photo of ${artist.name}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`

};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    document.querySelector("#artist").innerHTML = "";
     // could also do --> `${baseURL}?type=artist&q=${term}`
    fetch(baseURL + "?type=artist&q=" + term)
    .then((response => response.json ()))
    .then((data)=> {
        console.log(data);
        if (data.length > 0) {
            const firstArtist =data[0]
            console.log(firstArtist);
            document.querySelector("#artist").innerHTML = getArtistHTML(firstArtist);



        }else{    
            document.querySelector("#artist").innerHTML = "No artist found";


        }
    }
    )
		
   
};





const handleTrackClick = (ev) => {
    const preview_url = ev.currentTarget.getAttribute('data-preview-track');
    console.log(preview_url);
    audioPlayer.setAudioFile(preview_url);
    audioPlayer.play();
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};