// List of 100 major roadside schools &  hospitals in Coimbatore
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
    { name: "Vivekam Senior Secondary School", lat: 11.0400, lng: 76.9822, type: "school" },
    { name: "Gopal Naidu Children's School", lat: 11.0345, lng: 77.0123, type: "school" },
    { name: "Gopal Naidu Higher Secondary School", lat: 11.0387, lng: 77.0185, type: "school" },
    { name: "ABC Matriculation School", lat: 11.0420, lng: 77.0220, type: "school" },
    { name: "Sri Ramakrishna College of Arts and Science", lat: 11.02217, lng: 76.98703, type: "college" }

];

// List of all main roads in Coimbatore, including roads near Sri Krishna College of Arts and Science, with speed limits
const roads = [
    // Roads near Sri Krishna College of Arts and Science
    { road: "Kuniamuthur Road", startLat: 10.9520, startLng: 76.9700, endLat: 10.9565, endLng: 76.9790, speedLimit: 50 },
    { road: "Sundakkamuthur Road", startLat: 10.9580, startLng: 76.9650, endLat: 10.9625, endLng: 76.9755, speedLimit: 40 },
    { road: "Palakkad Main Road", startLat: 10.9490, startLng: 76.9750, endLat: 10.9550, endLng: 76.9850, speedLimit: 60 },
    { road: "Pollachi Main Road", startLat: 10.9400, startLng: 76.9700, endLat: 10.9480, endLng: 76.9800, speedLimit: 50 },
    { road: "Madukkarai Road", startLat: 10.9280, startLng: 76.9680, endLat: 10.9350, endLng: 76.9780, speedLimit: 50 },
    { road: "Ukkadam Bypass Road", startLat: 10.9810, startLng: 76.9700, endLat: 10.9880, endLng: 76.9820, speedLimit: 60 },
    { road: "Trichy Road", startLat: 10.9880, startLng: 76.9950, endLat: 10.9950, endLng: 77.0050, speedLimit: 50 },
    { road: "Kamarajar Road", startLat: 11.0120, startLng: 76.9900, endLat: 11.0180, endLng: 77.0000, speedLimit: 40 },
    { road: "Mettupalayam Road", startLat: 11.0500, startLng: 76.9450, endLat: 11.0600, endLng: 76.9550, speedLimit: 50 },
    { road: "Avinashi Road", startLat: 11.0250, startLng: 76.9980, endLat: 11.0350, endLng: 77.0080, speedLimit: 1 },

    // Other major roads in Coimbatore
    { road: "Thadagam Road", startLat: 11.0200, startLng: 76.9300, endLat: 11.0300, endLng: 76.9400, speedLimit: 40 },
    { road: "Sathyamangalam Road", startLat: 11.0800, startLng: 76.9430, endLat: 11.0900, endLng: 76.9550, speedLimit: 60 },
    { road: "Vilankurichi Road", startLat: 11.0650, startLng: 76.9950, endLat: 11.0750, endLng: 77.0050, speedLimit: 40 },
    { road: "Peelamedu Road", startLat: 11.0150, startLng: 76.9780, endLat: 11.0220, endLng: 76.9880, speedLimit: 1 },
    { road: "Singanallur Road", startLat: 10.9930, startLng: 76.9880, endLat: 11.0000, endLng: 76.9980, speedLimit: 50 },
    { road: "Race Course Road", startLat: 10.9880, startLng: 76.9600, endLat: 10.9950, endLng: 76.9700, speedLimit: 50 },
    { road: "Gandhipuram Main Road", startLat: 11.0120, startLng: 76.9630, endLat: 11.0200, endLng: 76.9730, speedLimit: 40 },
    { road: "Sulur Road", startLat: 11.0150, startLng: 77.0050, endLat: 11.0250, endLng: 77.0150, speedLimit: 60 },
    { road: "Perur Road", startLat: 10.9880, startLng: 76.9430, endLat: 10.9980, endLng: 76.9530, speedLimit: 50 },
    { road: "Hope College Road", startLat: 11.0180, startLng: 76.9930, endLat: 11.0280, endLng: 77.0030, speedLimit: 40 },
    { road: "Coimbatore Bypass Road", startLat: 10.9900, startLng: 77.0450, endLat: 11.0100, endLng: 77.0550, speedLimit: 1 },
    { road: "L&T Bypass Road", startLat: 10.9500, startLng: 76.9850, endLat: 10.9700, endLng: 76.9950, speedLimit: 80 },
    { road: "Ettimadai Road", startLat: 10.8950, startLng: 76.8950, endLat: 10.9100, endLng: 76.9050, speedLimit: 60 },
    { road: "Gandhimanagar Road", startLat: 11.0251, startLng: 77.0012, endLat: 11.0285, endLng: 77.0054, speedLimit: 35 },
    { road: "VK Road", startLat: 11.0287, startLng: 77.0055, endLat: 11.0354, endLng: 77.0152, speedLimit: 35 },
    { road: "Avarampalayam Road", startLat: 11.0358, startLng: 77.0160, endLat: 11.0451, endLng: 77.0253, speedLimit: 35 },
    { road: "Nava India Road", startLat: 11.0215, startLng: 76.9982, endLat: 11.0282, endLng: 77.0068, speedLimit: 1}
];


