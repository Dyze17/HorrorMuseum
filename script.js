let items = document.querySelectorAll('.slider .item');
let active = 0;
let slider = document.querySelector('.slider');

function loadShow() {
    items.forEach((item) => {
        item.style.transform = `translateX(0)`;
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
        item.style.opacity = 0;
    });

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Cambiar el fondo del slider según el elemento activo
    switch (active) {
        case 0:
            slider.style.backgroundImage= "url('imagenes/slider/1920.avif')"; // Color para Años 1920
            break;
        case 1:
            slider.style.backgroundImage = "url('imagenes/slider/1950.webp')"; // Color para Años 1950
            break;
        case 2:
            slider.style.backgroundImage = "url('imagenes/slider/1970.avif')"; // Color para Años 1970
            break;
        case 3:
            slider.style.backgroundImage = "url('imagenes/slider/1980.jpg')"; // Color para Años 1980
            break;
        case 4:
            slider.style.backgroundImage = "url('imagenes/slider/1990.jpg')";
            break;
        case 5:
            slider.style.backgroundImage = "url('imagenes/slider/2000.avif')"; // Color para Años 2000
            break;
        case 6:
            slider.style.backgroundImage = "url('imagenes/slider/2010.jpg')"; // Color para Años 2010
            break;
        case 7:
            slider.style.backgroundImage = "url('imagenes/slider/2020.webp')";
    }

    // Mostrar el siguiente elemento (circular)
    let nextIndex = (active + 1) % items.length;
    items[nextIndex].style.transform = `translateX(120px) scale(${1 - 0.2}) perspective(16px) rotateY(-1deg)`;
    items[nextIndex].style.zIndex = 0;
    items[nextIndex].style.filter = 'blur(5px)';
    items[nextIndex].style.opacity = 0.6;

    // Mostrar el elemento anterior (circular)
    let prevIndex = (active - 1 + items.length) % items.length;
    items[prevIndex].style.transform = `translateX(-120px) scale(${1 - 0.2}) perspective(16px) rotateY(1deg)`;
    items[prevIndex].style.zIndex = 0;
    items[prevIndex].style.filter = 'blur(5px)';
    items[prevIndex].style.opacity = 0.6;
}

loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function() {
    active = (active + 1) % items.length; // Incrementa active
    loadShow();
}

prev.onclick = function() {
    active = (active - 1 + items.length) % items.length; // Decrementa active
    loadShow();
}

