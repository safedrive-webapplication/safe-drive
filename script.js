// List of 100 major roadside schools & hospitals in Coimbatore
const sensitiveZones = [
    { name: "PSG Hospitals", lat: 11.0183, lng: 76.9740, type: "hospital" },
    { name: "Coimbatore Medical College Hospital", lat: 11.0183, lng: 76.9662, type: "hospital" },
    { name: "Ganga Hospital", lat: 11.0104, lng: 76.9616, type: "hospital" },
    { name: "KG Hospital", lat: 11.0027, lng: 76.9663, type: "hospital" },
    { name: "Aravind Eye Hospital", lat: 11.0168, lng: 76.9558, type: "hospital" },
    { name: "Sri Ramakrishna Hospital", lat: 11.0106, lng: 76.9699, type: "hospital" },
    { name: "Kovai Medical Center and Hospital", lat: 11.0536, lng: 77.0186, type: "hospital" },
    { name: "Lotus Eye Hospital", lat: 11.0185, lng: 76.9693, type: "hospital" },
    { name: "Sankara Eye Hospital", lat: 10.9986, lng: 76.9820, type: "hospital" },
    { name: "The Eye Foundation", lat: 11.0165, lng: 76.9690, type: "hospital" },
    { name: "Stanes Higher Secondary School", lat: 11.0006, lng: 76.9665, type: "school" },
    { name: "Avila Convent Matriculation Higher Secondary School", lat: 11.0182, lng: 76.9557, type: "school" },
    { name: "PSG Public Schools", lat: 11.0183, lng: 76.9740, type: "school" },
    { name: "Kendriya Vidyalaya", lat: 11.0183, lng: 76.9662, type: "school" },
    { name: "Chinmaya Vidyalaya", lat: 11.0104, lng: 76.9616, type: "school" },
    { name: "Delhi Public School", lat: 11.0027, lng: 76.9663, type: "school" },
    { name: "Suguna PIP School", lat: 11.0168, lng: 76.9558, type: "school" },
    { name: "CS Academy", lat: 11.0106, lng: 76.9699, type: "school" },
    { name: "SSVM World School", lat: 11.0536, lng: 77.0186, type: "school" },
    { name: "Yuvabharathi Public School", lat: 11.0185, lng: 76.9693, type: "school" },
    { name: "National Model Matriculation School", lat: 11.0224, lng: 76.9790, type: "school" },
    { name: "Bharatiya Vidya Bhavan School", lat: 11.0143, lng: 76.9522, type: "school" },
    { name: "Manchester International School", lat: 11.0273, lng: 76.9761, type: "school" },
    { name: "Camford International School", lat: 11.0135, lng: 76.9842, type: "school" },
    { name: "Kikani Vidhya Mandir", lat: 11.0162, lng: 76.9615, type: "school" },
    { name: "Shri Nehru Vidyalaya", lat: 11.0016, lng: 76.9713, type: "school" },
    { name: "Anan Kids Academy", lat: 11.0531, lng: 76.9772, type: "school" },
    { name: "Vidhya Niketan Public School", lat: 11.0385, lng: 77.0001, type: "school" },
    { name: "Vivekam Senior Secondary School", lat: 11.0400, lng: 76.9822, type: "school" }
];

// List of all main roads in Coimbatore, including roads near Sri Krishna College of Arts and Science, with speed limits
const roads = [
    // Roads near Sri Krishna College of Arts and Science
    { road: "Kuniamuthur Road", lat: 10.9543, lng: 76.9746, speedLimit: 50 },
    { road: "Sundakkamuthur Road", lat: 10.9602, lng: 76.9703, speedLimit: 40 },
    { road: "Palakkad Main Road", lat: 10.9521, lng: 76.9798, speedLimit: 60 },
    { road: "Pollachi Main Road", lat: 10.9435, lng: 76.9772, speedLimit: 50 },
    { road: "Madukkarai Road", lat: 10.9314, lng: 76.9728, speedLimit: 50 },
    { road: "Ukkadam Bypass Road", lat: 10.9846, lng: 76.9763, speedLimit: 60 },
    { road: "Trichy Road", lat: 10.9916, lng: 76.9981, speedLimit: 50 },
    { road: "Kamarajar Road", lat: 11.0156, lng: 76.9954, speedLimit: 40 },
    { road: "Mettupalayam Road", lat: 11.0563, lng: 76.9511, speedLimit: 50 },
    { road: "Avinashi Road", lat: 11.0285, lng: 77.0035, speedLimit: 60 },

    // Other major roads in Coimbatore
    { road: "Thadagam Road", lat: 11.0249, lng: 76.9346, speedLimit: 40 },
    { road: "Sathyamangalam Road", lat: 11.0845, lng: 76.9488, speedLimit: 60 },
    { road: "Vilankurichi Road", lat: 11.0700, lng: 77.0000, speedLimit: 40 },
    { road: "Peelamedu Road", lat: 11.0180, lng: 76.9823, speedLimit: 40 },
    { road: "Singanallur Road", lat: 10.9972, lng: 76.9938, speedLimit: 50 },
    { road: "Race Course Road", lat: 10.9920, lng: 76.9640, speedLimit: 50 },
    { road: "Gandhipuram Main Road", lat: 11.0162, lng: 76.9682, speedLimit: 40 },
    { road: "Sulur Road", lat: 11.0203, lng: 77.0110, speedLimit: 60 },
    { road: "Perur Road", lat: 10.9928, lng: 76.9483, speedLimit: 50 },
    { road: "Hope College Road", lat: 11.0234, lng: 76.9989, speedLimit: 40 },
    { road: "Koundampalayam Road", lat: 11.0642, lng: 76.9940, speedLimit: 50 },
    { road: "Ganapathy Road", lat: 11.0400, lng: 76.9800, speedLimit: 50 },
    { road: "Puliakulam Road", lat: 10.9980, lng: 76.9730, speedLimit: 40 },
    { road: "RS Puram Road", lat: 11.0080, lng: 76.9560, speedLimit: 50 },
    { road: "Saibaba Colony Road", lat: 11.0280, lng: 76.9500, speedLimit: 50 },
    { road: "Podanur Road", lat: 10.9650, lng: 76.9780, speedLimit: 50 },
    { road: "Sundarapuram Road", lat: 10.9900, lng: 76.9300, speedLimit: 40 },
    { road: "Sulur Bypass Road", lat: 11.0350, lng: 77.0150, speedLimit: 60 },
    { road: "Keeranatham Road", lat: 11.0950, lng: 76.9930, speedLimit: 50 },
    { road: "Neelambur Road", lat: 11.0750, lng: 77.0200, speedLimit: 60 },
    { road: "Coimbatore Bypass Road", lat: 11.0000, lng: 77.0500, speedLimit: 80 },
    { road: "L&T Bypass Road", lat: 10.9600, lng: 76.9900, speedLimit: 80 },
    { road: "Ettimadai Road", lat: 10.9020, lng: 76.9000, speedLimit: 60 }
];