// Function to calculate distance between two coordinates
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
    document.addEventListener("click", () => {
        audioPlaying = false; // Reset audio blocking after user interacts
    });
    

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
let lastZoneAlert = null;
let lastZoneExitDistance = null;

function checkSensitiveZone(lat, lng) {
    for (let zone of sensitiveZones) {
        let distance = getDistance(lat, lng, zone.lat, zone.lng);

        if (distance < 150) { // Entering zone
            if (lastZoneAlert !== zone.name) {  // Alert only if it's a new zone
                lastZoneAlert = zone.name;
                lastZoneExitDistance = null; // Reset exit tracking
                
                if (zone.type === "hospital") {
                    
    let count = 0;
    function playRepeatedly() {
        if (count < 3) {
            playAudioAlert("hospital-zone-alert.mp3");
            count++;
            setTimeout(playRepeatedly, 2000);
        }
    }
    playRepeatedly();
    
                    document.getElementById("alert").textContent = "No Horn!";
                } else if (zone.type === "school") {
                    playAudioAlert("school-zone-alert.mp3");
                    document.getElementById("alert").textContent = "Slow Down! School Zone";
                }
            }
            return;
        }
    }

    // If no zone is detected, track exit distance
    if (lastZoneAlert !== null) {
        if (lastZoneExitDistance === null) {
            lastZoneExitDistance = 0; // Start tracking exit distance
        }
        lastZoneExitDistance += 10; // Assume GPS updates every ~10 meters

        if (lastZoneExitDistance > 200) { // Ensure 200 meters before resetting
            lastZoneAlert = null;
            lastZoneExitDistance = null;
        }
    }
}

// Function to check if the user is overspeeding
let speedLimitExceededTime = null;

function checkSpeedLimit(currentSpeed, roadInfo) {
    if (currentSpeed > roadInfo.speedLimit) {
        if (speedLimitExceededTime === null) {
            speedLimitExceededTime = Date.now(); // Start timing
        } else if (Date.now() - speedLimitExceededTime >= 3000) { // Alert only if ignored for 3 seconds
            playAudioAlert("speed-alert.mp3");
            document.getElementById("alert").textContent = "Slow Down! You are exceeding the speed limit.";
            speedLimitExceededTime = Date.now(); // Restart timing for next alert
        }
    } else {
        speedLimitExceededTime = null; // Reset if below speed limit
        document.getElementById("alert").textContent = `You are within the speed limit of ${roadInfo.speedLimit} km/h`;
    }
}

// Function to check if the driver is on a road based on entry & exit points
function isDriverOnRoad(lat, lng, road) {
    let distanceStart = getDistance(lat, lng, road.startLat, road.startLng);
    let distanceEnd = getDistance(lat, lng, road.endLat, road.endLng);

    // Consider driver on road if within 150m of either start or end
    return (distanceStart < 150 || distanceEnd < 150);
}

let currentRoad = null;

function checkRoadEntryExit(lat, lng) {
    let detectedRoad = null;

    for (let road of roads) {
        if (isDriverOnRoad(lat, lng, road)) {
            detectedRoad = road;
            break;
        }
    }

    if (detectedRoad && currentRoad === null) {
        // Driver just entered a road
        currentRoad = detectedRoad;
        document.getElementById("road").textContent = `Entered: ${currentRoad.road}`;
    } 
    else if (!detectedRoad && currentRoad !== null) {
        // Driver exited a road
        document.getElementById("road").textContent = `Exited: ${currentRoad.road}`;
        currentRoad = null; // Reset
    }
}

// Function to get the nearest road
function getRoadFromCoordinates(lat, lng) {
    let closestRoad = "Road not found";
    let minDistance = Infinity;
    let speedLimit = 60; // Default speed limit

    for (let road of roads) {
        let distanceStart = getDistance(lat, lng, road.startLat, road.startLng);
        let distanceEnd = getDistance(lat, lng, road.endLat, road.endLng);
        let minRoadDistance = Math.min(distanceStart, distanceEnd);

        if (minRoadDistance < minDistance) {
            minDistance = minRoadDistance;
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

        // Check road entry & exit
        checkRoadEntryExit(userLat, userLng);
    },
    (error) => {
        console.error("Error getting location:", error);
        alert("Click anywhere to enable audio alerts!");
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
);
