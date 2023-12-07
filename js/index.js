document.addEventListener('DOMContentLoaded', function () {
    // Get all song links
    const songLinks = document.querySelectorAll('.songname');

    // Attach click event listener to each song link
    songLinks.forEach(function (songLink) {
        songLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the selected song data attributes
            const ds = this.getAttribute('zx-ds');
            const sn = this.getAttribute('zx-dsn');
            const dsan = this.getAttribute('zx-dsan');
            const dspu = this.getAttribute('zx-dspu');
            const dslyr = this.getAttribute('zx-lyr');

            const songData = `${ds}|${sn}|${dsan}|${dspu}|${dslyr}`;

            // Set a cookie with the song data
            document.cookie = `songData=${encodeURIComponent(songData)}`;
            // Redirect to songplayer.html with the selected song data as a query parameter
            window.location.href = ``;
        });
    });
});
