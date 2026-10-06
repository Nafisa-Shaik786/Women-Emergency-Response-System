/* =========================
   PAGE NAVIGATION
========================= */

function goToPage(page) {

    window.location.href = page;

}


/* =========================
   HOME PAGE
========================= */

const lowButton =
    document.getElementById("lowButton");

const highButton =
    document.getElementById("highButton");

const lowStatus =
    document.getElementById("lowStatus");

const highStatus =
    document.getElementById("highStatus");


if (lowButton && highButton) {

    lowButton.addEventListener(
        "click",
        function () {

            lowStatus.style.display = "flex";

            highStatus.style.display = "none";

        }
    );


    highButton.addEventListener(
        "click",
        function () {

            lowStatus.style.display = "none";

            highStatus.style.display = "flex";

        }
    );

}


/* =========================
   SOS BUTTON
========================= */

const protectButton =
    document.getElementById("protectButton");


if (protectButton) {

    protectButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "sos.html";

        }
    );

}


/* =========================
   VIDEO SEARCH
========================= */

const videoSearch =
    document.getElementById("videoSearch");


if (videoSearch) {

    videoSearch.addEventListener(
        "input",
        function () {

            const searchText =
                videoSearch.value.toLowerCase();


            const videos =
                document.querySelectorAll(
                    ".video-card"
                );


            videos.forEach(
                function (video) {

                    const text =
                        video.innerText.toLowerCase();


                    if (
                        text.includes(searchText)
                    ) {

                        video.style.display =
                            "block";

                    } else {

                        video.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================
   SOS MICROPHONE / LOCATION
========================= */

const microphoneButton =
    document.getElementById(
        "microphoneButton"
    );


if (microphoneButton) {

    microphoneButton.addEventListener(
        "click",
        function () {

            const message =
                document.getElementById(
                    "sosMessage"
                );


            if (!navigator.geolocation) {

                message.innerText =
                    "Location is not supported.";

                return;

            }


            message.innerText =
                "Requesting your location...";


            navigator.geolocation.getCurrentPosition(

                function (position) {

                    const latitude =
                        position.coords.latitude;

                    const longitude =
                        position.coords.longitude;


                    message.innerText =
                        "Emergency activated. " +
                        "Location captured: " +
                        latitude.toFixed(4) +
                        ", " +
                        longitude.toFixed(4);

                },


                function () {

                    message.innerText =
                        "Location permission was denied.";

                }

            );

        }
    );

}


/* =========================
   THEME BUTTON
========================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            alert(
                "Theme settings will be connected later."
            );

        }
    );

}