// Modal Logic
const modalContent = {
    0: {
        htmlContent:
            "<h1>1930s – The Origin of Horror</h1>" +
            "<p>The 1930s marked the birth of horror cinema as a recognized genre, with Universal Studios leading the way. Iconic monsters like <b>Dracula</b>, <b>Frankenstein</b>, and <b>The Mummy</b> introduced audiences to gothic horror, atmospheric storytelling, and memorable performances. These films established many of the tropes and archetypes that would define horror for decades to come.</p>" +
            "<h2>Dracula (1931)</h2>" +
            "<p>This version of Bram Stoker's novel brought Bela Lugosi's classic interpretation of Count Dracula to the screen. The film's haunting mood, dark cinematography, and Lugosi's frightening performance set the standard for the many vampire movies that followed.</p>" +
            "<img src='imagenes/modal/peliculas/dracula1931.png' class='modalImageP' alt='Descripcion Pelicula 1'>" +
            "<h2>Frankenstein (1931)</h2>" +
            "<p>James Whale directed this adaptation of Mary Shelley's book, which made Boris Karloff a star as the tragic Monster. The film's theme of science out of control and Karloff's pantomime acting have established it as a genre classic.</p>" +
            "<img src='imagenes/modal/peliculas/frankenstein1931.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
            "<h2>The mummy (1932)</h2>" +
            "<p>Starring Boris Karloff as the brought-back-to-life Imhotep, The Mummy blended supernatural horror and romance when the brought-back-to-life priest seeks out his lost love. Its gruesome visiuals and ancient Egyptian mythology added a new dimension to horror.</p>" +
            "<img src='imagenes/modal/peliculas/themummy1932.jpg' class='modalImageP' alt='Descripcion Pelicula 3'>" +
            "<h2>King Kong (1933)</h2>" +
            "<p>Though often classified as a monster-adventure film, King Kong had strong horror elements, with its terrifying depiction of a giant ape terrorizing New York City. The film’s groundbreaking stop-motion effects made it a milestone in special effects history.</p>" +
            "<img src='imagenes/modal/peliculas/kingkong1933.png' class='modalImageP' alt='Descripcion Pelicula 4'> "
            ,
        backgroundImage: "url('imagenes/modal/1930.png')"
    },
    1: {
        htmlContent:
            "<h1>1950s: Sci-Fi Horror and Atomic Age Fears</h1>" +
            "<p>The 1950s reflected post-World War II anxieties, particularly fears of nuclear destruction and extraterrestrial invasion. Science fiction merged with horror, introducing paranoia-driven narratives and terrifying monsters.</p>" +
            "<h2>The Thing from Another World (1951)</h2>" +
            "<p>This Cold War-era horror film depicted an alien menace terrorizing scientists in a remote outpost. Its themes of paranoia, distrust, and survival reflected societal fears of Communist infiltration, emphasizing the tension between logic and hysteria in the face of an unknown, shape-shifting threat.</p>" +
            "<img src='imagenes/modal/peliculas/thethingfromanotherworld1951.png' alt='Descripcion pelicula 1' class='modalImageP'>" +
            "<h2>Invasion of the Body Snatchers (1956)</h2>" +
            "<p>A chilling allegory on conformity and lost identity, this film follows a doctor uncovering a silent invasion as townspeople are replaced by soulless alien copies. Its eerie atmosphere, rising paranoia, and social critique on mass control cement it as a classic.</p>" +
            "<img src='imagenes/modal/peliculas/InvasionBody1956.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
            "<h2>Godzilla (1954)</h2>" +
            "<p>Japan’s most famous monster, Godzilla, was a direct metaphor for nuclear destruction following World War II. The film’s harrowing imagery of a devastated Tokyo resonated deeply with audiences, turning Godzilla into a lasting cultural icon.</p>" +
            "<img src='imagenes/modal/peliculas/godzilla1954.jpg' class='modalImageP' alt='Descripcion Pelicula 3'>" +
            "<h2>The Fly (1958)</h2>" +
            "<p>A tragic tale of scientific hubris, The Fly tells the story of a scientist whose teleportation experiment goes horribly wrong, merging him with a housefly. Its body horror elements and tragic undertones made it a standout of the decade.</p>" +
            "<img src='imagenes/modal/peliculas/thefly1958.png' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
        backgroundImage: "url('imagenes/modal/1950.png')"
    },
    2: {
        htmlContent:
            "<h1>1970s: The Revolution of Horror</h1>" +
            "<p>The 1970s marked a turning point in horror, moving away from classic monsters toward psychological and visceral terror. Filmmakers pushed boundaries with intense violence, disturbing themes, and realistic storytelling.</p>" +
            "<h2>The Exorcist (1973)</h2>" +
            "<p>One of the scariest films ever made, The Exorcist terrified audiences with its depiction of demonic possession. Its shocking imagery, psychological horror, and religious themes made it a cultural phenomenon.</p>" +
            "<img src='imagenes/modal/peliculas/exorcist1973.jpg' class='modalImageP' alt='Descripcion Pelicula 1'>" +
            "<h2>The Texas Chain Saw Massacre (1974)</h2>" +
            "<p>Tobe Hooper’s raw, documentary-style film introduced Leatherface, a chainsaw-wielding killer, and redefined horror with its unrelenting intensity. Its gritty realism, disturbing atmosphere, and relentless brutality set a new standard for terror, influencing countless films in the genre.</p>" +
            "<img src='imagenes/modal/peliculas/TheTexasChainSawMassacre1974.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
            "<h2>Halloween (1978)</h2>" +
            "<p>John Carpenter’s slasher masterpiece introduced Michael Myers, a seemingly unstoppable killer stalking teenagers. The film’s atmospheric tension and eerie soundtrack laid the groundwork for the slasher genre.</p>" +
            "<img src='imagenes/modal/peliculas/halloween1978.png' class='modalImageP' alt='Descripcion Pelicula 3'>" +
            "<h2>Alien (1979)</h2>" +
            "<p> Combining science fiction with horror, Alien introduced one of the most terrifying creatures in cinema history: the Xenomorph. The film’s claustrophobic setting and slow-building tension redefined the genre.</p>" +
            "<img src='imagenes/modal/peliculas/alien1979.jpeg' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
        backgroundImage: "url('imagenes/modal/1970.png')"
    },
    3: {
        htmlContent:
            "<h1>1980s: The Slasher Boom & Practical Effects</h1>" +
            "<p>The 1980s saw the rise of the slasher genre, with masked killers and excessive gore dominating the decade. Practical effects reached new heights, creating unforgettable horror imagery.</p>" +
            "<h2>The Shining (1980)</h2>" +
            "<p>Stanley Kubrick’s adaptation of Stephen King’s novel was a masterclass in psychological horror, with Jack Nicholson’s haunting performance, unsettling cinematography, and a slow-burning sense of dread. Its ambiguous storytelling and eerie atmosphere have made it one of horror’s most analyzed films.</p>" +
            "<img src='imagenes/modal/peliculas/theshining1980.jpg' class='modalImageP' alt='Descripcion Pelicula 1'>" +
            "<h2>The Thing (1982)</h2>" +
            "<p>John Carpenter’s paranoid horror masterpiece showcased groundbreaking practical effects, creating grotesque and nightmarish transformations. Its tense, isolated setting and themes of mistrust and survival turned it into a cult classic, influencing generations of horror and sci-fi films.</p>" +
            "<img src='imagenes/modal/peliculas/thething1982.jpg' class='modalImageP' alt='Descripcion Pelicula 2'>" +
            "<h2>A Nightmare on Elm Street (1984)</h2>" +
            "<p>Wes Craven introduced Freddy Krueger, a burned killer who haunts and murders victims in their dreams. His supernatural abilities, grotesque appearance, and dark humor set the film apart from other slashers, making Freddy one of horror’s most iconic villains.</p>" +
            "<img src='imagenes/modal/peliculas/nightmareonelmstreet1984.png' class='modalImageP' alt='Descripcion Pelicula 3'>" +
            "<h2>Hellraiser (1987)</h2>" +
            "<p>Clive Barker’s dark and twisted horror film introduced the Cenobites, otherworldly beings who blur the line between pain and pleasure. Its grotesque imagery, disturbing mythology, and exploration of human desire and suffering cemented it as a cult classic.</p>" +
            "<img src='imagenes/modal/peliculas/hellraiser1987.png' class='modalImageP' alt='Descripcion Pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1980.png')"
    },
    4: {
        htmlContent:
            "<h1>1990s: Meta & Psychological Horror</h1>" +
            "<p>The 1990s shifted horror away from traditional slashers, embracing self-awareness, psychological depth, and supernatural elements. Found footage emerged, and gothic horror explored deeper themes.</p>" +
            "<h2>The Silence of the Lambs (1991)</h2>" +
            "<p>A psychological horror-thriller featuring Hannibal Lecter, a brilliant yet terrifying cannibal psychiatrist, and FBI agent Clarice Starling. The film won five Academy Awards, an exceptional feat for horror.</p>" +
            "<img src='imagenes/modal/peliculas/silenceofthelambs1991.jpg' class='modalImageP' alt='Descripcion pelicula 1' " +
            "<h2>Interview with the Vampire (1994)</h2>" +
            "<p>A gothic horror film that delves into immortality, loneliness, and morality through the complex relationship between vampires Lestat and Louis. Their existential struggles and shifting dynamic add depth to this visually rich and melancholic tale of eternal life.</p>" +
            "<img src='imagenes/modal/peliculas/interviewwiththevampire1994.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
            "<h2>Scream (1996)</h2>" +
            "<p>Wes Craven revitalized the slasher genre with this self-aware horror film, where characters recognized and subverted classic horror tropes while being hunted by the cunning and brutal Ghostface, blending satire, suspense, and genuine scares.</p>" +
            "<img src='imagenes/modal/peliculas/scream1996.png' class='modalImageP' alt='Descripcion pelicula 3'>" +
            "<h2>The Blair Witch Project (1999)</h2>" +
            "<p>A found-footage horror phenomenon that followed three filmmakers lost in the woods, using shaky camerawork, improvisation, and psychological tension to create an unsettling sense of realism, leaving much of the terror to the audience’s imagination.</p>" +
            "<img src='imagenes/modal/peliculas/blairwitch1999.png' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/1990.png')"
    },
    5: {
        htmlContent:
            "<h1>2000s: Remakes & Torture Horror</h1>" +
            "<p>The 2000s saw a wave of horror remakes, bringing back classics with modern intensity. The torture porn subgenre also emerged, with films like Saw and Hostel focusing on extreme violence and psychological torment. Supernatural horror gained traction with hits like The Ring, blending eerie atmosphere with disturbing imagery.</p>" +
            "<h2>The Others (2001)</h2>" +
            "<p>A gothic horror film about a mother shielding her light-sensitive children from unseen forces in their isolated mansion, building an eerie atmosphere that leads to one of the genre’s most haunting and unforgettable twists.</p>" +
            "<img src='imagenes/modal/peliculas/theothers2001.jpg' class='modalImageP' alt='Descripcion 1'>" +
            "<h2>The Ring (2002)</h2>" +
            "<p>A chilling supernatural horror about a cursed videotape that dooms its viewers to death in seven days. Blending eerie visuals, psychological tension, and a creeping sense of dread, the film introduced Samara, a vengeful ghost whose unsettling presence and tragic backstory made her one of horror’s most terrifying figures.</p>" +
            "<img src='imagenes/modal/peliculas/thering2002.png' class='modalImageP' alt='Descripcion 2'>" +
            "<h2>Saw (2004)</h2>" +
            "<p>A psychological horror-thriller that launched the torture horror trend, Saw introduced the sadistic Jigsaw Killer, who forced victims into gruesome traps designed to test their will to live. Its shocking twists, moral dilemmas, and brutal scenarios made it a defining film of the 2000s horror landscape.</p>" +
            "<img src='imagenes/modal/peliculas/saw2004.jpg' class='modalImageP' alt='Descripcion 3'>" +
            "<h2>The Hills Have Eyes (2006)</h2>" +
            "<p>A brutal remake of Wes Craven’s 1977 classic, The Hills Have Eyes follows a stranded family in the desert, where they are hunted by grotesque, radiation-mutated cannibals. With intense violence, relentless suspense, and unflinching brutality, the film redefined survival horror for a modern audience.</p>" +
            "<img src='imagenes/modal/peliculas/thehillshaveeyes2006.jpg' class='modalImageP' alt='Descripcion 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2000.png')"
    },
    6: {
        htmlContent:
            "<h1>2010s: The Horror Renaissance</h1>" +
            "<p>Horror evolved with intelligent, thought-provoking films that combined psychological depth, social commentary, and supernatural terror. Movies like Get Out and Hereditary pushed the genre beyond simple scares, exploring themes of trauma, identity, and societal fears while still delivering unsettling and memorable horror experiences.</p>" +
            "<h2>It Follows (2014)</h2>" +
            "<p>A minimalist yet terrifying film, this film introduces a relentless supernatural entity that pursues its victims after any sexual contact. With a dreamlike atmosphere, eerie cinematography, and an unnerving score, the film creates a constant sense of dread, redefining supernatural horror with its unique premise and slow-burning tension.</p>" +
            "<img src='imagenes/modal/peliculas/itfollows2014.jpg' class='modalImageP' alt='Descripcion pelicula 1'>" +
            "<h2>The Witch (2015)</h2>" +
            "<p>A slow-burn folk horror film set in 1600s New England, The Witch follows a Puritan family exiled to the wilderness, where paranoia and religious extremism drive them to madness. With haunting cinematography, eerie authenticity, and psychological dread, it masterfully explores isolation, faith, and the fear of the unknown.</p>" +
            "<img src='imagenes/modal/peliculas/thewitch2015.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
            "<h2>Get Out (2017)</h2>" +
            "<p>A psychological horror film blending racial commentary and psychological terror, Get Out follows a Black man visiting his white girlfriend’s family, only to uncover a sinister secret. With unsettling tension, social satire, and mind-bending twists, Jordan Peele’s directorial debut redefined modern horror, earning him an Oscar for Best Original Screenplay.</p>" +
            "<img src='imagenes/modal/peliculas/getout2017.jpg' class='modalImageP' alt='Descripcion pelicula 3'>" +
            "<h2>Hereditary (2018)</h2>" +
            "<p>A disturbing family horror film that explores grief, trauma, and supernatural terror, Hereditary follows a family unraveling dark secrets after their grandmother’s death. With masterful tension, unsettling imagery, and an unforgettable performance by Toni Collette, the film builds to a shocking and nightmarish climax that lingers long after the credits roll.</p>" +
            "<img src='imagenes/modal/peliculas/hereditary2018.jpg' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2010.png')"
    },
    7: {
        htmlContent:
            "<h1>2020s: The Evolution of Horror</h1>" +
            "<p>Horror continues to expand, exploring new themes, storytelling techniques, and psychological depth. Modern films challenge traditional tropes, blending horror with social issues, psychological tension, and unexpected narratives.</p>" +
            "<h2>The Invisible Man (2020)</h2>" +
            "<p>A modern reimagining of the classic tale, The Invisible Man shifts focus to psychological abuse, gaslighting, and paranoia. With intense suspense, Elisabeth Moss delivers a gripping performance as a woman haunted by an unseen force, blurring the line between reality and delusion in a chilling portrayal of domestic horror.</p>" +
            "<img src='imagenes/modal/peliculas/theinvisibleman2020.jpg' class='modalImageP' alt='Descripcion pelicula 1'>" +
            "<h2>Nope (2022)</h2>" +
            "<p>Jordan Peele’s Nope blends sci-fi horror with sharp social commentary, exploring themes of spectacle, exploitation, and humanity’s obsession with the unknown. With eerie visuals and slow building tension, the film redefines extraterrestrial horror while critiquing the entertainment industry’s thirst for shocking spectacle.</p>" +
            "<img src='imagenes/modal/peliculas/nope2022.jpg' class='modalImageP' alt='Descripcion pelicula 2'>" +
            "<h2>Barbarian (2022)</h2>" +
            "<p>Barbarian is a subversive horror film that constantly shifts audience expectations, starting as a simple rental mix up before unraveling into psychological terror. Blending social commentary with shocking twists, it explores themes of trust, trauma, and the hidden dangers lurking beneath the surface of everyday situations.</p>" +
            "<img src='imagenes/modal/peliculas/barbarian2022.png' class='modalImageP' alt='Descripcion pelicula 3'>" +
            "<h2>Smile (2022)</h2>" +
            "<p>Smile is a psychological horror film that delves into the lasting effects of trauma, following a therapist plagued by a sinister entity that spreads through its victims’ terrifying smiles. As paranoia and dread intensify, the film explores the inescapable nature of fear and psychological suffering.</p>" +
            "<img src='imagenes/modal/peliculas/smile2022.jpg' class='modalImageP' alt='Descripcion pelicula 4'>"
            ,
            backgroundImage: "url('imagenes/modal/2020.png')"
    }
};
let modal = document.getElementById("modal");
let closeModal = document.getElementsByClassName("close")[0];