// Function to calculate distance between two coordinates
function getDistance(lat1, lng1, lat2, lng2) {
    let R = 6371; // Earth's radius in km
    let dLat = (lat2 - lat1) * (Math.PI / 180);
    let dLng = (lng2 - lng1) * (Math.PI / 180);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Convert to meters
}

// Function to play audio alerts with a delay
let audioPlaying = false;

function playAudioAlert(file) {
    if (audioPlaying) return; // Prevent multiple alerts
    audioPlaying = true;
    let count = 0;

    function play() {
        if (count < 3) { // Repeat 3 times
            let audioContainer = document.getElementById("audio-container");
            audioContainer.innerHTML = ""; // Clear previous audio
            let audio = document.createElement("audio");
            audio.src = file;
            audio.autoplay = true;
            audio.onended = () => {
                count++;
                if (count < 3) {
                    setTimeout(play, 2000); // Play again after 2 seconds
                } else {
                    audioPlaying = false; // Reset flag
                }
            };
            audioContainer.appendChild(audio);
        }
    }
    play();
}

// Function to check if the user is in a sensitive zone
let sensitiveZoneAlertTime = null;

function checkSensitiveZone(lat, lng) {
    for (let zone of sensitiveZones) {
        let distance = getDistance(lat, lng, zone.lat, zone.lng);
        if (distance < 150) { // Alert only if within 150 meters
            if (sensitiveZoneAlertTime === null) {
                sensitiveZoneAlertTime = Date.now(); // Start timer
            } else if (Date.now() - sensitiveZoneAlertTime >= 5000) { // Alert only if ignored for 5 seconds
                if (zone.type === "hospital") {
                    playAudioAlert("no_horn.mp3");
                    document.getElementById("alert").textContent = "No Horn!";
                } else if (zone.type === "school") {
                    playAudioAlert("go_slow.mp3");
                    document.getElementById("alert").textContent = "Slow Down! School Zone";
                }
                sensitiveZoneAlertTime = null; // Reset timer
            }
            return; // Stop checking further zones
        }
    }
    sensitiveZoneAlertTime = null; // Reset if not in any zone
}

// Function to check if the user is overspeeding
let speedLimitExceededTime = null;

function checkSpeedLimit(currentSpeed, roadInfo) {
    if (currentSpeed > roadInfo.speedLimit) {
        if (speedLimitExceededTime === null) {
            speedLimitExceededTime = Date.now(); // Start timing
        } else if (Date.now() - speedLimitExceededTime >= 5000) { // Alert only if ignored for 5 seconds
            playAudioAlert("go_slow.mp3");
            document.getElementById("alert").textContent = "Slow Down! You are exceeding the speed limit.";
            speedLimitExceededTime = null; // Reset timer
        }
    } else {
        speedLimitExceededTime = null; // Reset if below speed limit
        document.getElementById("alert").textContent = `You are within the speed limit of ${roadInfo.speedLimit} km/h`;
    }
}

// Function to get the nearest road
function getRoadFromCoordinates(lat, lng) {
    let closestRoad = "Road not found";
    let minDistance = Infinity;
    let speedLimit = 60; // Default speed limit

    for (let road of roads) {
        let distance = getDistance(lat, lng, road.lat, road.lng);
        if (distance < minDistance) {
            minDistance = distance;
            closestRoad = road.road;
            speedLimit = road.speedLimit;
        }
    }

    return { road: closestRoad, speedLimit: speedLimit };
}

// Real-time GPS tracking to detect roads, speed limits, and provide alerts
navigator.geolocation.watchPosition(
    (position) => {
        let userLat = position.coords.latitude;
        let userLng = position.coords.longitude;
        let currentSpeed = position.coords.speed ? position.coords.speed * 3.6 : 0; // Convert m/s to km/h
        let roadInfo = getRoadFromCoordinates(userLat, userLng);

        document.getElementById("speed").textContent = currentSpeed.toFixed(2);
        document.getElementById("road").textContent = roadInfo.road;

        // Check for speed limit violations
        checkSpeedLimit(currentSpeed, roadInfo);

        // Check if user is in a sensitive zone
        checkSensitiveZone(userLat, userLng);
    },
    (error) => {
        console.error("Error getting location:", error);
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
);
