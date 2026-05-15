const chatLog = document.getElementById("chat-log");

function startSystem() {
  const boot = document.getElementById("boot-screen");
  const main = document.getElementById("main-interface");

  boot.classList.add("fade-out");
  setTimeout(() => {
    boot.classList.add("hidden");
    main.classList.remove("hidden");

    ask("about", false);
  }, 800);
}

const spaceFacts = [
  "The Apollo 11 guidance computer had less processing power than a modern toaster.",
  "Mars rovers run on a specialized operating system called VxWorks.",
  "Cosmic rays can cause 'bit-flips' in computer memory, a major challenge for space hardware.",
  "The Voyager 1 probe is still running on code written in the 1970s.",
  "NASA's Curiosity rover has a 2-megapixel camera, optimized for data transmission speed over resolution.",
  "Software on the Space Shuttle was so well-engineered it had zero errors in several missions.",
  "Spacecraft use 'Radiation-Hardened' processors to survive high-energy particles.",
  "The first computer bug was a literal moth, but in space, 'bugs' are often caused by solar flares.",
  "Margaret Hamilton's hand-written code for the Apollo mission was as tall as she was.",
  "International Space Station (ISS) laptops primarily run Linux to ensure stability.",
  "Deep space communication uses the 'Delay Tolerant Networking' protocol.",
  "Python is one of the most popular languages used at NASA for data analysis.",
  "The Hubble Space Telescope was originally programmed using a language called Forth.",
  "Satellites use GPS clock synchronization that must account for Einstein's theory of relativity.",
  "Modern SpaceX rockets use Chromium and JavaScript for their touchscreen interfaces.",
  "Black hole simulations require supercomputers with petabytes of RAM.",
  "The New Horizons probe 'slept' for years to conserve power, waking up via a pre-programmed BIOS timer.",
  "Binary code was used in the Arecibo message sent to space in 1974.",
  "Error-correcting code (ECC) memory is mandatory for any computer leaving Earth's atmosphere.",
  "Astronauts on the ISS have their own private LAN to talk to family via VoIP.",
];

const responses = {
  about:
    "Identification: Lonly Edward. <br>Current Status: 2nd Year Computer Science student at the University of Dodoma. I enjoy learning about tech and building new things specifically within the realms of full stack development and Cybersecurity. I spend my time exploring the tech space and securing digital orbits.",

  projects:
    "Scanning active project sectors... <br><br> 1. RoastMeMate: A simple website that generates roasts(from a template obviously) with a click of a button. <br> <a href='https://lonlyedward.github.io/RoastMeMate/' class='contact-link' target='_blank'>ACCESS LIVE HOST</a> <br><br> 2. PFMS: A personal finance management web application built with Django and React. <br> <a href='https://github.com/LonlyEdward/PFMS' class='contact-link' target='_blank'>ACCESS GITHUB</a>",

  fun: () => {
    const fact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
    return `Random Spacey Fact <br><br> "${fact}" <br><br> <img src="https://picsum.photos/seed/${Math.random()}/300/200" class="space-fact-img" alt="Space Tech Visualization">`;
  },

  contact:
    "Establishing communication bridge... <br><br> [CONNECT_VIA_GITHUB] <br> <a href='https://github.com/LonlyEdward' class='contact-link' target='_blank'>github.com/lonly-edward</a> <br><br> [CONNECT_VIA_LINKEDIN] <br> <a href='https://www.linkedin.com/in/lonly-edward/' class='contact-link' target='_blank'>linkedin.com/in/lonly-edward</a> <br><br> [INTERNAL_LOOP] <br> <a href='#' class='contact-link' onclick='alert(\"Where you going Mate? This is it innit!.\"); return false;'>local.portfolio.host</a>",
};

function ask(topic, shouldScroll = true) {
  const userMsg = document.createElement("div");
  userMsg.className = "message user-msg";
  userMsg.innerHTML = `<p>> EXECUTE ${topic.toUpperCase()}</p>`;
  chatLog.appendChild(userMsg);

  setTimeout(() => {
    const sysMsg = document.createElement("div");
    sysMsg.className = "message system";

    const content =
      typeof responses[topic] === "function"
        ? responses[topic]()
        : responses[topic];

    sysMsg.innerHTML = `<p>${content}</p>`;
    chatLog.appendChild(sysMsg);

    if (shouldScroll) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, 500);
}