// Función para abrir el modal y cargar el contenido
function openModal(index) {
    const content = modalContent[index];
    if (content) {
        document.getElementById("modalBody").innerHTML = content.htmlContent; // Cargar contenido HTML
        modal.style.display = "block"; // Mostrar el modal
        document.body.classList.add('modal-open'); // Agregar clase para bloquear el scroll

        // Cambiar la imagen de fondo del modal
        const modalBackground = document.querySelector('.modal-background');
        modalBackground.style.backgroundImage = content.backgroundImage; // Cambiar la imagen de fondo
        modalBackground.style.animation = 'none'; // Reiniciar la animación
        modalBackground.offsetHeight; // Forzar el reflow
        modalBackground.style.animation = 'scaleInBackground 0.6s forwards'; // Aplicar la animación
    } else {
        console.error("Contenido no encontrado para el índice:", index);
    }
}

// Asignar evento de clic a cada item
items.forEach((item, index) => {
    item.onclick = function() {
        openModal(index); // Pasar el índice del item
    };
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.onclick = function() {
    modal.style.display = "none"; // Ocultar el modal
    document.body.classList.remove('modal-open'); // Quitar clase para desbloquear el scroll
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar el modal
        document.body.classList.remove('modal-open'); // Quitar clase para desbloquear el scroll
    }
}